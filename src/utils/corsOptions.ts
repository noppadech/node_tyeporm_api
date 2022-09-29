import { allowedOrigins } from './allowedOrigins';

export const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  // exposedHeaders: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200,
  credentials: true // for authorization
};
