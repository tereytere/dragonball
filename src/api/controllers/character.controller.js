const Character = require('../models/character.model');

const getAllCharacters = async (req, res) => {
    try {
        let pag = parseInt(req.query.pag);
        let limit = parseInt(req.query.limit);
        const countCharacters = await Character.countDocuments();

        pag = isNaN(pag) ? 1 : pag;
        limit = isNaN(limit) ? 3 : limit;

        limit = limit > 10 ? 10 : limit <= 0 ? 5 : limit;

        let numPage = Math.ceil(countCharacters / limit);

        if (pag > numPage) {
            pag = numPage
        }

        if (pag < 1) {
            pag = 1
        }

        const listCharacters = await Character.find().skip((pag - 1) * limit).limit(limit);

        res.json({
            previousPage: pag === 1 ? null : (pag - 1),
            nextPage: numPage >= pag + 1 ? pag + 1 : null,
            dataCount: countCharacters,
            dataPerPage: listCharacters.length,
            data: listCharacters
        })

        /*const listCharacters = await Character.find();
        res.json(listCharacters)*/
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllCharacters }