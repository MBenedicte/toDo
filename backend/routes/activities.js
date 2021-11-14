import { Router } from "express";
import { getAllActivities } from "../controller/activities.js";

const router = Router();

router.get("/activities", getAllActivities);

export default router;
