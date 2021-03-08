const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function(eleventyConfig) {

eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("src/image");
  eleventyConfig.addPassthroughCopy('admin')

  const {
    DateTime
  } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
        zone: 'utc'
      }).toFormat('yy-MM-dd');
    });

    eleventyConfig.addFilter("sortById", sortByOrder);

    eleventyConfig.addFilter('getYear', (dateString) => {
      return dateString.substring(0,4);
    });

    eleventyConfig.addFilter('getPath', (url) => {
      return url.substring(35);
    });

    eleventyConfig.addFilter('oneFortyChar', (string) => {
      return string.substring(0,100) + "...";
    });

    eleventyConfig.addFilter("yearDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("YYYY");
    
  });

  return {
    dir: { input: 'src', output: '_site' }
  };
};


function sortByOrder(values) {
  let vals = [...values];     // this *seems* to prevent collection mutation...
  return vals.sort((a, b) => Math.sign(a.data.id - b.data.id));
}