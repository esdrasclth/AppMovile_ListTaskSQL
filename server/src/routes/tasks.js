import { Router } from 'express';
import { deleteTask, getTaskCount, getTasks, getTask, saveTask, updateTask } from '../controllers/tasks'

const router = Router();

//Creacion de las rutas
router.get("/tasks", getTasks);

router.get("/tasks/count", getTaskCount);

router.post("/tasks", saveTask);

router.get("/tasks/:id", getTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

export default router;