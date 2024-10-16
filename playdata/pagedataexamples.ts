import type { LayoutServiceContext, RouteData, LayoutServiceData } from "@sitecore-jss/sitecore-jss/layout";

const dummyPageContextData: LayoutServiceContext =
{
    itemPath: '/sitecore/content/red/pepperoni',
    language: 'en',
    pageEditing: false,
    site: {
        name: 'whatever',
    },
}

const dummyPageRouteData: RouteData =
{
    name: 'Home',
    displayName: 'Home',
    databaseName: 'iamadb',
    deviceId: 'fe5d7fdf-89c0-4d99-9aa3-b5fbd009c9f3',
    fields: {
        Title: {
            value: 'I am the page title',
        },
    },
    itemId: '11111111-1111-1111-1111-111111111111',
    itemLanguage: 'en',
    itemVersion: 1,
    layoutId: '22222222-2222-2222-222222222222',
    placeholders: {},
    templateId: '33333333-3333-3333-333333333333',
    templateName: 'Sample Page Item Etc',
}

const dummyPageData: LayoutServiceData = {
    sitecore: {
        context: dummyPageContextData,
        route: dummyPageRouteData,
    },
};

export default dummyPageData;