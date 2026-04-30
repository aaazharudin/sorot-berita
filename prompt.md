You are a senior frontend engineer.

Create a modern news website using Next.js (App Router) and Tailwind CSS based on the following design requirements:

GENERAL:
- Use Next.js 14+ with App Router
- Use Tailwind CSS for styling
- Clean, modern, Gen Z-friendly UI
- Responsive design (mobile, tablet, desktop)
- Use reusable components
- Use dummy/mock data (no backend needed)

LAYOUT STRUCTURE:

1. HEADER / NAVBAR:
- Left: Logo text "ZONA."
- Center: Menu items: Home (active), Trending, News, Entertainment, Tech, Lifestyle, Opinion
- Right:
  - Search icon
  - Dark mode toggle
  - Login button (rounded, purple gradient)

2. TRENDING TAGS BAR:
- Horizontal scrollable tags
- Example tags:
  #KaburAjaDulu #CoreTax #IndonesiaEmas2045 #WWDC24 #ViralTikTok

3. HERO SECTION:
- Left (Main Featured News):
  - Large image with overlay gradient
  - Category badge (e.g., FEATURED)
  - Big title:
    "Anak Muda & Mental Health: Ngobrolin Biar Nggak Sendirian"
  - Subtitle text
  - Author + time

- Right (2 stacked cards):
  - Card 1 (Tech): iPhone article with image
  - Card 2 (Lifestyle): Work From Home tips

4. MAIN CONTENT:
- LEFT COLUMN: Latest News List
  - Card style list (image left, text right)
  - Category label (News, Tech, Entertainment)
  - Title
  - Short description
  - Author + time
  - Bookmark icon

- RIGHT SIDEBAR:
  A. Popular Today (ranked list 1–5)
  B. Popular Topics (tag buttons)
  C. Newsletter subscription card
     - Input email
     - Subscribe button

5. FOOTER:
- Logo + short description
- Menu links
- Information links
- Legal links
- Social media icons

STYLE GUIDE:
- Use soft shadows, rounded-xl or rounded-2xl
- Use gradient accents (purple/blue)
- Clean spacing (padding and margin)
- Modern typography (font-sans)
- Hover effects on cards
- Smooth transitions

COMPONENT STRUCTURE:
- components/
  - Navbar.tsx
  - TrendingTags.tsx
  - HeroSection.tsx
  - NewsCard.tsx
  - Sidebar.tsx
  - Footer.tsx

BONUS:
- Add dark mode support using Tailwind
- Add skeleton loading state
- Use icons from lucide-react

OUTPUT:
- Provide full working Next.js page (app/page.tsx)
- Include components code
- Use clean and maintainable structure