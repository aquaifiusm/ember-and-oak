# Ember & Oak Restaurant Website

Ember & Oak is a premium, responsive restaurant website for an Egyptian-inspired charcoal kitchen. It includes Arabic and English experiences, a filterable menu, ordering flow, branch directory, gallery, guest reviews, and complete contact experience.

> Replace the current restaurant details, contact information, prices, ratings, and guest quotes with approved business content before launch.

## Tech stack

- Semantic HTML5
- Modern CSS with responsive layouts and reduced-motion support
- Dependency-free vanilla JavaScript
- Optimized WebP image assets
- Static deployment with no backend or environment variables

## Run locally

From the project directory:

```powershell
python -m http.server 4173 --directory dist
```

Then open [http://localhost:4173](http://localhost:4173).

## Build

There is no compilation step. The production-ready static output is already in `dist/`.

- Build command: none
- Output directory: `dist`
- Environment variables: none

## Project structure

```text
ember-and-oak/
├── dist/
│   ├── assets/          # Optimized production WebP images
│   ├── _headers         # Cloudflare Pages headers
│   ├── content.js       # All editable bilingual restaurant content
│   ├── app.js           # Rendering, cart, navigation, gallery, and dialog interactions
│   ├── index.html       # Semantic layout, fallbacks, and SEO metadata
│   ├── robots.txt
│   └── styles.css       # Design system and responsive layouts
├── source-assets/       # Original high-resolution generated images
├── .gitignore
└── README.md
```

## Deploy to Cloudflare Pages

1. Push this repository to GitHub or GitLab.
2. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository.
4. Use these build settings:
   - Framework preset: **None**
   - Build command: leave blank
   - Build output directory: `dist`
5. Deploy. No environment variables are required.

For direct upload, use Cloudflare Pages' drag-and-drop option and upload the contents of `dist/`.

## Edit the website content

All normal content changes are made in `dist/content.js`. It contains clearly grouped sections for:

- Restaurant name, contact details, links, opening hours, and credits
- Menu items, categories, descriptions, prices, and optional images
- Branch names, addresses, hours, phone numbers, and directions
- Gallery images, captions, and alternative text
- Review names, initials, ratings, roles, and quotes
- Payment method names and helper text
- English and Egyptian Arabic interface copy

Each bilingual value uses an `{ en: "...", ar: "..." }` pair. Keep the surrounding punctuation intact when editing. Adding or removing a complete object from `menuItems`, `branches`, or `reviews` automatically updates the displayed site.

After editing, commit the change to the `main` branch. Cloudflare Pages will deploy it automatically.

## Customize before client launch

Replace the following content before launch:

- Restaurant name, logo, description, and concept story in `dist/content.js`
- Phone, WhatsApp, email, Instagram, and social links
- Branch names, addresses, hours, and Google Maps links
- Menu categories, dishes, descriptions, and prices
- Guest quotes and rating
- Current food imagery with the client's licensed photography
- Structured-data contact and address fields in `dist/index.html` when final business details are known

If the client needs reservations, delivery, payments, or a contact form that submits data, connect the UI to an approved backend service before launch.
