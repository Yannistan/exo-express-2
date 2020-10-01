import express from 'express'
import fs from 'fs/promises'

const app = express()

const LOG_FILE = 'access-log.txt'
const IP_LOCAL = '192.168.1.21'
const PORT = 7777

const handler1 = (req, res, next) => {
    console.log('The response will be sent by the next function')
    next()
}

app.get(
    '/', handler1,
    (req, res) => {
      
        res.send('Exercises express partie 2')
    }
)

app.listen(PORT, IP_LOCAL, () => {
    console.log(`Example app listening at http://${IP_LOCAL}:${PORT}`)
})