const express = require("express")
const mongoose = require ('mongoose')
const cors = rerquire("cors")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("")