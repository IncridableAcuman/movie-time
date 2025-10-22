const express=require('express');
const axios=require("axios");
require("dotenv").config();
const cors=require("cors");

const app=express();

app.use(express.json());

const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running on ${port} port...`);
});