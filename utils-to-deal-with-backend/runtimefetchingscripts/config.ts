/*
 * Represents the type of config object available within the generated temp/config.js
 */
export interface JssConfig extends Record<string, string | undefined> {
  sitecoreSiteName?: string;
  sitecoreApiHost?: string;
  jssAppName?: string;
  graphQLEndpointPath?: string;
  graphQLEndpoint?: string;
  rootItemId?: string;
  defaultLanguage?: string;
  fetchWith?: string;
  layoutServiceConfigurationName?: string;
  publicUrl?: string;
}
