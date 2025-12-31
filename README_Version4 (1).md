# Portfolio — Sudhanshu Mishra

This is a professional, dark-pastel portfolio template built with Tailwind CSS (Play CDN), AOS animations, and a contact form ready for Formspree.

Files included
- `index.html` — Main page (Tailwind + AOS)
- `styles.css` — Small custom CSS for polish
- `script.js` — Mobile navigation, contact form handling, year update
- `assets/profile.jpg` — Optional (place your photo here)
- `resume.pdf` — Optional (place your resume here and update the link if needed)

How to open in VS Code
1. Create a folder (e.g., `MyPortfolio`) and save the files from this package into it.
2. Open the folder in VS Code (File → Open Folder).
3. Recommended: Install the Live Server extension, right-click `index.html` → Open with Live Server.
   Or run a local server:
   - `cd /path/to/MyPortfolio`
   - `python -m http.server 5500`
   - Open `http://localhost:5500`

Edit personal content
- Name (already set to Sudhanshu Mishra): update the `<h1>` and hero text in `index.html` if desired.
- Email: update the mailto link in the Contact section and the Formspree endpoint (see below).
- Resume: replace `resume.pdf` or update `href` in the header to a hosted URL.
- Projects & Skills: edit the Projects and Skills sections in `index.html` with your real content and links.

Contact form (Formspree)
- Option A (recommended, no backend): create a free Formspree form at https://formspree.io/ and copy your form endpoint (it looks like `https://formspree.io/f/yourFormId`).
  - In `index.html`, set the form `action="https://formspree.io/f/yourFormId"` and remove `data-formspree` if present.
  - Or leave the demo endpoint and the JS will simulate the send.
- Option B: use EmailJS or another service; update `script.js` submit handler accordingly.

Customize theme
- Fonts: replace/extend via Google Fonts link in `index.html`.
- Colors: Tailwind custom colors are configured in the inline `tailwind.config` in `index.html` (edit there).
- If you prefer a Tailwind build pipeline (recommended for production), convert this Play CDN setup to a proper Tailwind project.

Deploy
- GitHub Pages: push the folder to a repository and enable Pages (branch `main`).
- Netlify / Vercel: drag & drop or connect the repo.

If you want, provide:
- 2–4 project titles with short descriptions and links
- The email you want displayed and the Formspree endpoint (or I can configure Formspree for you)
I will update and return the ready-to-deploy folder.
