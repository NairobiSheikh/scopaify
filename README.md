# scopaify Restaurant Growth System

# Scopaify Website

Modern restaurant digital agency website for [scopaify.com](https://scopaify.com)

## 🚀 Getting Started in VS Code

### 1. Install Recommended Extensions

When you open this folder in VS Code, you'll be prompted to install recommended extensions. Click **Install All**. Key ones:

- **Live Server** — preview the site instantly with hot reload
- **Prettier** — auto-formats your HTML/CSS on save
- **Auto Rename Tag** — renames closing tags automatically

### 2. Launch the Site

- Right-click `index.html` → **Open with Live Server**
- Or click **Go Live** in the VS Code status bar (bottom right)
- Opens at `http://127.0.0.1:5500`

---

## 📁 Project Structure

```
scopaify-website/
├── index.html              ← Main site (all-in-one)
├── demos/                  ← Demo restaurant sites
│   ├── ember-grill.html
│   ├── santi-bistro.html
│   └── kaizen-sushi.html
├── assets/
│   └── images/
│       ├── logo.png            ← Galaxy S logo (transparent bg)
│       ├── logo-white.svg      ← White logo (for dark backgrounds)
│       ├── logo-black.svg      ← Black logo (for light backgrounds)
│       ├── logo-sky.svg        ← Sky/color logo
│       ├── favicon.ico         ← Browser favicon
│       ├── favicon-16.png
│       ├── favicon-32.png
│       ├── favicon-48.png
│       ├── favicon-180.png     ← Apple touch icon
│       └── favicon-512.png     ← PWA icon
├── css/                    ← (optional) split styles here later
├── js/                     ← (optional) split scripts here later
├── .vscode/
│   ├── settings.json       ← Editor settings (format on save, tab size)
│   ├── extensions.json     ← Recommended extensions
│   └── launch.json         ← Live Server launch config
└── README.md               ← This file
```

---

## ✏️ Making Edits

### Update copy / text

All text content is in `index.html`. Use **Ctrl+F** (Cmd+F on Mac) to search for the text you want to change.

### Update colors

CSS variables are defined near the top of `index.html` inside `<style>`:

```css
:root {
  --grad-main: ...; /* Main brand gradient */
  --ink: #07060f; /* Site background */
  --text-1: #fff; /* Primary text */
  --text-2: ...; /* Secondary text */
}
```

### Add a new demo

1. Create a new `.html` file in the `demos/` folder
2. Link to it in `index.html` in the portfolio section

### Swap the logo

Replace `assets/images/logo.png` with your new file (keep the same filename) and refresh Live Server.

---

## 📦 Deploying

This is a **single HTML file** site — dead simple to deploy:

| Platform         | Steps                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| **Netlify**      | Drag the entire folder onto [netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel**       | `vercel deploy` from this folder                                             |
| **GitHub Pages** | Push to a repo, enable Pages in Settings                                     |
| **Any host**     | Upload `index.html` + `demos/` + `assets/` via FTP                           |

---

## 🎨 Brand Colors

| Token            | Value                    | Use              |
| ---------------- | ------------------------ | ---------------- |
| Primary gradient | `#4f46e5 → #7c3aed`      | CTAs, highlights |
| Background       | `#07060f`                | Site background  |
| Text primary     | `#ffffff`                | Headlines        |
| Text secondary   | `rgba(255,255,255,0.65)` | Body copy        |

---

Built with ❤️ by Scopaify
