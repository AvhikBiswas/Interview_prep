import express,{ Router } from "express";
import signInUserController from "../../controllers/signIn";
import registerUser from "../../controllers/registerUser";
import createRequest from "../../controllers/request";


const router: Router = express.Router();

router.post('/signin',signInUserController);
router.post('/register',registerUser);
router.post('/request',createRequest);

export default router;