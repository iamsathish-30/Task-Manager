import mongoose from "mongoose";

/*Connection string la special character kudutha adha encode panni tha again 
mongoose kuda connect panna mudium*/

const connectDb = (url)=>{
   return mongoose.connect(url,{useNewUrlParser: true})
};

export default connectDb;
    