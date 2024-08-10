import express from "express"
import { Booking,search} from "../controller/taskController.js";
const router = express.Router()

//booking and searching Routs or API
router.route("/book").post(Booking)
router.route("/search/:id").get(search)
export default router