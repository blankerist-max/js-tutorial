# JS 從零開始

初學者寫給初學者的 JavaScript 教學網站，使用 [VitePress](https://vitepress.dev/) 建置。

## 常用指令

| 指令 | 用途 |
|---|---|
| `npm run dev` | 在本機啟動網站，修改檔案後頁面會自動更新 |
| `npm run build` | 建置正式版網站 |
| `npm run preview` | 預覽建置好的正式版網站 |

## 資料夾結構

```
docs/
├─ index.md            首頁
├─ lessons/            教學文章
├─ journal/            學習日誌（每篇教學一份）
└─ .vitepress/
   └─ config.mjs       網站設定（標題、導覽列、側邊欄）
templates/
└─ journal-template.md 新日誌的範本
.github/workflows/
└─ deploy.yml          推送到 main 後自動部署到 GitHub Pages
```

## 新增一篇教學

1. 在 `docs/lessons/` 新增 `02-xxx.md`。
2. 把 `templates/journal-template.md` 複製到 `docs/journal/02-xxx.md`。
3. 在 `docs/.vitepress/config.mjs` 的 `sidebar` 加上這兩篇的連結。

## 教學製作流程

1. 先用教材自己學一次，卡關的地方記在學習日誌。
2. 檢查有沒有效：不看答案能寫出練習嗎？一週後還記得嗎？
3. 有效就發佈，沒效就修改教材再試一次。
