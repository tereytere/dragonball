const express = require("express");
const { connectDB } = require("./src/utils/db");
const router = require("./src/api/routes/character.routes");
const env = require("dotenv");
env.config()

connectDB();
const server = express();
const PORT = process.env.PORT;

server.use(express.json())
server.use("/", router);

server.listen(PORT, () => {
    console.log(`listen port http://localhost:${PORT} `)
})
