import express from "express"
import { newTask,getMyTasks, updateTasks, deleteTasks } from "../controllers/task.js" 
import { isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()

router.post("/new",isAuthenticated,newTask)
router.get("/all",isAuthenticated,getMyTasks)
router.route("/:id").put(updateTasks).delete(deleteTasks)

export default router
