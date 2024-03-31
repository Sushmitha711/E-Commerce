const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyparsel = require("body-parser");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/UserRoutes")
const errorMiddleware = require("./Middleware/errorMiddleware");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparsel.json());

// Router Middleware
app.use("/api/users", UserRoutes)

// Routes
app.get("/", (req, res) => {
    res.send("Home page")
})
// Error middleware
app.use(errorMiddleware);

// Connectiong to mongodb to server
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started at port:  ${PORT}`)
        })
    })
    .catch((err) => { console.log(err) })