import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser, userLogin, userRegister, getLoggedInUser, userAccountVerify, userRecoveryPassword, resetPassword } from '../controllers/userController.js';
import { adminMiddleware } from '../middleware/adminMiddleware.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { userMiddleware } from '../middleware/userMiddleware.js';



// init router
const router = express.Router();

// Auth Route
router.post('/login', userLogin);
router.post('/register', userRegister);
router.get('/me', getLoggedInUser);
router.post('/verify', userAccountVerify);
router.post('/recovery-password', userRecoveryPassword);
router.post('/reset-password', resetPassword);


// route
router.route('/').get(adminMiddleware, getAllUser).post(adminMiddleware, createUser);
router.route('/:id').get(userMiddleware, getSingleUser).put(userMiddleware, updateUser).patch(userMiddleware, updateUser).delete(userMiddleware, deleteUser);




// Export default router
export default router;