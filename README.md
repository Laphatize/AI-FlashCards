## AI Flashcard Creator
Upload a picture of your notes and it will create flashcards for you.

### How does it work?
It uses OCR on your notes and then sends it to OpenAI's text-davinci-003 model with a prompt that generates flashcards.

### How can I use it?
You will need to create an API key on OpenAI's website. https://platform.openai.com/account/api-keys

After you've obtained the key run the command 

```node setup.cjs```

It will prompt you to enter your API key. Just enter the one you got from the website above and click enter. This will generate a .env file.

After you've run the setup script, run 
```node server.cjs```

Now you can access the client on the url http://localhost:3004# AI-FlashCards
