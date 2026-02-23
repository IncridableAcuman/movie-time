const { Router } = require('express')
const authController = require('../controller/auth.controller')

const router = Router();

router.post("/register",authController.register);
router.post("/login",authController.login);
router.get("/refresh",authController.refresh);
router.post("/logout",authController.logout);
router.post("/forgot-password",authController.forgotPassword);
router.post("/reset-password",authController.resetPassword);


module.exports = router;