import Task from '../models/tasks.js'
/*The below block of code is used to get total no of tasks from 
Database which has the model names Tasks(Collection)*/
const getTasks = async(req,res) =>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

//The below block of code is used to post task using post method
const postTask = async(req,res) =>{
    try{
        const task = {
            title : req.body.title,
            completed : req.body.completed,
            date:req.body.date
        }
        await Task.create(task);
        res.status(201).json({task});
    }catch(err){
        res.status(500);
        console.log("The Error Thrown is ",err.message)
        res.json({msg:err});
    }  
}


//The below code is to delete the task by given id 
const deleteTask = async(req,res) =>{
    try{
        const deletedTask = await Task.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedTask);
    }catch(err){
        res.status(500).json({msg:err.message});
    }
}

//The below code is to update the task value of [body] of specific id 
const updateTask = async(req,res) =>{
    const id = req.params.id;
    try{
        await Task.findByIdAndUpdate(id,req.body);
        res.status(200).send("Task updated");
    }catch(err){
        res.status(500).json({msg:err});
    }
}


//The below block of code is used to retrieve the single document with the help of id
const getSingleTask = async (req,res) =>{
    //console.log(req.params);
    const id = req.params.id;
    try{
        const singleTask = await Task.findById(id);
        res.status(200).json({singleTask});
    }
    catch(err){
        console.log(`The Error while retrieving the single document is ${err}`);
        res.status(500).json({msg:err});
    }
}


export {getTasks , getSingleTask , postTask , deleteTask , updateTask};