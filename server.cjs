/* express server*/
const { response } = require('express');
const express = require('express');
const app = express();
const port = 3004;
const env = require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

// open ai request
app.get('/openai', async (req, res) => {
    
    const prompt = "Create 10 flashcards for the following notes. It must distinguish questions and answers.: \n\n" + req.query.notes;
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 3000,
        temperature : 0.5
    });
    res.send(completion.data.choices[0].text);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


