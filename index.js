const express = require('express')
const app = express()

const port = parseInt(process.argv[2] || '3000')

app.get('/:status', function (req, res) {
    res.status(req.params.status).send('Status: ' + req.params.status)
})

app.listen(port, function () {
    console.log('Listening on port ' + port)
})