module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("script.js");
  
    return {
      dir: {
        input: ".",
        output: "_site"
      }
    };
  };