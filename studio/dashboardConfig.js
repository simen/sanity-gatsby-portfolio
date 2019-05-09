export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cd463a16c516edee09b2680',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yxahn4y8',
                  apiId: '5c0f9770-e66d-4324-b2c7-1fe2bcc88a8c'
                },
                {
                  buildHookId: '5cd463a11d798f9d700c2c37',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-e3zisxgh',
                  apiId: '813d08ec-e2ba-4d1d-b708-15cfd712d493'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-e3zisxgh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
