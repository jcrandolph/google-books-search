const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req,res) => {
    axios
    .get(/*google books api url*/, { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;