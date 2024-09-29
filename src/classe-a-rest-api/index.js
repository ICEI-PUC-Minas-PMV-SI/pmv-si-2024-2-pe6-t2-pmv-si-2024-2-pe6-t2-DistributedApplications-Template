import express from'express';
import cookieParser from'cookie-parser';
import cors from'cors';

import config from './config.js';
import AuthorizationRoutes from'./authorization/routes.js';
import UserRoutes from'./users/routes.js';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/', AuthorizationRoutes);
app.use('/user', UserRoutes);

app.listen(config.port, () => {
  console.log('Server Listening on PORT:', config.port);
});
