const express = require('express');
const router = express.Router();
const newsModel = require('../models/news_model');

router.get('/', async (req, res) => {
    try {
        const listdata = await newsModel.find();
        res.status(200).json(listdata);
    } catch {
        res.status(500).json({"success" : "failed"});
    }
})

module.exports = router;

