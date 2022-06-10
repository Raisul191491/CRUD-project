const jwt = require('jsonwebtoken')
const db = require('../database')

module.exports = (req, res) => {
    const {
        username,
        password
    } = req.body;

    let query = "SELECT user_name FROM users WHERE user_name = '" + username + "' AND user_password='" + password + "'"
    db.query(query, (err, result, field) => {
        if (err) throw err
        else if (result.length === 0) {
            console.log("Account doesn't exist")
        } else {
            console.log("Login successfull");

             const token = jwt.sign(username, "SECRET")
    
            console.log("Token created")
    
            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 1000000,
                secure: true
            })

            res.status(200).send({
                msg: 'Logged in!'
                });
        }

    })
    
}