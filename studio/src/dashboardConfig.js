export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea1d9ba2470487eabfad11c',
                  title: 'Sanity Studio',
                  name: 'WENEN-sanity-gatsby-blog-studio',
                  apiId: 'a346dd71-5271-4245-904b-b7a64c3ad405'
                },
                {
                  buildHookId: '5ea1d9ba76a9d6114aaaee3a',
                  title: 'Blog Website',
                  name: 'WENEN-sanity-gatsby-blog',
                  apiId: '54dfbb48-e5b9-4245-bdf8-80f54c05eb99'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thijszzz/WENEN-sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://WENEN-sanity-gatsby-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
