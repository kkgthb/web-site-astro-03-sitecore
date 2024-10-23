import sxaHeaderFields from "./sample-sxa-header-fields";

import type {
    ComponentParams,
    ComponentRendering,
    PlaceholdersData,
} from "@sitecore-jss/sitecore-jss/layout";

const sxaHeaderComponent: ComponentRendering = {
    "uid": "hashcode-Placeholder-sxa-header",
    "componentName": "Header",
    "params": {
        "GridParameters": "col-12",
        "DynamicPlaceholderId": "1"
    },
    "fields": sxaHeaderFields,
};

const headlessSxaHeaderPlaceholders: PlaceholdersData = {
    "sxa-header": [sxaHeaderComponent]
};

const headlessSxaHeaderParams: ComponentParams = {
    "ph": "headless-sxa-header",
    "sig": "sxa-header",
}

const headlessSxaHeaderComponent: ComponentRendering = {
    "uid": "hashcode-Placeholder-headless-sxa-header",
    "componentName": "PartialDesignDynamicPlaceholder",
    "dataSource": "",
    "params": headlessSxaHeaderParams,
    "placeholders": headlessSxaHeaderPlaceholders,
}

export default headlessSxaHeaderComponent;