
const fs = require("fs")

const prompt = require("prompt-sync")()

console.clear();

console.log("Configure Flashcard Creator")
var apiKey = prompt('Enter your OpenAI API key: ')


// first check if file exists if it does ask user if they want to update it

if (fs.existsSync('.env')) {
    console.log('[setup] .env file exists');
    var update = prompt('Would you like to update your API key? (y/n): ')
    if (update == 'y') {
        console.log('[setup] updating .env file');
        fs.writeFile('.env', `OPENAI_API_KEY=${apiKey}`, complete)
    } else {
        console.log('[setup] .env file not updated');
    }
} else {
    console.log('[setup] .env file does not exist');
    console.log('[setup] creating .env file');


try {

    fs.appendFile('.env', `OPENAI_API_KEY=${apiKey}`, complete)
    } catch (err) {
        console.log('[setup] failed');  
        console.log(err);
    }
}


function complete() {
    console.log('[setup] complete');
}
