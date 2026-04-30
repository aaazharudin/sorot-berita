You are a senior frontend engineer and UI refactoring expert.

TASK:
Refactor the existing Next.js news website project by changing the brand name to **"Sorot"** and improving branding consistency across the entire application.

---

🎯 OBJECTIVES:

1. Replace all previous brand names with:
   **Sorot**

2. Add a professional tagline:
   "Sorot — Berita yang Lagi Jadi Perhatian"

3. Improve visual identity to match the meaning of "Sorot" (highlight, focus, trending)

---

🎨 DESIGN REQUIREMENTS:

* Style: modern, clean, Gen Z editorial

* Background: white / light gray

* Accent color:

  * Primary: Blue (#2563EB)
  * Secondary: Orange (#F97316) for "viral/highlight"

* Add highlight feel:

  * subtle glow on hover
  * badge styles (🔥 Viral, ⚡ Trending)

---

🧱 IMPLEMENTATION DETAILS:

Update the following:

1. NAVBAR

* Change logo text to: Sorot
* Add tagline below logo (optional small text)
* Improve spacing and alignment

2. HOMEPAGE (app/page.tsx)

* Update page title:
  "Sorot — Berita Terbaru Hari Ini"
* Improve hero section to feel like “highlighted news”
* Add category sections:

  * Sorot Sport
  * Sorot Tech
  * Sorot Viral

3. FOOTER

* Add:
  Sorot — Berita yang Lagi Jadi Perhatian
* Add simple links (About, Contact)

4. METADATA (SEO)

* title: Sorot — Berita Terbaru Olahraga, Tech & Viral
* description: Portal berita modern dengan fokus pada topik yang sedang viral dan relevan

5. COMPONENTS

* Update all references of old brand name
* Improve NewsCard:

  * add category color
  * add hover highlight effect

---

⚡ UX IMPROVEMENTS:

* Add hover animation (scale + shadow)
* Improve spacing (more whitespace)
* Use consistent typography hierarchy

---

📦 OUTPUT FORMAT:

1. Show updated folder structure (if changed)
2. Show FULL updated code for:

   * Navbar
   * Homepage (page.tsx)
   * NewsCard
   * Footer
3. Do NOT summarize
4. Do NOT skip any file

---

IMPORTANT:

* Do not break existing functionality
* Focus on branding + UI improvements
* Keep code clean and production-ready
