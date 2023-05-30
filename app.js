import express from "express";
import 'dotenv/config'
import taskRoutes from './routes/tasks.js';
import bodyParser from "body-parser";
import connectDb from "./db/connection.js";

const app = express();

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log(`The Requested URL is ${req.url}`);
    res.send("Home Page")
})

app.use('/api/v1/tasks',taskRoutes);

const start = async()=>{
    try{
        /*URI la symbols use pannuna adha encode panni tha anupanu 
        for this example we use @ adhu oda encryption %40*/
        await connectDb(process.env.MONGODB_URI);
        app.listen(process.env.PORT,()=>{
            console.log(`The Server is running on the port ${process.env.PORT}`);
        }) 
    }
    catch(err){
        console.log(err)
    };
}


start();



