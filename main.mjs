import express from 'express';
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World! Muhammad Ahad' + new Date())
})

app.get('/profile', (req, res) => {
    res.send('this is profile...! Muhammad Ahad' + new Date())
})

app.get('/about', (req, res) => {
    res.send('this is about...! Muhammad Ahad' + new Date())
})

app.get('/contact', (req, res) => {
    res.send('this is contact...! Muhammad Ahad' + new Date())
})

app.get('/gallery', (req, res) => {
    res.send('this is gallery...! Muhammad Ahad' + new Date())
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
