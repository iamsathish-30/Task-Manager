import express from 'express';
import { getTasks , getSingleTask , postTask , deleteTask , updateTask } from '../controller/tasks.js';
const router = express.Router();

router.get('/',getTasks);

router.post('/',postTask);

router.get('/:id',getSingleTask);

router.delete('/:id',deleteTask);

router.put('/:id',updateTask);

export default router;