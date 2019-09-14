module.exports = {
  title: 'What a mess',
  description: 'A place to put my thoughts!',
  dest: 'public',
  serviceWorker: true,
  postcss: {
    plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
    ]
  },
  themeConfig: {
    nav: [
      { text: 'Categories', link:'/tag' }
    ]
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-imsize'))
      md.use(require('markdown-it-video'))
      md.use(require('markdown-it-sup'))
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-anchor')); // Optional, but makes sense as you really want to link to something
      md.use(require('markdown-it-table-of-contents'));
      md.use(require('markdown-it-deflist'));
      md.use(require('markdown-it-ins'));
      md.use(require('markdown-it-mark'));
      md.use(require('markdown-it-emoji'));
    }
  }
};
