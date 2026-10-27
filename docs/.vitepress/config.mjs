import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-TW',
  title: 'JS 從零開始',
  description: '初學者寫給初學者的 JavaScript 教學：邊學、邊卡關、邊整理',
  // 部署到 GitHub Pages 時，網址會是 /<repo 名稱>/，由 GitHub Actions 透過 BASE 傳入
  base: process.env.BASE || '/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '教學', link: '/lessons/01-variables' },
      { text: '學習日誌', link: '/journal/' }
    ],

    sidebar: {
      '/lessons/': [
        {
          text: '第一部分：基礎',
          items: [
            { text: '01. 變數與型別', link: '/lessons/01-variables' }
          ]
        }
      ],
      '/journal/': [
        {
          text: '學習日誌',
          items: [
            { text: '關於日誌', link: '/journal/' },
            { text: '01. 變數與型別', link: '/journal/01-variables' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
          modal: {
            noResultsText: '找不到結果',
            resetButtonTitle: '清除',
            footer: { selectText: '選擇', navigateText: '切換', closeText: '關閉' }
          }
        }
      }
    },

    outline: { level: [2, 3], label: '本頁目錄' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最後更新' },
    darkModeSwitchLabel: '外觀',
    sidebarMenuLabel: '選單',
    returnToTopLabel: '回到頂部',

    footer: {
      message: '初學者寫給初學者。發現錯誤歡迎指正。'
    }
  }
})
