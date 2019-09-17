module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
      ['@vuepress/blog', {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/',
            pagination: {
              perPagePosts: 3,
            },
          },
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ['tag', 'tags'],
            path: '/tag/',
            layout: 'Tag',
            itemLayout: 'TagLayout',
            frontmatter: { title: 'Tag' },
            pagination: {
              perPagePosts: 6
            }
          },
        ],
      }
    ],
    ['disqus', true],
    ['@vuepress/back-to-top']
  ],
}
