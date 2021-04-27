const { Router } =require('express');
const pool = require('../db');

const router = Router();

router.get('/', () => {
    pool.query(
    'SELECT * FROM habitats ORDER BY id ASC',
    (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    })
})

module.exports = router;