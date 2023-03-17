# OpenAI - Chatbot - connection with Node.js and Express

[OpenAI official documentation](https://platform.openai.com/docs)

This is an example of sending prompts to our OpenAI API to answer whatever
question.

## Setup

1. Download this repository

2. In the terminal, run to install dependencies:

   ```bash
   $ npm install
   ```

3. Generate your [API key](https://platform.openai.com/account/api-keys) remember to copy it. You can't retrieve it once you created.

4. Create a file .env in the root directory with this content:

   ```bash
   OPENAI_API_KEY = yourAPIKEY
   ```

5. Run the app

   ```bash
   $ node index.js
   ```

Now, open another terminal and type:

    ```bash
    curl -X POST \
        http://localhost:30000/ask \
        -H 'Content-Type: application/json' \
        -d '{
            "prompt": "Say this is a test"
    }'

```
Your app is running at por 30000, you can change that in the index.js

```
