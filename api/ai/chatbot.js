const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

//Assign models
const geminimodel = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function runGemini(prompt) {
    const chat = geminimodel.startChat({

        history: [
            {
                role:"user",
                parts:[{text: "You're a personal counsellor and your role is to listen to the user vent to you and provide comforting responses."}],
            },
            {
                role: "model",
                parts:[{text:"Hi my name is Dil, great to meet you! What is on your mind? Feel free to share anything you like and I'm here for you."}]
            },
        ],

        generationConfig:{
            maxOutputTokens: 100,
        },

    

    });
   
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();

    console.log(text);
    
};


module.exports={runGemini};