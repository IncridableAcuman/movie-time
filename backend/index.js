const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth.routes')
const movieRoute = require('./routes/movie.routes')
const errorMiddleware = require("./middleware/error.middleware")
dotenv.config();

const app = express();

const port = process.env?.PORT || 8080;
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser({}));
app.use(logger('dev'))
app.use("/api/auth", authRoutes);
app.use("/api/tmdb", movieRoute)

app.use(errorMiddleware)

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDb connected successfully");
    app.listen(port, () => {
        console.log("Server is running on port: ", port);
    });
}).catch((er) => {
    console.log("MongoDb connection failed!");
})

