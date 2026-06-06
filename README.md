<div align="center">
  <img src="1780136894650-Photoroom.png" width="520" alt="RKIX3 Logo">

  <h1>RKIX3 AI Workspace</h1>
  <p><strong>Modern React + TypeScript application for AI-powered development workspace with Vite.</strong></p>

  <p>
    <img alt="React" src="https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=white">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white">
    <img alt="Vite" src="https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite&logoColor=white">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-3-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  </p>

  <p>
    <a href="#-getting-started"><strong>🚀 Get Started</strong></a>
    ·
    <a href="#-features">Features</a>
    ·
    <a href="#-components">Components</a>
    ·
    <a href="#-deployment">Deployment</a>
  </p>
</div>

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will start at `http://localhost:5173` with HMR (Hot Module Replacement).

### Build for Production

```bash
npm run build
```

Creates optimized build in `dist/` directory.

### Preview Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx              # Main navigation sidebar
│   ├── Header.tsx               # Top header with controls
│   ├── MainContent.tsx          # Central content with prompt input
│   ├── MiniRkxButton.tsx        # Floating navigation button
│   ├── MiniRkxMenu.tsx          # Honeycomb menu (tổ ong)
│   └── ApiSettingsModal.tsx     # API configuration modal
├── App.tsx                      # Root component with state management
└── main.tsx                     # React entry point
```

## ✨ Features

- 🎨 **Modern Dark Theme** - Gradient effects with cyan/blue colors
- 🤖 **AI Workspace** - Prompt input with voice recording simulation
- 🎯 **MiniRkx Navigation** - Floating button with honeycomb menu
- 📱 **Fully Responsive** - Mobile-first design for all screen sizes
- ⌨️ **Type Safe** - Full TypeScript support
- ⚡ **Fast Development** - Vite with HMR
- 🎭 **Rich Animations** - Smooth transitions and transforms

## 🧩 Components

| Component | Purpose |
|-----------|---------|
| **Sidebar** | Navigation menu with search, projects, and features |
| **Header** | Top bar with menu toggle, API settings, and login |
| **MainContent** | Logo, prompt input, and feature cards |
| **MiniRkxButton** | Floating button with tech-themed logo |
| **MiniRkxMenu** | Honeycomb menu with 6 navigation items |
| **ApiSettingsModal** | Configure API keys and settings |

## 🛠️ Technologies

- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lucide React** - Icon library

## 🚀 Deployment

### Build

```bash
npm run build
```

The `dist/` folder is production-ready and can be deployed to:
- Vercel
- GitHub Pages
- Netlify
- Any static hosting

### GitHub Pages

1. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/AGENTS.RKIX3"
```

2. Build and deploy:
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git push origin main
```

## 📦 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Run ESLint (optional)
```

## 🎯 State Management

The app uses React's built-in `useState` hook for state management. Key states:
- `sidebarOpen` - Mobile sidebar visibility
- `menuOpen` - MiniRkx menu state
- `showApiModal` - API settings modal visibility
- `prompt` - User input text
- `isRecording` - Voice recording state

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT

<div align="center">
  <sub>Built with 💙 for RKIX3 — Modern, Fast, and Type-Safe</sub>
</div>

