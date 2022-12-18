import cors from 'cors';
import express from 'express';

import { router as loginRouter } from './routes/login.route';
import { router as medicosRouter } from './routes/medicos.route';
import { router as pacientesRouter } from './routes/pacientes.route';
import { router as registrosRouter } from './routes/registros.route';

const app = express();
const bodyParser = require('body-parser');

app.use(cors(), express.json(), bodyParser.json())
app.use(registrosRouter)
app.use(loginRouter)
app.use(pacientesRouter)
app.use(medicosRouter)

app.get('/', (req, res) => {res.json('API Online!')});

app.listen(3333, () => {console.log('Listening on http://localhost:3333/')});