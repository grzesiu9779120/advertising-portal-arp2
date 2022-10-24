import Storage from '@google-cloud/storage';
import { Gstore } from 'gstore-node';
import { Logger } from 'winston';

import { Config } from './config/index';

import { AdvertisementModule } from './modules/advertisement';
import { ImagesModule } from './modules/images';

export type Context = {
  gstore: Gstore;
  storage: Storage;
  logger: Logger;
  config: Config;
};

export type AppModules = {
  advertisement: AdvertisementModule;
  images: ImagesModule;
};
