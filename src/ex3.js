import express from 'express'
import fs from 'fs/promises'

const app = express()

const LOG_FILE = 'access-log.txt'
const IP_LOCAL = '192.168.1.21'
const PORT = 7777

/*
const timer = async (req) => {
    try {
        const date = new Date()
        const datereel = date.toUTCString()
        req.date = datereel

    } catch (e) {
        console.error(`Error: can't write in ${LOG_FILE}`)
    }
} */

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

app.get(
    '/get_current_time', (req, res) => {
        const date = new Date()
        const datereel = date.toUTCString()
        res.send(`Current date is:${datereel}`)
    }
)


app.get('/how_pass_data', (req, res) => {
    res.send("Express possède un système de routage, c’est à dire que la fonction associé à la route va s’exécuter tout en bas de la pile de fonctions middleware.Concrètement, à chaque appel de route, les fonctions du haut de la pile vont s’exécuter et on va déscendre jusqu’à la fonction de route.Autrement dis, on pars d’un objet request vide et on lui applique des propriétés grâce aux fonctions middleware.")
})

app.get(
    '/how_pass_data', (req, res) => {
        res.send
    }
)


app.listen(PORT, IP_LOCAL, () => {
    console.log(`Example app listening at http://${IP_LOCAL}:${PORT}`)
})