import 'dotenv/config';

const config = {
  port: process.env.PORT || 4000,
  swaggerOptions: {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Classe A Company Rest API',
        version: '1.0.0',
        description: 'An Express API with Swagger documentation',
      },
    },
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'access_token',
        },
      },
    },
    security:{
      cookieAuth:[]
    },
    servers: [
      {
        url: 'http://localhost:4000',
      },
      {
        url: 'https://pmv-si-2024-2-pe6-t2-g08-dashboard.onrender.com',
      },
    ],

    apis: ['./routes/*.js'],
  },
};

export default config;
