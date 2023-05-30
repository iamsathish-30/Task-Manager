import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    "title":{
        type:String,
        required:[true,'Must provide name'],
        trim:true,
        maxlength:[27,'Name can not be more than 20']
    },
    "completed": {
        type:Boolean,
        default:false
    },
    "date":{
        type:Date,
        default:Date.now
    }
},
{versionKey:false}
)

export default mongoose.model('Task',TaskSchema);