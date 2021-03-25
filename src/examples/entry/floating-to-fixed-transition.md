---
  id: "14103"
  fieldLayoutId: "89"
  uid: "1a56782d-1f92-4e15-a9ca-ad507effe54f"
  enabled: "1"
  archived: "0"
  dateCreated: "2018-08-27 06:15:59"
  dateUpdated: "2019-01-28 02:47:28"
  siteSettingsId: "14103"
  slug: "floating-to-fixed-transition"
  siteId: "1"
  uri: "patterns/web/entry/floating-to-fixed-transition"
  enabledForSite: "1"
  sectionId: "2"
  typeId: "2"
  authorId: "1"
  postDate: "2018-08-31 06:15:00"
  expiryDate: null
  contentId: "14098"
  title: "Floating to Fixed Transition"
  field_allColorsComputed: null
  field_allColorsComputedIllustration: null
  field_allColorsComputedThumbnail: null
  field_appDescription: null
  field_appDescriptionSentiment: null
  field_audio: "0"
  field_authorFaq: null
  field_bgThumbPosition: "left center"
  field_body: null
  field_captureSize: null
  field_categoriesRaw: "keeping context,layout,"
  field_categoryInPlainText: null
  field_coldThumbTransform: null
  field_colorPalette: null
  field_contributorName: null
  field_contributorUrl: null
  field_coverColor: null
  field_dominantColor: null
  field_externalContributor: "0"
  field_fetchWebsiteData: null
  field_fullName: null
  field_gfycatSource: "TightCalculatingIlsamochadegu"
  field_gif: "1"
  field_gumletUrl: null
  field_gumletUrlNoPreParse: null
  field_howHelps: "<p><strong>Layout and Keeping Context</strong></p><p>Many designers and product professionals treat animations as unnecessary bloat. However, there are instances in which a set of animations can improve flow and hierarchy, and also enable interactions that are blocked by the static nature of graphical user interfaces.</p><p>In this case, Twitter achieves a pleasant transition that allows its user interface to reflow elements that change in the hierarchy as a user scrolls, but that are still necessary to keep in context once the page has been scrolled.</p>"
  field_howWorks: "<p>Twitter profiles have three main vertical levels. 1) the cover photo 2) the profile picture and 3) the main body.</p><p>Twitter has a particular UI implementation where the profile picture floats in the intersection of the other elements.</p><p>While this treatment brings excellent aesthetics and use of real estate, it creates a challenge for the bottom element (the main body), since this one requires to keep a row with profile information fixed to provide visibility to the users as they scroll to a timeline of tweets.</p><p>Twitter solves this problem by mixing two sequential animation effects that create a smooth transition that removes the floating element and allows the first row of the main body to stay fixed.</p><p>When as a user your start scrolling this page, you will notice that once you have scrolled beyond a certain point of the profile picture, this element will slide up. Thereupon you will see the now empty space which was initially covered by half of the original profile picture, is a placeholder space for a summary element that slides up from the bottom of the row itself.</p><p>The final effect is a seamless transition that allows the layout to use a floating element without sacrificing the flexibility of fixed elements that live below the floating intersection.</p>"
  field_iconColors: null
  field_iconComputedColors: null
  field_illustrationSource: null
  field_imagePathRaw: ""
  field_imageTextOcr: null
  field_depthArticleBody: null
  field_lpSentimentScore: null
  field_lpUrl: null
  field_mediaEmbed: null
  field_mobileId: null
  field_mobileShotSrc: null
  field_newsObject: null
  field_pageFetchJsonString: null
  field_patternSrc: "Twitter"
  field_platformRaw: "Web"
  field_qualityDescription: null
  field_rawResponse: null
  field_readingDuration: null
  field_readingDurationSeconds: null
  field_readingEaseLevel: null
  field_readingEaseScore: null
  field_references: null
  field_screenshotColors: null
  field_screenshotComputedColors: null
  field_sourceFromArchive: null
  field_strategyDescription: null
  field_thumbColors: null
  field_thumbVideoUrl: null
  field_webDescription: null
  field_webTitle: null
  field_what: "<p>This is a layout solution found on Twitter for Web. Every Twitter profile showcases the profile picture as a floating element that sits between the cover photo and the body of the profile. When scrolling this page, Twitter will trigger a unique transition that pushes up the profile picture element and brings down a summarized version of the profile data.</p>"
  root: null
  lft: null
  rgt: null
  level: null
  structureId: null
  layout: layouts/post.njk
---