const express=require('express');
require("dotenv").config();
const cors=require("cors");

const app=express();

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:process.env.CLIENT
}))

const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running on ${port} port...`);
});