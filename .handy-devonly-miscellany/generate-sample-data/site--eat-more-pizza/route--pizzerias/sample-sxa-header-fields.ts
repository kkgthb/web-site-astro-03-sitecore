import fieldNavigation from './sample-nav-links';

import type {
    ComponentFields,
    Field,
} from "@sitecore-jss/sitecore-jss/layout";

const fieldLogo: Field = {
    "value": {
        "src": "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/logo-sitecore",
        "alt": "Sitecore corporate logo for lack of a better idea",
        "width": "124",
        "height": "24"
    }
};
const fieldTagline: Field = {
    "value": "Life is short.  Eat pizza often."
};
const fieldCTA: Field = {
    "value": {
        "text": "Home",
        "anchor": "",
        "linktype": "internal",
        "class": "",
        "title": "Eat More Pizza logo",
        "querystring": "",
        "id": "{hashcode-Slash-null}",
        "href": "/"
    }
};

const sxaHeaderFields: ComponentFields = {
    "Logo": fieldLogo,
    "Navigation": fieldNavigation,
    "Tagline": fieldTagline,
    "LogoCTA": fieldCTA,
};

export default sxaHeaderFields;