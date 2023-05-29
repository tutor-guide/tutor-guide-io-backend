import express from "express";
const router = express.Router();
router.use((req, res, next) => {
    console.log('this is case router');
    next();
});
router.get('/all', (req, res) => {
    res.send('all cases');
});
