import mongoose from "mongoose";

const PacketweightSchema = new mongoose.schema({
    weight:{
        type:Number,
        min:[220, 'Input <= 220, got {value}'],
        max: 223
    }
})