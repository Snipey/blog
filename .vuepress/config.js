module.exports = {
  title: 'What a mess',
  description: 'A place to put my thoughts!',
  dest: 'dist',
  serviceWorker: true,
  base: '/',
  postcss: {
    plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
    ]
  },
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Changelog', link: '/articles' },
    ],
    lastUpdated: 'Last Updated',
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'snipey/blog',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    serviceWorker: {
      updatePopup: true
    },
    markdown: {
      lineNumbers: true,
      anchor: { permalink: false }
    },
    
    sidebar: [
      { 
        text: 'Introduction',
        children: [
          // { title: '', link: ''}, 
        ]
      },
    ]
  }
};