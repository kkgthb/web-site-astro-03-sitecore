import headlessSxaHeaderComponent from './sample-header-navigation';
import {
    LayoutServicePageState,
} from "@sitecore-jss/sitecore-jss/layout";

import type {
    LayoutServiceData,
    PlaceholdersData,
    RouteData,
} from "@sitecore-jss/sitecore-jss/layout";

const pizzeriasPlaceholders: PlaceholdersData = {
    "headless-sxa-header": [headlessSxaHeaderComponent],
};

const pizzeriasRoute: RouteData = {
    "name": "Pizzerias",
    "displayName": "Pizzerias",
    "databaseName": "master",
    "itemId": "hashcode-Slash-Pizzerias",
    "itemLanguage": "en",
    "itemVersion": 1,
    "templateName": "Generic Page",
    "placeholders": pizzeriasPlaceholders
};

const pizzeriasLayout: LayoutServiceData = {
    sitecore: {
        context: {
            "pageEditing": false,
            "site": {
                "name": "eatmorepizza"
            },
            "pageState": LayoutServicePageState.Normal,
            "language": "en",
            "itemPath": "/Pizzerias",
            "itemId": "hashcode-Slash-Pizzerias",
            route: pizzeriasRoute,
        },
        route: pizzeriasRoute,
    }
}

export default pizzeriasLayout;