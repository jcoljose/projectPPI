import cors from 'cors';
import express from 'express';

import { router as medicosRouter } from './routes/medicos.route';
import { router as pacientesRouter } from './routes/pacientes.route';
import { router as  registrosRouter } from './routes/registros.route';

const app = express();

app.use(cors(), medicosRouter, pacientesRouter, registrosRouter)

app.listen(3333, () => {console.log('Listening on http://localhost:3333/')});

app.get('/', (req, res) => {res.json("API Online!")});