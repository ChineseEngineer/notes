module.exports = {
  base: '/', // 部署站点的基础路径
  title: 'notes',
  description: 'just learning notes',
  them: 'reco',
  themeConfig: {
    author: 'ChineseEnginner',
    docsDir: 'docs',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '前端规范',
        items: [
          {
            text: 'CSS规范',
            link: '/guide/css/'
          },
          {
            text: 'JavaScript规范',
            link: '/guide/javascript/'
          },
          {
            text: 'Vue规范',
            link: '/guide/vue/'
          },
          {
            text: '开发流程规范',
            link: '/guide/process/'
          }
        ]
      },
      {
        text: '前端工程化',
        items: [
          {
            text: 'npm',
            link: '/guide/project/npm/'
          },
          {
            text: 'yarn',
            link: '/guide/project/yarn/'
          },
          {
            text: 'webpack',
            link: '/guide/project/webpack/'
          }
        ]
      },
      {
        text: 'Languages',
        items: [
          {
            text: '简体中文',
            link: '/'
          },
          {
            text: 'English',
            link: '/en'
          }
        ]
      }
    ],
    sidebar: 'auto'
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
