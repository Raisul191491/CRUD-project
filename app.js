require("dotenv").config();

const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const userRouter = require("./api/user/user.router");
const newsRouter = require("./api/news/news.router");

app.use("/api/user", userRouter);
app.use("/api/news", newsRouter);


const port = process.env.APP_PORT || 3000;
app.listen(port, () =>{
    console.log("Server up and running on PORT: ", port);
}); 