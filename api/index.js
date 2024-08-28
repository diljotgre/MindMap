
require("dotenv").config();
const prompt = require("prompt");
const { Schema } = require("mongoose");
const { runGemini } = require("./ai/chatbot");
const db = require("./config/db");

const app= require("./app");
const userModel = require("./models/user");

const port = 2000;

app.listen(port, ()=>{
    console.log("Server is listening on port  http://localhost:2000");
});

//GET request is used for client to server
//Post is used for 
app.get("/", (req,res)=>{
    res.send("Hello World!!!!!");

});


/*
prompt.start();

const schema ={
    properties: {
        command:{
            description: "User Input Prompt",
            type: "string",
            required: true
        }
    }
};


function askForInput(){
    prompt.get(schema, function(err,result){
        if (err){
            console.error(err);
            return;
        }

        let userInput = result.command;
        runGemini(userInput);

        askForInput();
    });
};


askForInput();

 */