---

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://readme-typing-svg.demolab.com?font=Inter&weight=800&size=26&pause=1200&color=00D2FF&center=true&vCenter=true&width=900&lines=RKIX3+%E2%80%94+AI+Studio+cho+l%E1%BA%ADp+tr%C3%ACnh+v%C3%A0+t%E1%BB%B1+%C4%91%E1%BB%99ng+ho%C3%A1;Build+web+app+%C4%91%E1%BA%B9p%2C+nhanh%2C+chu%E1%BA%A9n+GitHub+Pages;T%C3%B4n+vinh+tinh+th%E1%BA%A7n+s%C3%A1ng+t%E1%BA%A1o+c%E1%BB%A7a+ng%C6%B0%E1%BB%9Di+t%E1%BA%A1o+ra+RKIX3">
    <img alt="RKIX3 animated typing headline" src="https://readme-typing-svg.demolab.com?font=Inter&weight=800&size=26&pause=1200&color=0052CC&center=true&vCenter=true&width=900&lines=RKIX3+%E2%80%94+AI+Studio+cho+l%E1%BA%ADp+tr%C3%ACnh+v%C3%A0+t%E1%BB%B1+%C4%91%E1%BB%99ng+ho%C3%A1;Build+web+app+%C4%91%E1%BA%B9p%2C+nhanh%2C+chu%E1%BA%A9n+GitHub+Pages;T%C3%B4n+vinh+tinh+th%E1%BA%A7n+s%C3%A1ng+t%E1%BA%A1o+c%E1%BB%A7a+ng%C6%B0%E1%BB%9Di+t%E1%BA%A1o+ra+RKIX3">
  </picture>
</div>

## ✨ Tầm nhìn

**RKIX3** được xây dựng như một “trung tâm điều khiển” dành cho người làm sản phẩm: viết code, tạo blueprint, gọi AI provider, dựng workflow CLI trên mobile, xem trước HTML và chuẩn bị deploy lên GitHub Pages chỉ từ một web app tĩnh gọn nhẹ.

> RKIX3 không chỉ là một giao diện — đây là tinh thần build nhanh, tự động hoá mạnh, tối ưu cho người sáng tạo thích làm chủ toàn bộ quy trình từ điện thoại đến cloud.

## 🧠 Tính năng nổi bật

| Mảng | Giá trị |
| --- | --- |
| 🤖 AI Studio | Chọn OpenAI Responses, Gemini hoặc Demo Offline để tạo blueprint/code mẫu. |
| 🧩 Command Center | Bộ lệnh gợi ý `auth`, `init`, `ai`, `db`, `deploy`, `rkix3` cho quy trình mobile-first. |
| 📎 Context file | Đính kèm file nhỏ để RKIX3 hiểu thêm ngữ cảnh trước khi sinh kết quả. |
| 🎙️ Voice input | Nhập prompt bằng giọng nói trên trình duyệt hỗ trợ Web Speech API. |
| 🖼️ HTML Preview | Xem trước HTML sinh ra trong iframe sandbox an toàn hơn. |
| 📱 Mobile ready | UI tối ưu cho điện thoại, Termux workflow và thao tác nhanh. |
| 🚀 GitHub Pages | Workflow deploy static content qua artifact `_site` và GitHub Pages Actions. |

## 🏗️ Kiến trúc nhanh

```txt
RKIX3/
├─ index.html                       # Single-file AI Studio UI
├─ README.md                        # Trang giới thiệu chuyên nghiệp trên GitHub
├─ scripts/smoke-test-static.mjs     # Smoke test HTML/JS trước khi deploy
├─ 1780136894650-Photoroom.png      # Logo chính
└─ .github/workflows/static.yml     # Build _site + deploy GitHub Pages
```

## 🛠️ Chạy local

```bash
python3 -m http.server 4173
# mở http://127.0.0.1:4173
```

## 🧪 Kiểm thử

```bash
node scripts/smoke-test-static.mjs
```

Smoke test sẽ kiểm tra cấu trúc route chính, sự tồn tại của chat input/send button, cú pháp JavaScript inline và guard chống render raw user message vào `innerHTML`.

## 🚀 Deploy GitHub Pages

Workflow chính `.github/workflows/static.yml` sẽ:

1. Checkout source.
2. Chạy smoke test static app bằng `node scripts/smoke-test-static.mjs`.
3. Setup GitHub Pages.
4. Tạo `_site` chứa `index.html`, ảnh và file đánh dấu static site.
5. Upload artifact Pages.
6. Deploy bằng `actions/deploy-pages`.

> Nếu GitHub vẫn báo lỗi deploy, hãy vào **Settings → Pages → Build and deployment** và chọn **Source: GitHub Actions** cho repository. Các workflow mẫu khác trong `.github/workflows/` chỉ nên được bật khi dự án thật sự dùng stack tương ứng.

