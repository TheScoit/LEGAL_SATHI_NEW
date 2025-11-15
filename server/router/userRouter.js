import express from 'express'
import { addNewAdmin, addNewAttorney, getAllAttorneys, getAttorneyById, getUserDetails, litigantRegister, loggedoutAdmin, loggedoutLitigant, login } from '../controllers/userController.js';
import {isAdminAuthenticated, isLitigantAuthenticated} from '../middlewares/auth.js'

const router = express.Router();

router.post("/login", login)
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);
router.get("/admin/logout", isAdminAuthenticated, loggedoutAdmin);
router.post("/litigant/register", litigantRegister)
router.get("/litigant/me", isLitigantAuthenticated, getUserDetails);
router.get("/litigant/logout", isLitigantAuthenticated, loggedoutLitigant);
router.get("/attorney", getAllAttorneys);
router.post("/attorney/addnew",isAdminAuthenticated,addNewAttorney);
router.get("/attorney/:id", getAttorneyById);

export default router;