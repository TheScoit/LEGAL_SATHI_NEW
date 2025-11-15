import app from "../app.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Appointment } from "../models/appointment.Schema.js";
import { User } from "../models/userSchema.js";

export const postAppointment = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    dob,
    gender,
    Appointment_date,
    department, 
    attorney_firstName,
    attorney_lastName,
    hasVisited,
    Address,
  } = req.body;


  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !dob ||
    !gender ||
    !Appointment_date ||
    !department ||
    !attorney_firstName ||
    !attorney_lastName ||
    !Address
  ) {
    return next(new ErrorHandler("Please fill all required fields", 400));
  }

  // Find the attorney by name and department
  const attorneys = await User.find({
    firstName: attorney_firstName,
    lastName: attorney_lastName,
    role: "Attorney",
    attorneyDepartment: department,
  });

  if (attorneys.length === 0) {
    return next(new ErrorHandler("Attorney not found", 404));
  }

  if (attorneys.length > 1) {
    return next(
      new ErrorHandler(
        "Attorney conflict: multiple attorneys found. Please contact via email or phone.",
        409
      )
    );
  }

  const AttorneyId = attorneys[0]._id;

  // Ensure req.User exists (authentication required)
  const LitigantId = req.User?._id;
  if (!LitigantId) {
    return next(new ErrorHandler("User not authenticated", 401));
  }

  // Create the appointment
  const appointment = await Appointment.create({
    firstName,
    lastName,
    email,
    phone,
    dob,
    gender,
    Appointment_date,
    department,
    attorney: {
      firstName: attorney_firstName,
      lastName: attorney_lastName,
    },
    hasVisited: !!hasVisited,
    Address,
    AttorneyId,
    LitigantId,
  });

  res.status(201).json({
    success: true,
    message: "Appointment booked successfully",
    appointment,
  });
});

export const getAllAppointments = catchAsyncErrors(async (req, res, next) => {
  const appointments = await Appointment.find();
  res.status(200).json({
    success: true,
    appointments,
  });
});

export const updateAppointmentStatus = catchAsyncErrors(
  async (req, res, next) => {
    const { id } = req.params;
    let appointment = await Appointment.findById(id);
    if (!appointment) {
      return next(new ErrorHandler("Appointment Not Found", 404));
    }
    appointment = await Appointment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      appointment,
      message: "Appointment Status Updated",
    });
  }
);

export const deleteAppointment = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let appointment = await Appointment.findById(id);
  if (!appointment) {
    return next(new ErrorHandler("Appointment Not Found", 404));
  }
  await appointment.deleteOne();
  res.status(200).json({
    success: true,
    message: "Appointment Deleted",
  });
});
