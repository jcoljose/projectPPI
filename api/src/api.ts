import cors from 'cors';
import express from 'express';

import { router as loginRouter } from './routes/login.route';
import { router as authRouter } from './routes/auth.route';
import { router as registrosRouter } from './routes/registros.route';
import { router as perfilRouter } from './routes/perfil.route';
import { router as consultaRouter } from './routes/consulta.route'
import { router as especialidadeRouter } from './routes/especialidade.route';

const app = express();
const bodyParser = require('body-parser');

app.use(cors(), express.json(), bodyParser.json());
app.use(registrosRouter);
app.use(loginRouter);
app.use(authRouter);
app.use(perfilRouter);
app.use(consultaRouter);
app.use(especialidadeRouter);

app.get('/', (req, res) => {res.json('API Online!')});

app.listen(3333, () => {console.log('Listening on http://localhost:3333/')});