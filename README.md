# Shadow's Legacies — Website
Dark, mobile‑first site with full‑screen hero, Services with direct booking, and About page.

## Quick Start
- Host the folder as‑is (supports static hosting like GitHub Pages, Netlify, Vercel, or your cPanel).
- Open `index.html` to preview.

## Customize
- **Colors**: Edit CSS variables at the top of `css/styles.css`.
- **Logo & Favicon**: Replace `assets/favicon.svg` and edit the inline logo SVG in the header.
- **Hero Image**: Replace `assets/hero.svg` with your own photo; keep the same filename or update the CSS `.hero::before` URL.
- **Business Email**: In `js/main.js`, replace `bookings@shadowslegacies.example` with your real email address.
- **Social Links**: Update footer links in each page.

## Booking Options
1. **Email Handoff (Default)** — The Services form opens the user's email client with the booking details prefilled (no backend required).
2. **Calendly** — Replace the "Use Calendly" link or embed your scheduling widget:
   ```html
   <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
   <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
   <a href="#" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/YOUR-LINK'});return false;">Schedule Now</a>
   ```
3. **Google Form** — Create a form and replace the `<form>` with your embed code.
4. **Form Backend** — Use a service like Formspree or Netlify Forms; change the form's `action` and `method` accordingly.

## Pages
- `/index.html` — Full-screen hero + highlights
- `/services.html` — Services grid + booking form
- `/about.html` — Story and values

## Accessibility
- Keyboard and screen reader friendly nav.
- High contrast, large hit targets, and clear focus styles.

## Deployment Tips
- Keep file paths absolute from root (`/css/styles.css`) or adjust if hosting in a subdirectory.
- Set caching headers for assets; use `.svg` for crisp, small graphics.
