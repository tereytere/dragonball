const express = require("express");
const router = express.Router();
const { getAllCharacters, getCharacterById } = require("../controllers/character.controller");

router.get("/characters", getAllCharacters);
router.get("/characters/:id", getCharacterById);

module.exports = router