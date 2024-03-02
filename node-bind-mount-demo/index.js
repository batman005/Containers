const express = require('express');

const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.get('/home', (req,res) => {
    return res.json({message: 'Homecoming'});
})

app.listen(process.env.PORT,()=> {
    console.log(`Started the server at PORT: ${process.env.PORT}`);
})