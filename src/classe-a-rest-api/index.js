import express from'express';
import cookieParser from'cookie-parser';
import cors from'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import bodyParser from 'body-parser';

import config from './config.js';
import AuthenticationRoutes from'./routes/authentication.js';
import UserRoutes from'./routes/users.js';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/', AuthenticationRoutes);
app.use('/user', UserRoutes);

const swaggerConfig = swaggerJsdoc(config.swaggerOptions);
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.listen(config.port, () => {
  console.log('Server Listening on PORT:', config.port);
});
