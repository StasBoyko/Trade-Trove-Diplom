import { Router } from "express";
import FAQUController from "../controllers/FAQUCintroller.js";

const FaquRouter=new Router();

FaquRouter.get('/FAQU/',FAQUController.getAll)

export default FaquRouter;