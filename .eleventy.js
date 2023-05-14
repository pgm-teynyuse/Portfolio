module.exports = (eleventyConfig) => {
      eleventyConfig.addPassthroughCopy({
            'input/assets/styles/dist/': 'styles/',
            'input/assets/images/': 'img/',
            'input/assets/fonts/': 'fonts/',
            'input/assets/scripts/': 'scripts/',
            'input/assets/icons/': 'icons/',
});


const getCurrentYear = () => {
      return new Date().getFullYear();
}

eleventyConfig.addShortcode('currentYear', getCurrentYear);

return {
            dir: {
            input: './input/pages/',
            output: '_site',
            includes: '../_partials',
            layouts: '../_layouts',
            data: '../_data',
      }
}
}