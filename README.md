## Celebration

It works!

The tagline and nav menu content were pulled from a real 3rd-party-hosted HTTP server's REST API endpoint mocking a sample Sitecore Layout Service API response.

* _(Well, not in this screenshot -- I did a little Dev Console touchup to obscure the real data I was testing against.)_

![Screenshot of the running web site](/readme-screenshot.png)

---

## Sample data

Welcome, [content model](https://www.legacycode.rocks/episodes/10/ "podcast episode:  Backend Content Strategy") designers!

[Check out `datasample--site--eat-more-pizza--route--pizzerias.json`](/.handy-devonly-miscellany/datasample--site--eat-more-pizza--route--pizzerias.json) to learn what you'd see, as a developer, if you queried Sitecore CMS's API asking it what belongs on `https://example.com/eat-more-pizza/Pizzerias`.

_(Presuming that "`eatmorepizza`" were known to be its own "site" within a given Sitecore CMS backend instance.)_

When content authors use the Sitecore editing portal to create [Sitecore pages, components, placeholders, content items, etc.](https://doc.sitecore.com/xp/en/users/102/sitecore-experience-platform/pages,-components,-placeholders,-and-content-items.html), the [example at `datasample--site--eat-more-pizza--route--pizzerias.json`](/.handy-devonly-miscellany/datasample--site--eat-more-pizza--route--pizzerias.json) is what those content authors' efforts look like to the developers who are responsible for turning it all into HTML _(which they do with [the code under /src/](/src/))_.

### Known issue:  Header only

The main body and the footer are completely missing from the sample data.

Sorry -- I've only gotten as far as writing sample header data.

### Demystifying the sample data's structure

Figuring out what parts of the sample data pertain to what aspects of authoring content in a CMS can be a process of elimination.

Firstly, the data is formatted in the [JSON punctuation standard, so brush up on that](https://katiekodes.com/intro-xml-json-1/) if you aren't familiar with it.

Secondly, know your data.  It helps a lot if you have some idea of how _your_ company's Sitecore "site" is set up.  That should help you figure out what's "authored content" and what's "CMS configuration / structure / schema."

Thirdly, familiarize yourself with the basics of details that are always the same every time data comes back from the Sitecore Layout Service API, no matter what your Sitecore "site" looks like or what kinds of content you've authored into it.  By process of elimination, everything else is either your schema or your content.

Let's take a look at what I mean by this below.

#### 1:  Content data plane

Words you see in my sample data that pertain to pizza represent the kinds of decisions that **content strategists** would be making _(like that we need an "eat more pizza" site, or that we need a "Pizzerias" URL within it)_.

These words are completely arbitrary.

#### 2:  CMS schema plane

Certain words you see in my sample data represent words that **Sitecore CMS admins** would have chosen when setting up Sitecore.

1. Once Sitecore has been set up, they are not quite arbitrary, per se.
    * At that point, the data coming out of the Sitecore Layout Service API _will_ reflect the way that a particular Sitecore "site" has been set up by its administrators.
2. However, they are arbitrary in the sense that some Sitecore admin had to hand-pick names when setting up _your_ company's instance of Sitecore.
    * There are definitely some common trends that I've seen all over [StackOverflow](https://sitecore.stackexchange.com/questions/33742/sxa-headless-with-partial-design-placeholder-not-found) and [blogs](https://amitkumarmca04.blogspot.com/2023/08/how-to-use-tailwind-css-in-sitecore-next-js.html), as well as in some instances of Sitecore that I've worked with.
        * My sample data more or less reflects those trends.
    * However, there is a [totally different common pattern of "naming things"](https://github.com/erzr/JssAuthenticationSSC/blob/master/data/routes/styleguide/en.yml) that shows up when Sitecore admins set up a "Sitecore Style Guide" demo site.

Here are a few of the "schema plane" details from my sample data:

1. These placeholder nicknames:
    * `"headless-sxa-header"`
    * `"sxa-header"`
2. These field nicknames:
    * `"Logo"`
    * `"Navigation"`
    * `"Link"`
    * `"Tagline"`
    * `"LogoCTA"`
3. These `componentName` values:
    * `"PartialDesignDynamicPlaceholder"`
    * `"Header"`

#### 3:  CMS vendor plane

And then there's a bunch of stuff that's pretty consistenly part of the way the Sitecore Layout Service API simply _works_, no matter how you've configured your "site" (or microsite) within Sitecore.

For example:

* The first property is always `sitecore`, and it always has 2 sub-properties, `context` and `route`.
* A `context` property often has a second copy of `route` within it, in addition to having properties like `itemId`, `itemPath`, etc.
* A `route` property's value is always an object with properties like `itemId`, `name`, `displayName`, `placeholders`, `templateName`, etc.

If you really want to nerd out, you might find that you can sort of infer what's what by exploring the files in:

1. [/src/](/src/) _(the HTML renderer templates that a frontend developer would write)_, and
2. [.../route--pizzerias](.handy-devonly-miscellany/generate-sample-data/site--eat-more-pizza/route--pizzerias/) _(the code I wrote to make it easier to generate [`datasample--site--eat-more-pizza--route--pizzerias.json`](/.handy-devonly-miscellany/datasample--site--eat-more-pizza--route--pizzerias.json))_.

---

## Notes to self

`tmc-config-generator.ts` renamed to indicate that the Sitecore-Astro folks authored that file, not Sitecore.

_("TMC" a playful reference one of the contributors being a "Bogdan" living in England -- see Richard Osman's comedic mystery novel series.)_

---

## Known issues 10/24/24, 12PM:

### Needs tutorial

TODO:  explain how to watch this codebase run.

### No main or footer HTML

The only HTML-rendering component code files I have yet bothered to author pertain to the header _(and I haven't even finished that)_.  Main body and footer content returned by the Sitecore Layout Service API is still being blithely ignored.

---

## Related links

* ["Backend content strategy" vs. "frontend content strategy"](https://www.legacycode.rocks/episodes/10/) episode of the "Legacy Code Rocks" podcast, featuring Carrie Hane
* [Sitecore docs:  what "page," "component," "placeholder," "content item," etc. means within the CMS backend](https://doc.sitecore.com/xp/en/users/102/sitecore-experience-platform/pages,-components,-placeholders,-and-content-items.html)
* [Intro to JSON](https://katiekodes.com/intro-xml-json-1/)