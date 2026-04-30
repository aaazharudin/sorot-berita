# Frontend Dynamic News Website (Next.js)

## 🎯 Goal

Build a dynamic news website frontend using Next.js App Router with mock data (no backend yet).

---

## 📁 Folder Structure

app/

* page.tsx
* news/[slug]/page.tsx
* category/[category]/page.tsx

components/

* NewsCard.tsx

lib/

* data.ts

---

## 📦 Data Source

Create mock data in `lib/data.ts`:

* id
* title
* slug
* category (sport | tech | viral)
* image
* excerpt
* content
* views
* createdAt

---

## 🏠 Homepage

* Show latest articles
* Show trending (sorted by views)
* Use NewsCard component
* Layout:

  * Left: articles
  * Right: trending

---

## 📰 NewsCard Component

* Image
* Category label
* Title
* Excerpt
* Views
* Click → go to `/news/[slug]`

---

## 🔥 Dynamic Detail Page

Route:
`/news/[slug]`

Features:

* Find article by slug
* Show title
* Show image
* Show content
* Show views + date
* Handle not found

---

## 📂 Category Page

Route:
`/category/[category]`

Features:

* Filter by category
* Show list of articles

---

## ⚙️ Rules

* Use Next.js App Router
* Use Tailwind CSS
* Use reusable components
* Clean code structure
* No backend
* Use mock data only

---

## 🚀 Expected Output

* Full folder structure
* Full code (no placeholder)
* Clean, production-ready frontend
