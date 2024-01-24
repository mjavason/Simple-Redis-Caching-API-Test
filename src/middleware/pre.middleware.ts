import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
// import { CORS_ORIGIN } from '../constants';
import limiter from './rate_limiter.middleware';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cookieParser from 'cookie-parser';
import * as Sentry from '@sentry/node';
import { ProfilingIntegration } from '@sentry/profiling-node';
import { SWAGGER_OPTIONS } from '../config/swagger.config';
import { SENTRY_DSN } from '../constants';
import cacheMiddleware from './cache.middleware';
import errorMiddleware from './error.middleware';

function PreMiddleware(app: express.Application) {
  // Set up middleware functions for Express app

  // Enable the option to trust the proxy to obtain the real IP address
  // app.set('trust proxy', true);

  // Configure Cross-Origin Resource Sharing (CORS) middleware
  // By default, allow all origins, credentials, and more
  // Replace with a specific configuration if necessary
  app.use(cors());

  // Parse incoming JSON requests with a size limit of 10MB
  app.use(express.json({ limit: '10mb' }));

  // Parse incoming URL-encoded requests with extended data and a size limit of 10MB
  app.use(
    express.urlencoded({
      limit: '10mb',
      extended: true,
      parameterLimit: 50000,
    })
  );

  // Enable HTTP request logging using Morgan
  // Options include: 'combined', 'common', 'dev', 'tiny', 'combined' logs more details
  app.use(morgan('dev'));

  // Enhance security with helmet middleware
  app.use(helmet());

  // Apply rate limiting middleware to limit the number of requests
  app.use(limiter);

  app.use(cookieParser());

  // Set up Swagger API documentation
  const swaggerSpec = swaggerJSDoc(SWAGGER_OPTIONS);

  // Expose the Swagger documentation at the '/docs' route
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use(cacheMiddleware);
  
  app.use(errorMiddleware);

  return app;
}

export default PreMiddleware;
