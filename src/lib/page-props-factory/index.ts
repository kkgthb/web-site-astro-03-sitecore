import type { LayoutService, LayoutServiceData } from "@sitecore-jss/sitecore-jss/layout";
import { DictionaryPhrases } from '@sitecore-jss/sitecore-jss/i18n';
import { layoutServiceFactory } from "../layout-service-factory";
import config from "../../temp/config";

export type PagePropsFactoryType = {
  layoutData: LayoutServiceData,
  dictionary?: DictionaryPhrases,
};

export class SitecorePagePropsFactory {

  private layoutService: LayoutService;

  constructor() {
    this.layoutService = layoutServiceFactory.create();
  }

  /**
   * Create SitecorePageProps for given context (SSR / GetServerSidePropsContext or SSG / GetStaticPropsContext)
   * @param {GetServerSidePropsContext | GetStaticPropsContext} context
   * @see SitecorePageProps
   */
  public async create(
    path: string,
    language?: string
  ): Promise<PagePropsFactoryType> {
console.log(path);
    let layout: LayoutServiceData = await this.layoutService.fetchLayoutData(path, language || config.defaultLanguage);

    let props = {
      layoutData: layout
    };

    return props;
  }
}

export const sitecorePagePropsFactory = new SitecorePagePropsFactory();