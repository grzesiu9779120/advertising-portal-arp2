process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import config from './config';
import initLogger from './logger';
import initDB from './db';
import initStorage from './storage';
import initModules from './modules';
import initApp from './app';

const logger = initLogger({ config: config.logger });
const gstore = initDB({ config: config.gcloud, logger });
const storage = initStorage({ config: config.gcloud });

const context = { gstore, storage, logger, config };
const modules = initModules(context);

const app = initApp(context, modules);

logger.info('Starting server...');
logger.info(`Environment: "${config.common.env}"`);
app
  .listen(config.server.port, () => {
    logger.info(`Server was started on port ${config.server.port}`);
  })
  .on('error', (error: any) => {
    if (error) {
      logger.error('Unable to listen for connection', error);
      process.exit();
    }
  });
