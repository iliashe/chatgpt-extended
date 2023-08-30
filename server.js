require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const OpenAI = require('openai')
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function fn() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
  
    console.log(completion.choices);
  }


app.get('/', (req, res, next) => {
  fn()
})

const port = '5000'
app.listen(port, () => console.log(`The backend is running at http://localhost:${port}`))