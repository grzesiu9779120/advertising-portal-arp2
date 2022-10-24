import initAdvertisementModule from './modules/advertisement';
import initImagesModule from './modules/images';

import { Context, AppModules } from './models';

export default (context: Context): AppModules => {
  const advertisement = initAdvertisementModule();
  const images = initImagesModule();

  return {
    advertisement,
    images,
  };
};
