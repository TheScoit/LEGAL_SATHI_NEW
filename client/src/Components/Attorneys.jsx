import React, { useContext } from "react";
import LawyerCard from "./Card";
import { ThemeContext } from "./ThemeContext";

const Attorneys = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <section
      className={`lawyer py-16 px-6 md:px-20 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#0f172a] text-white"
          : "bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-900"
      }`}
    >
      <div className="text-center mb-12">
        <h2
          className={`text-3xl md:text-4xl font-extrabold ${
            theme === "dark" ? "text-orange-400" : "text-orange-900"
          }`}
        >
          Our Expert Lawyers
        </h2>
      </div>

      <div className="lawyer__cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <LawyerCard
          src="https://t3.ftcdn.net/jpg/00/69/90/62/360_F_69906272_95xqHEpDgZTq2MUBHKMUtO4vB3uyIxHI.jpg"
          name="Farhan Shaikh"
          occupation="Civil Lawyer"
        />
        <LawyerCard
          src="https://media.istockphoto.com/id/639115088/photo/portrait-of-a-business-man-outdoors.jpg?s=612x612&w=0&k=20&c=dHjVqovQs0sLEpB9lzPuD8q91rOtLk4seVEjxC6GdrM="
          name="Mohd Saad Shaikh"
          occupation="Divorce Lawyer"
        />
        <LawyerCard
          src="https://t4.ftcdn.net/jpg/02/95/96/79/360_F_295967926_T2nUnmhQc00dwwp3KsvJSPHMP2xhekry.jpg"
          name="Arsalan Shaikh"
          occupation="Criminal Lawyer"
        />
        <LawyerCard
          src="https://static.vecteezy.com/system/resources/thumbnails/032/411/190/small/a-male-lawyer-stands-confidently-in-the-courtroom-a-portrait-capturing-his-professionalism-and-dedication-to-the-law-generative-ai-photo.jpg"
          name="Azaz Ahmed"
          occupation="Constitutional Lawyer"
        />
        <LawyerCard
          src="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg"
          name="Soham Roy"
          occupation="Family Lawyer"
        />
        <LawyerCard
          src="https://www.huntonak.com/images/content/2/5/v2/25800/Levine-Michael.jpg"
          name="Rahul Chaturvedi"
          occupation="Corporate Lawyer"
        />
        <LawyerCard
          src="https://media.istockphoto.com/id/514165852/photo/successful-man-portrait.jpg?s=612x612&w=0&k=20&c=P3qvqTEAFXZlD-Uw1fMflEZxThPRBqiP5ls6IP-AWHA="
          name="Samar Yadav"
          occupation="Employment Lawyer"
        />
        <LawyerCard
          src="https://thelawyer.imgix.net/content/uploads/2020/12/15164744/Banning-Fred-scaled.jpg?auto=compress,format&q=60&w=652&h=434"
          name="Arbaz Khan"
          occupation="Immigration Lawyer"
        />
      </div>
    </section>
  );
};

export default Attorneys;
