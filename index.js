const express = require('express')
const app = express()

const port = parseInt(process.argv[2] || '3000')

app.get('/status/:status?', function (req, res) {
    let status = parseInt(req.params.status)

    if (!status || status < 100 || status >= 600) {
        status = 200
    }

    res.status(status).send('Status: ' + status)
})

app.get('/length/:length?', function (req, res) {
    let length = parseInt(req.params.length)

    res.set({
        'Content-Type': 'text/plain',
        'Content-Length': length
    })

    res.status(200).end()
})

app.listen(port, function () {
    console.log('Listening on port ' + port)
})
