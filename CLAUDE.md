# 2026 World Baseball Classic 網站專案

## 專案概述

2026 世界棒球經典賽（World Baseball Classic）資訊網站，提供賽事資訊、隊伍介紹、比賽結果與即時積分等功能。

## 技術棧

### 前端
- **Framework**: React 18+
- **語言**: JavaScript / TypeScript
- **套件管理**: npm
- **路由**: React Router
- **狀態管理**: (待定，候選：Redux Toolkit / Zustand)
- **UI 元件庫**: (待定，候選：Tailwind CSS / Material UI / Ant Design)
- **HTTP 客戶端**: Axios

### 後端
- **Framework**: Spring Boot 3.x
- **語言**: Java 17+
- **建置工具**: Maven 或 Gradle
- **資料庫**: (待定，候選：MySQL / PostgreSQL)
- **ORM**: Spring Data JPA / Hibernate
- **API 風格**: RESTful API

## 專案結構

```
HW/
├── CLAUDE.md           # 專案文件（本檔案）
├── frontend/           # React 前端應用
│   ├── public/
│   ├── src/
│   │   ├── components/ # 共用元件
│   │   ├── pages/      # 頁面元件
│   │   ├── hooks/      # 自定義 Hook
│   │   ├── services/   # API 呼叫
│   │   ├── store/      # 狀態管理
│   │   └── utils/      # 工具函式
│   └── package.json
└── backend/            # Spring Boot 後端應用
    ├── src/
    │   └── main/
    │       ├── java/
    │       │   └── com/wbc2026/
    │       │       ├── controller/ # REST Controller
    │       │       ├── service/    # 業務邏輯
    │       │       ├── repository/ # 資料存取
    │       │       ├── model/      # 實體類別
    │       │       └── dto/        # 資料傳輸物件
    │       └── resources/
    │           └── application.yml
    └── pom.xml
```

## 功能規劃

### 核心功能
- [ ] 首頁：賽事總覽、最新消息
- [ ] 隊伍列表：參賽國家/隊伍資訊
- [ ] 賽程表：完整賽程與時間
- [ ] 比賽結果：各輪賽事結果
- [ ] 積分排行：各組積分榜
- [ ] 球員資料：各隊球員介紹

### 進階功能（待評估）
- [ ] 即時比分更新
- [ ] 多語言支援（中文 / 英文）
- [ ] 響應式設計（手機 / 平板 / 桌機）

## API 端點規劃

| 方法 | 路徑 | 說明 |
|------|------|------|
| GET | `/api/teams` | 取得所有隊伍 |
| GET | `/api/teams/{id}` | 取得單一隊伍資訊 |
| GET | `/api/games` | 取得所有比賽 |
| GET | `/api/games/{id}` | 取得單一比賽資訊 |
| GET | `/api/standings` | 取得積分排行 |
| GET | `/api/players` | 取得球員列表 |
| GET | `/api/players/{id}` | 取得單一球員資訊 |

## 開發規範

### Git 分支策略
- `main` / `master`：穩定版本
- `develop`：開發整合分支
- `feature/*`：功能開發分支
- `claude/*`：AI 輔助開發分支

### Commit 訊息格式
```
<type>: <description>

type:
  feat     - 新功能
  fix      - 修復 Bug
  docs     - 文件更新
  style    - 格式調整
  refactor - 程式碼重構
  test     - 測試相關
  chore    - 建置/工具調整
```

### 程式碼風格
- 前端：ESLint + Prettier
- 後端：Google Java Style Guide

## 開發環境需求

| 工具 | 版本 |
|------|------|
| Node.js | 18+ |
| Java | 17+ |
| Maven | 3.8+ |
| Git | 2.x |

## 跨域設定（CORS）

後端需設定允許前端來源（開發時為 `http://localhost:3000`）。

## 2026 WBC 參賽隊伍（共 20 隊）

賽事時間：**2026年3月5日 – 3月17日**

### Pool A｜聖胡安，波多黎各
| 隊伍 | 國家/地區 |
|------|-----------|
| 🇵🇷 Puerto Rico | 波多黎各 |
| 🇨🇦 Canada | 加拿大 |
| 🇨🇴 Colombia | 哥倫比亞 |
| 🇨🇺 Cuba | 古巴 |
| 🇵🇦 Panama | 巴拿馬 |

### Pool B｜休士頓，德州，美國
| 隊伍 | 國家/地區 |
|------|-----------|
| 🇺🇸 United States | 美國 |
| 🇲🇽 Mexico | 墨西哥 |
| 🇧🇷 Brazil | 巴西 |
| 🇬🇧 Great Britain | 英國 |
| 🇮🇹 Italy | 義大利 |

### Pool C｜東京，日本
| 隊伍 | 國家/地區 |
|------|-----------|
| 🇯🇵 Japan | 日本（衛冕冠軍） |
| 🇰🇷 South Korea | 南韓 |
| 🇦🇺 Australia | 澳洲 |
| 🇹🇼 Chinese Taipei | 中華台北 |
| 🇨🇿 Czechia | 捷克 |

### Pool D｜邁阿密，佛羅里達，美國
| 隊伍 | 國家/地區 |
|------|-----------|
| 🇩🇴 Dominican Republic | 多明尼加 |
| 🇻🇪 Venezuela | 委內瑞拉 |
| 🇳🇱 Netherlands | 荷蘭 |
| 🇳🇮 Nicaragua | 尼加拉瓜 |
| 🇮🇱 Israel | 以色列 |

### 晉級賽程
- **四強（準決賽前）**：邁阿密 & 休士頓
- **準決賽 & 決賽**：邁阿密

### 資格取得方式
- 16 隊：2023 WBC 各組前四名直接晉級
- 4 隊（尼加拉瓜、中華台北、哥倫比亞、巴西）：透過資格賽取得資格
- 中國：首次未能取得參賽資格

## 備註

- 2026 WBC 賽事時間：2026年3月5日 – 3月17日
- 衛冕冠軍：日本（2023年擊敗美國奪冠）
- 本網站以展示/學習為目的
