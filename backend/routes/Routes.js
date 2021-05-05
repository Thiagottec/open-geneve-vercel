import express from 'express';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    console.log("teste");
    res.send("teste");
})

app.post('/NewUser/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

export { app as openRoutes };