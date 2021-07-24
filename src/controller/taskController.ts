import { Request, Response } from 'express';
import { pool } from '../database';

/**
 * class what container the consult a the database task
 */

class TaskController {

    /**
     * method what get all the task
     * @returns {json} return un json whit gt all task
     */
    public async getTasks(req: Request, res: Response) {
        const db = await pool();
        const [rows] = await db.query('select * from tasks');
        res.json(rows);

    }

    public async getTask(req: Request, res: Response) {
        const db = await pool();
        const [rows] = await db.query('select * from tasks where id =?', [req.params.id]);
        if ((rows as any).length == 0) {
            res.status(404).json({ messagge :"the data don't exist "})
        }
        res.json((rows as any)[0]);
    }

    public async saveTask(req: Request, res: Response){
        const db = await pool();
        const [result]  = await db.query("insert tasks(title, description) values(?,?)", [req.body.title, req.body.description]);
        res.json({
            id: (result as any ).insertId,
        ...req.body}
        );
    }
}

const taskController = new TaskController();
export default taskController;