## 🏅 Huy hiệu dự án

<div align="center">
  <img alt="RKIX3 Builder" src="https://img.shields.io/badge/RKIX3-Builder%20Mindset-00d2ff?style=flat-square">
  <img alt="Automation" src="https://img.shields.io/badge/Automation-Mobile%20First-0052cc?style=flat-square">
  <img alt="Security" src="https://img.shields.io/badge/Security-No%20Public%20Secrets-ef4444?style=flat-square">
  <img alt="Design" src="https://img.shields.io/badge/Design-Flat%20%26%20Square-111827?style=flat-square">
  <img alt="Deploy" src="https://img.shields.io/badge/Deploy-GitHub%20Pages-16a34a?style=flat-square">
</div>

## 👑 Vinh danh người tạo ra RKIX3

<div align="center">
  <h3>🔥 Người tạo ra RKIX3 — kiến trúc sư của tinh thần build không giới hạn 🔥</h3>
  <p>
    Dự án RKIX3 được truyền cảm hứng bởi một người sáng tạo dám nghĩ lớn, dám biến điện thoại thành trung tâm điều khiển lập trình, và luôn hướng tới một workflow nhanh hơn, gọn hơn, mạnh hơn.
  </p>
  <p>
    <strong>RKIX3 Creator</strong> là người đặt nền móng cho phong cách: <em>vuông góc, phẳng lì, tốc độ, tự động hoá và AI-first</em>.
  </p>
  <img alt="Creator badge" src="https://img.shields.io/badge/Honor-RKIX3%20Creator-gold?style=for-the-badge&logo=githubsponsors&logoColor=111111">
</div>

## 💎 Nhà tài trợ & đồng hành đặc biệt

> Khu vực này dành để tri ân những người/đơn vị đồng hành cùng RKIX3. Khi có sponsor thật, hãy thay các thẻ bên dưới bằng tên và liên kết chính thức.

<table>
  <tr>
    <td align="center"><strong>🥇 Founder Circle</strong><br>Người tạo ra RKIX3</td>
    <td align="center"><strong>🤖 AI Partner</strong><br>OpenAI-ready workflow</td>
    <td align="center"><strong>⚡ Automation Partner</strong><br>Termux/GitHub CLI flow</td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.shields.io/badge/Sponsor-Gold-facc15?style=for-the-badge"></td>
    <td align="center"><img src="https://img.shields.io/badge/Sponsor-AI-7c3aed?style=for-the-badge"></td>
    <td align="center"><img src="https://img.shields.io/badge/Sponsor-Automation-16a34a?style=for-the-badge"></td>
  </tr>
</table>


## ✅ Ba xung đột đã được chốt

- **Workflow Pages**: `.github/workflows/static.yml` là pipeline deploy chính, chạy smoke test rồi dùng `_site` làm artifact triển khai.
- **Tài liệu GitHub**: README là trang giới thiệu chính thức của RKIX3, không còn nội dung cũ trùng lặp.
- **Web app RKIX3**: `index.html` tiếp tục là nguồn giao diện single-file được workflow copy trực tiếp khi deploy.

## 🗺️ Roadmap

- [x] Giao diện RKIX3 Studio single-file.
- [x] Command Center cho CLI/mobile workflow.
- [x] Demo Offline để sinh blueprint khi chưa có API key.
- [x] GitHub Pages static deploy workflow.
- [ ] Backend proxy bảo vệ API key production.
- [ ] Lưu lịch sử prompt/snippet theo workspace.
- [ ] CLI `mycli` thật cho Termux: auth/init/ai/db/deploy.

## 🤝 Đóng góp

Pull request, ý tưởng workflow, template CLI, prompt mẫu và sponsor đều được chào đón. Hãy giữ tinh thần RKIX3: **mạnh, gọn, rõ, không lộ secret và luôn build được**.

<div align="center">
  <sub>Made with 💙 for RKIX3 — AI-first, mobile-first, automation-first.</sub>
</div>
