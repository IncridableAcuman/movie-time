const express=require('express');
require("dotenv").config();
const cors=require("cors");
const movieRoute=require("./routes/movie.routes");

const app=express();

app.use(express.json());
app.use(cors({credentials:true,origin:process.env.CLIENT}));

app.use("/api",movieRoute);


const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running on ${port} port...`);
});
