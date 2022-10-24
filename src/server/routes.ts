import path from 'path';
import { Request, Response, NextFunction, Express } from 'express';
import { Context, AppModules } from './models';

export default (
  { logger, config }: Context,
  { app, modules: { advertisement } }: { app: Express; modules: AppModules },
) => {
  // app.use('/ advertisement', (_, res) => {
  //   res.send('Cześć!');
  // });

  // app.get('*', (_, res) => res.redirect('/advertisement'));

  app.get('/', (req, res) => {
    res.send('Hello word');
  });

  app.use((err: any, _: Request, res: Response, next: NextFunction) => {
    const payload = (err.output && err.output.payload) || err;
    const statusCode = (err.output && err.output.statusCode) || 500;

    logger.error(payload);

    if (err.isServer) {
      // log the error...
      return res.status(statusCode).send('Server error');
    }
    return res.status(statusCode).json(payload);
  });
};
