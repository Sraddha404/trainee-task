import mongoose from "mongoose";

const ProductIDSchema = new mongoose.Schema({
id:{
    type:String,
    required:true
}
})
export const ProductID = mongoose.model('ProductID', ProductIDSchema)