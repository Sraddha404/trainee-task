import mongoose from "mongoose";

const BranchIDSchema = new mongoose.Schema({
id:{
    type:String,
    required:true
}
})
export const BranchID = mongoose.model('BranchID', BranchIDSchema)