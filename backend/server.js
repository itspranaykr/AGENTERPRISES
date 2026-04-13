require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body

    console.log("User:", message)

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a smart AI like ChatGPT. Answer ANY question in simple language.`
          },
          {
            role: 'user',
            content: message
          }
        ]
      })
    })

    const data = await response.json()

    console.log("AI Response:", data)

    if (!data.choices) {
      throw new Error("No response from AI")
    }

    res.json({
      reply: data.choices[0].message.content
    })

  } catch (error) {
    console.error("ERROR:", error.message)

    res.status(500).json({
      reply: "AI not working. Check backend."
    })
  }
})

app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000')
})