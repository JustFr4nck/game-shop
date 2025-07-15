require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;


const app = express();
app.use(cors());

mongoose.connect(MONGO_URL).then(() => {

    console.log("Database is connected succesfully");
    app.listen(PORT, () => {
     
        console.log(`server iss hosting on localhost:${PORT}`)
    
    });
}).catch((error) => console.log(error));

