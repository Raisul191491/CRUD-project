const db = require('../database')

module.exports = async (req, res) => {
    const {
        username,
        name,
        email,
        password,
        bday,
        phn
    } = req.body

    // try {
    //     const hashedPassword = await bcrypt.hash(password, 10)
    // } catch (err) {
    //     console.log(err);
    // }

    var id = new Date().getTime();

    let query = "INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?)";

    console.log(req.body);

    db.query(query, [
        id,
        username,
        name,
        email,
        password,
        bday,
        phn,
        (err, res) => {
            if (err) {
                console.log("Error detected");
                throw err;
            } else {
                console.log("Successful query");
            }
        }
    ])

    await res.send("Great success")
}