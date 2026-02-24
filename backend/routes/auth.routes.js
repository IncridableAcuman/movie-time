const { Router } = require('express')
const authController = require('../controller/auth.controller')
const { body } = require('express-validator');

const router = Router();

router.post("/register"
    , body('username').isLength({ min: 3, max: 50 }).notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 8, max: 255 }).notEmpty()
    , authController.register);
router.post("/login",
    body('email').isEmail(),
    body('password').isLength({ min: 8, max: 255 }).notEmpty(),
    authController.login);
router.get("/refresh", authController.refresh);
router.post("/logout", authController.logout);
router.post("/forgot-password",
    body('email').isEmail(),
    authController.forgotPassword);
router.put("/reset-password",
    body('password').isLength({ min: 8, max: 255 }).notEmpty(),
    body('token').notEmpty(),
    authController.resetPassword);


module.exports = router;