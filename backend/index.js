const express = require("express")
const mongoose = require ('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sraddhadas334:sradpass0102@traineetask0.mw5oauy.mongodb.net/employee")

app.post("/login", (req, res) => {
    const {name, password} = req.body;
    EmployeeModel.findOne({name:name})
    .then(user => {
        if (user) {
            if(user.password === password) {
                 res.json("success")
            } else {
            res.json("password is incorrect")
            }
        } else{
            res.json("no record exists")
        }  
    })
})

app.post('/signup', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001,() => {
    console.log("server is running")
})
