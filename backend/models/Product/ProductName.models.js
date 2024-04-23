import mongoose from "mongoose";

const ProductNameSchema = new mongoose.Schema({
Name:{
    type:String,
    required:true
},
Bid:[
{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductID'
}
]
})
export const ProductName = mongoose.model('ProductName', ProductNameSchema)