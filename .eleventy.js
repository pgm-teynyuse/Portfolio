const sort = (arr) => {
      const sortedArray = arr.sort((a, b) => {
            return a.data.nav.order - b.data.nav.order;
      });

      return sortedArray;
};

const getCurrentYear = () => {
      return new Date().getFullYear();
}

module.exports = (eleventyConfig) => {
      eleventyConfig.addPassthroughCopy({
            'input/assets/styles/dist/': 'styles/',
            'input/assets/images/': 'img/',
            'input/assets/fonts/': 'fonts/',
            'input/assets/scripts/': 'scripts/',
            'input/assets/icons/': 'icons/',
});



eleventyConfig.addShortcode('currentYear', getCurrentYear);
eleventyConfig.addFilter('sortByOrder', sort);

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