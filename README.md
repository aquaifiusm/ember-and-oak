# Ember & Oak Restaurant Demo

Ember & Oak is a premium, responsive restaurant website built as a portfolio and client demonstration. It presents a fictional Egyptian-inspired charcoal kitchen with a filterable menu, demo ordering flow, branch directory, gallery, sample testimonials, and complete contact experience.

> All restaurant names, contact details, addresses, prices, ratings, and testimonials are fictional sample content. Replace them before using the project for a real business.

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
│   ├── app.js           # Menu, cart, navigation, gallery, and dialog interactions
│   ├── index.html       # Semantic page content and SEO metadata
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

## Customize before client launch

Replace the following demo content:

- Restaurant name, logo, description, and concept story
- Phone, WhatsApp, email, Instagram, and social links
- Branch names, addresses, hours, and Google Maps links
- Menu categories, dishes, descriptions, and prices
- Sample testimonials and demo rating
- AI-generated food imagery with the client's licensed photography
- Structured-data contact and address fields in `dist/index.html`

If the client needs reservations, delivery, payments, or a contact form that submits data, connect the UI to an approved backend service before launch.
