import { Router } from "express";
import taskController from "../controller/taskController";


/**
 * Class conteiner of routes for the server
 */
class TaskRoutes{
    public router: Router = Router();

    /**
     * constructor what start the routes for server
     */
    constructor(){
        this.config();
    }

    /**
     * method what resive the routes a the database
     */
    config(){
     this.router.get('/',taskController.getTasks);
     this.router.get('/:id', taskController.getTask);
     this.router.post('/', taskController.saveTask);
    }
}
const taskRoutes = new TaskRoutes();
export default taskRoutes.router;