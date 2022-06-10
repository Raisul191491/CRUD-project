const express = require('express')
const app = express()
const port = 3000

const http = require("http");
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')

const db = require('./database')

db.connect((err) => {
    if (err) {
        console.log("Error connecting....");
    } else {
        console.log("Success");
    }
});


//Routes
const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Base page')
})

//Login
app.get('/login', (req, res) => {
    console.log("Login");
    return res.send("Login");
})
app.post('/login', loginRoute)

//Register
app.get('/register', (req, res) => {
    console.log("Register");
    return res.send("Register");
})
app.post('/register', registerRoute)

app.listen(port, () => {
    console.log(`Started on port ${port}`)
})

// {
//     "username": "raisul191491",
//     "name": "MD. Raisul Islam",
//     "email": "hitme@gmail.com",
//     "password": "44d6f4sdf4s56g",
//     "bday": "2000-01-01",
//     "phn": "01884777066"
// }