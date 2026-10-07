# 🔒 Secure Exam PDF Viewer

A password-protected PDF viewer for practical exams.  
Students see the PDF rendered as secure canvas images — no copy, no text selection, no right-click, no print.

---

## 📁 Project Structure

```
exam-viewer/
├── index.html                  ← Main page (do not edit)
├── config.js                   ← ⚙️  YOUR settings — edit this!
├── pdf/
│   ├── exam.pdf                ← 📄  Place your PDF here
│   └── PLACE_YOUR_PDF_HERE.txt ← (can delete this after adding your PDF)
└── README.md                   ← This file
```

---

## ⚙️ How to Configure

Open **`config.js`** in any text editor (Notepad, VS Code, etc.) and change the values:

### 1 — Change the Password

```js
password: "YourNewPassword",
```

> Change this **before every exam session**, then re-upload `config.js` to your host.

---

### 2 — Change / Update the PDF

1. Copy your PDF file into the `pdf/` folder  
2. Update `config.js`:

```js
pdfFile: "pdf/your-exam-file.pdf",
```

> The `pdf/` prefix is required. Keep the file inside the `pdf/` folder.

---

### 3 — Update the Title and School Name

```js
examTitle:       "Midterm Practical Exam",
institutionName: "BSIT Department — 2nd Year",
```

---

### 4 — Change or Remove the Watermark

```js
watermarkText: "EXAM COPY — DO NOT DISTRIBUTE",
// To disable: watermarkText: "",
```

---

### 5 — Turn Off Tab-Switch Warning

```js
detectTabSwitch: false,
```

---

## 🚀 Free Hosting — Step by Step

### Option A: GitHub Pages *(Recommended — completely free)*

1. Go to **[github.com](https://github.com)** and create a free account (if you don't have one).
2. Click **New repository** → name it e.g. `exam-viewer` → set to **Public** → click **Create**.
3. Click **Add file → Upload files** → drag the entire `exam-viewer/` folder contents (all files + the `pdf/` folder).
4. Click **Commit changes**.
5. Go to **Settings → Pages → Branch: `main` → folder: `/ (root)` → Save**.
6. After ~1 minute your site is live at:
   ```
   https://YOUR-USERNAME.github.io/exam-viewer
   ```

> ✅ **To update password or PDF**: Just re-upload the changed files (`config.js` or `pdf/exam.pdf`) and commit.

---

### Option B: Netlify *(Drag & Drop — no account setup needed)*

1. Go to **[app.netlify.com](https://app.netlify.com)** → sign up free.
2. On the dashboard, drag-and-drop the entire `exam-viewer/` folder onto the big upload area.
3. Done — you get a URL like `https://random-name.netlify.app`.

> ✅ **To update files**: Log back into Netlify → your site → **Deploys** tab → drag-and-drop the updated folder again.

---

## 🛡️ Security Features Summary

| Protection | Included |
|---|:---:|
| Password gate (required to view) | ✅ |
| 3-wrong-attempt lockout (60 s) | ✅ |
| Session persistence (refresh stays logged in) | ✅ |
| PDF rendered as canvas — no raw file exposed in browser | ✅ |
| Right-click blocked | ✅ |
| Text selection blocked | ✅ |
| Copy / Cut (`Ctrl+C`, `Ctrl+X`) blocked | ✅ |
| Print (`Ctrl+P`) blocked | ✅ |
| Save page (`Ctrl+S`) blocked | ✅ |
| View Source (`Ctrl+U`) blocked | ✅ |
| DevTools shortcut (`F12`, `Ctrl+Shift+I`) blocked | ✅ |
| Drag-and-drop blocked | ✅ |
| Tab / window-switch warning overlay | ✅ |
| Switch count shown on warning overlay | ✅ |
| Diagonal watermark on every page | ✅ |
| Print stylesheet hides all content | ✅ |

---

## ⚠️ Known Limitations

> **OS-level screenshots cannot be blocked by any website.**  
> `PrtScn`, `Win+Shift+S`, or a phone camera pointed at the screen operate at the operating-system level — no JavaScript can intercept them.  
>  
> The watermark helps here: any screenshot will visibly include the "EXAM COPY — DO NOT DISTRIBUTE" text.

> **The PDF file is publicly downloadable** if someone knows or guesses its URL (e.g. `yoursite.com/pdf/exam.pdf`).  
> The password only protects the viewer UI. For stronger file-level protection you would need a backend server (not free static hosting).  
>  
> **Mitigation**: Use a non-obvious PDF filename, e.g. `pdfFile: "pdf/pt-exam-k7x9.pdf"`.

---

*Built with [PDF.js](https://mozilla.github.io/pdf.js/) · Hosted for free on GitHub Pages / Netlify*
