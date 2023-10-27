const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const { OpenAIAPIKey } = require("./config"); // Load your OpenAI API key from a configuration file

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const { OpenAIAPIKey } = require("./config"); // Load your OpenAI API key from a configuration file
const openai = require("openai");

const OPENAI_API_KEY = OpenAIAPIKey; // Your OpenAI API Key

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("message", async (message) => {
    try {
      const response = await openai.Completion.create({
        engine: "text-davinci-003", // or 'text-davinci-002' for GPT-3
        prompt: `User: ${message}\nAI: `, // Set the user message as the prompt for the AI
        max_tokens: 150, // Limit the length of the AI response
        api_key: OPENAI_API_KEY,
      });

      const aiMessage = response.choices[0].text.trim();
      io.emit("message", `User: ${message}`);
      io.emit("message", `AI: ${aiMessage}`);
    } catch (error) {
      console.error("Error generating AI response:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
