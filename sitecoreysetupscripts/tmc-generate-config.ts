import { JssConfig, jssConfigGenerator } from "./configurecmsconnection/tmc-config-generator";
import fs from "fs";
import path from "path";
import * as changeCase from "change-case";

const CONFIG_PATH = path.resolve("src/temp/config.js");

const defaultConfig: JssConfig = {
  sitecoreSiteName: process.env.SITECORE_SITE_NAME || process.env.JSS_APP_NAME,
  sitecoreApiHost: `${process.env.SITECORE_API_HOST}${process.env.SITECORE_LAYOUT_SERVICE_PATH}`,
  jssAppName: process.env.SITECORE_SITE_NAME || process.env.JSS_APP_NAME,
  graphQLEndpointPath: process.env.GRAPH_QL_ENDPOINT_PATH || "/sitecore/api/graph/edge",
  graphQLEndpoint: process.env.GRAPH_QL_ENDPOINT || `${process.env.SITECORE_API_HOST}${(process.env.GRAPH_QL_ENDPOINT_PATH || "/sitecore/api/graph/edge")}`,
  rootItemId: process.env.rootItemId,  
  defaultLanguage: process.env.DEFAULT_LANGUAGE,
  fetchWith: process.env.FETCH_WITH,
};

generateConfig(defaultConfig);

function generateConfig(defaultConfig: JssConfig): void {
  console.log("Start config generation.");

  jssConfigGenerator
    .generateConfig(defaultConfig)
    .then(config => writeConfig(config))
    .catch(e => {
      console.error("Config generation error");
      console.error(e);

      process.exit(1);
    })
    .finally(() => console.log("Config generation finished."));
};

function writeConfig(config: JssConfig): void {
  console.log(`Write configuration to '${CONFIG_PATH}'.`);

  let configText = `const config = {};\n`;
  
  Object.keys(config).forEach(key => {
    configText += `config.${key} = import.meta.env.${changeCase.constantCase(key)} || '${config[key]}';\n`
  });

  configText += "export default config;";

  fs.writeFileSync(CONFIG_PATH, configText, { encoding: "utf-8" });
}

