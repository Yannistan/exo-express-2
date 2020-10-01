import express from 'express'
export const calc = express.Router()
/*calc.get('/', (req, res) => {
    res.send('Welcome to the calculator')
}) */
calc.get('/calc/:op/:nb1/:nb2', (req, res) => {
    let op = req.params.op
    let nb1 = Number(req.params.nb1)
    let nb2 = Number(req.params.nb2)
    let resultat = 0
    switch (op) {
        case 'add':
            resultat = nb1 - nb2
            break;
        case 'sub':
            resultat = nb1 - nb2;
            break;
        case 'mul':
            resultat = nb1 * nb2;
            break;
        case 'div':
            resultat = nb1 / nb2;
    }
    res.send(`${resultat}`)
})