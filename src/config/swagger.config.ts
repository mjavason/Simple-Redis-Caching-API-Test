// Swagger options
export const SWAGGER_OPTIONS = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Math Formulas API',
      version: '1.0.0',
      description:
        'API documentation for a simple factorial calculation API, demonstrating the benefits of caching with redis.',
      contact: {
        name: 'Orji Michael',
        email: 'orjimichael4886@gmail.com',
      },
    },
    servers: [
      { url: 'http://localhost:5000/api/v1', description: 'Development' },
      // { url: 'https://math-formulas-api.onrender.com/api/v1', description: 'Staging' },
      // { url: 'https://api.mathformulas.com/api/v1', description: 'Production' },
    ],
    tags: [
      {
        name: 'Math Formulas',
        description: 'Endpoints for various math formulas.',
      },
    ],
  },
  apis: ['**/*.jsdoc.ts'], // Define paths to your API routes
};
