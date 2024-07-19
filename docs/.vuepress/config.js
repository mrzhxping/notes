import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

import { navbar, sidebar } from './configs/index.js'

export default defineUserConfig({

  lang: 'zh-CN',

  title: '丶看客',
  description: '一些个人笔记',

  theme: defaultTheme({

    locales: {
      "/": {
        navbar,
        sidebar,
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        backToHome: '返回首页',
      },
    }

  }),

  bundler: viteBundler(),
})
