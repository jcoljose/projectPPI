import express from 'express';
import cors from 'cors';
import { router as medicosRouter } from './routes/medicos';
import { router as pacientesRouter } from './routes/pacientes';

const app = express();

app.use(cors(), medicosRouter, pacientesRouter)

app.listen(3333, () => {console.log('Listening on http://localhost:3333/')});

app.get('/', (req, res) => {res.json("API Online!")});