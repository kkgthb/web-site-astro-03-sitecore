import jss from '@sitecore-jss/sitecore-jss/layout';
import type { LayoutService } from '@sitecore-jss/sitecore-jss/layout';
import config from './../src/temp/config';
const { RestLayoutService } = jss;

export class LayoutServiceFactory {
  create(): LayoutService {
    return new RestLayoutService({
      apiHost: config.sitecoreApiHost,
      apiKey: config.sitecoreApiKey,
      siteName: config.jssAppName,
      configurationName: 'jss',
    });
  }
}

export const layoutServiceFactory = new LayoutServiceFactory();