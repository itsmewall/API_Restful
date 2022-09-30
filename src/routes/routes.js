const router = require('express').Router()

router.get('/Clientes', (req, res) => {
    res.send({
        ok: 123
    })
}) 

module.exports = router