
const connectDB = require('./dataBase/connectDB.js');
const createDoc = require('./models/Game.js');


require('dotenv').config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;


const app = express();
app.use(cors());

createDoc();

connectDB(MONGO_URL).then(() => {  
    app.listen(PORT, () => {
     
        console.log(`server is hosting on localhost:${PORT}`);
    
    });
});

