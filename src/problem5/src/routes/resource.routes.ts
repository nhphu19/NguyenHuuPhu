import { Router } from "express";
import ResourceController from "../controllers/resource.controller";

const router = Router();

router.post("/", ResourceController.create);
router.get("/", ResourceController.getAll);
router.get("/:id", ResourceController.getOne);
router.put("/:id", ResourceController.update);
router.delete("/:id", ResourceController.delete);

export default router;
