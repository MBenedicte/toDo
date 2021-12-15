import { Router } from "express";
import {
  createActivity,
  asyncHandler,
  checkActivity,
  findOneActivity,
  findAllActivities,
  editActivity,
} from "./controller";

const router = Router();

router.post("/activity/create", checkActivity, asyncHandler(createActivity));
router.get("/activity/findOne/:id", asyncHandler(findOneActivity));
router.get("/activity/findAll", asyncHandler(findAllActivities));
router.put("/activity/edit/:id", asyncHandler(editActivity));
export default router;
