const express = require("express");
const router = express.Router();
const { getAllCharacters } = require("../controllers/character.controller");

router.get("/characters", getAllCharacters);

module.exports = router