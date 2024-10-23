import type {
    Item,
} from "@sitecore-jss/sitecore-jss/layout";

const linkHome: Item = {
    "id": "hashcode-Component-sxa-header-fields-Navigation-Home",
    "url": "/Data/Headers/Header/Home",
    "name": "Home",
    "displayName": "Home",
    "fields": {
        "Link": {
            "value": {
                "text": "Home",
                "anchor": "",
                "linktype": "internal",
                "class": "",
                "title": "Home",
                "querystring": "",
                "id": "{hashcode-Slash-null}",
                "href": "/"
            }
        }
    }
};

const linkPizzerias: Item = {
    "id": "hashcode-Component-sxa-header-fields-Navigation-Pizzerias",
    "url": "/Data/Headers/Header/Pizzerias",
    "name": "Pizzerias",
    "displayName": "Pizzerias",
    "fields": {
        "Link": {
            "value": {
                "text": "Pizzerias",
                "anchor": "",
                "linktype": "internal",
                "class": "",
                "title": "Pizzerias",
                "target": "",
                "querystring": "",
                "id": "{hashcode-Slash-Pizzerias}",
                "href": "/Pizzerias"
            }
        }
    }
};

const linkSubscribe: Item = {
    "id": "hashcode-Component-sxa-header-fields-Navigation-Subscribe",
    "url": "/Data/Headers/Header/Subscribe",
    "name": "Subscribe",
    "displayName": "Subscribe",
    "fields": {
        "Link": {
            "value": {
                "text": "Subscribe",
                "anchor": "",
                "linktype": "internal",
                "class": "button-green",
                "title": "",
                "target": "",
                "querystring": "",
                "id": "{hashcode-Slash-Subscribe}",
                "href": "/Subscribe"
            }
        }
    }
}

const fieldNavigation: Array<Item> = [linkHome, linkPizzerias, linkSubscribe];

export default fieldNavigation;