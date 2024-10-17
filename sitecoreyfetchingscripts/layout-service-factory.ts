import jss from '@sitecore-jss/sitecore-jss/layout';
import type { LayoutService } from '@sitecore-jss/sitecore-jss/layout';
import config from './../src/temp/config';
import clientFactory from './graphql/graphql-create-client-factory';
const { RestLayoutService, GraphQLLayoutService } = jss;

export class LayoutServiceFactory {
  create(): LayoutService {
    return config.fetchWith === 'GraphQL'
      ? new GraphQLLayoutService({
        clientFactory,
        siteName: config.jssAppName,
      })
      : new RestLayoutService({
        apiHost: config.sitecoreApiHost,
        apiKey: config.sitecoreApiKey,
        siteName: config.jssAppName,
        configurationName: 'jss',
      });
  }
}

export const layoutServiceFactory = new LayoutServiceFactory();