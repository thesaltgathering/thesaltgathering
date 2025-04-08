module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("contact.html");
    eleventyConfig.addPassthroughCopy("events.html");
  
    return {
      templateFormats: ["html", "njk", "md"],
      dir: {
        input: ".",
        output: "_site"
      }
    };
  };