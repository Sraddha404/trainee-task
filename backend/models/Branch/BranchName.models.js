import mongoose from "mongoose";

const BranchNameSchema = new mongoose.Schema({
Name:{
    type:String,
    required:true
},
Bid:[
{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BranchID'
}
]
})
export const BranchName = mongoose.model('BranchName', BranchNameSchema)