import express from "express";

import { getAllAir, addAir, getAir, deleteAir } from "../controllers/todoController";

const router = express.Router();

// localhost:8000/todos/ GET, POST
router.route("/").get(getAllAir).post(addAir);

// localhost:8000/todos/:id
router.route("/:id").get(getAir);


router.route("/:id").delete(deleteAir);

export default router;