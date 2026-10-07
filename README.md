# Ember & Oak — reusable restaurant demo

A polished Egyptian Arabic / English restaurant concept for Ziad and Omar's portfolio. Food-first imagery, a restrained ivory / charcoal / brass identity, responsive menus, branches, gallery lightbox, guest quotes and an interactive order preview. This is a reusable starting point for client presentations, not a live order or payment system.

## Run locally

No install or build is required. Run from this folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open <http://127.0.0.1:4173/>. Refresh after editing a file.

## كل التعديل في ملف واحد

Edit `dist/content.js`:

- `restaurant`: الاسم، اللوجو، الوصف، المنطقة، المواعيد، بيانات التواصل والكريدت.
- `theme`: اللون الأساسي وخلفية الموقع ولون الكتابة.
- `sections`: إظهار أو إخفاء الفروع والصور والآراء؛ مثلًا `reviews: false` يخفي قسم الآراء وروابطه.
- `media`: صورة أول الشاشة وصور قسم الحكاية.
- `copy`: عناوين ووصف أقسام الموقع. استخدم `{restaurant}` عشان الاسم يتغيّر تلقائيًا.
- `menuCategories`, `menuItems`, `featuredItems`: الأقسام، الأطباق، الأسعار والصور والأطباق المصوّرة الرئيسية.
- `branches`, `galleryItems`, `reviews`, `paymentMethods`: الفروع والصور والآراء والدفع.
- `translations`: باقي كلمات وأزرار الواجهة.

Each bilingual value uses `{ en: "English", ar: "مصري" }`. Prices are numbers in EGP. Keep quotes, commas and brackets intact.

Set `restaurant.logo` to a local path such as `assets/client-logo.png`; otherwise a monogram appears. The name updates the header, photo caption, story, gallery captions, footer and page metadata. Real links use `phoneUrl: "tel:+20..."`, `whatsappUrl: "https://wa.me/20..."`, `instagramUrl` and `mapsUrl`. Empty / placeholder links show a message rather than placing an order or making a call.

## Make an independent client demo

Node.js is needed only for this optional helper. It copies the finished site into `.client-demos/<slug>/` and appends that client's editable settings to its own `content.js`. The base template and previous client demos remain intact.

```powershell
node scripts/create-demo.mjs --name "اسم المطعم" --slug restaurant-name --logo "C:\path\logo.png" --accent "#956f36"
```

Optional contact details:

```powershell
node scripts/create-demo.mjs --name "اسم المطعم" --slug another-restaurant --logo "C:\path\logo.png" --phone "+201012345678" --whatsapp "201012345678"
```

Preview the copied demo:

```powershell
python -m http.server 4174 --bind 127.0.0.1 --directory .client-demos/restaurant-name
```

For a fuller brief, pass a JSON profile:

```powershell
node scripts/create-demo.mjs --profile "C:\path\client-profile.json"
```

Profile example:

```json
{
  "slug": "restaurant-name",
  "logo": "logo.png",
  "restaurant": {
    "name": { "en": "Restaurant Name", "ar": "اسم المطعم" },
    "tagline": { "en": "Grill & kitchen", "ar": "مشويات ومطبخ" },
    "location": { "en": "Maadi, Cairo", "ar": "المعادي، القاهرة" },
    "phone": "+201012345678",
    "phoneUrl": "tel:+201012345678",
    "whatsappUrl": "https://wa.me/201012345678"
  },
  "theme": { "accent": "#956f36" },
  "copy": {
    "heroTitle": { "en": "Your headline", "ar": "عنوان أول الشاشة" }
  }
}
```

Logo paths in JSON are relative to that JSON file. The profile can also provide `menuItems`, `branches`, `reviews`, `galleryItems`, `media` or `featuredItems`. Arrays replace the original array; object fields merge with the base section. Local images referenced by a profile must be placed inside its generated demo folder.

The helper refuses to overwrite an existing client folder. Choose a new slug or edit that existing client's content file. Client previews are excluded from Git and have `robots.txt` set to discourage indexing.

## A quick brief to send us

> ده اسم المطعم وده اللوجو. نوع الأكل: […]. الألوان: […]. ده لينك صفحتهم / المنيو / صور أكلهم: […]. اعمل نسخة ديمو مستقلة، وخلي العنوان والأزرار والصور مناسبين للبراند.

Name and logo are enough to start a visual preview. Cuisine, real menu and approved photos make it convincing for the actual client. Replace sample branch addresses, numbers, guest quotes and dish images with approved content before a real restaurant launch.

## Deployment

- Framework: buildless HTML, CSS and vanilla JavaScript.
- Build command: leave blank.
- Output directory: `dist` for the base project.
- Environment variables: none.
- Hosting: Cloudflare Pages, Git-connected or direct upload.

Connect the existing GitHub repo in Cloudflare Pages with framework preset **None**, no build command and output `dist`. For a separate client demo, upload the contents of `.client-demos/<slug>/` to that client's separate Pages project. Deploying a new client does not replace the portfolio template.

The UI does not send orders, store reservations, collect card details or process payments. Connect those features to the client's approved services when they become part of a paid project. The sample testimonials are not verified reviews.

## Structure

```text
dist/                 Ready-to-deploy site
  content.js          All editable bilingual content and branding
  app.js              Rendering and interactions
  styles.css          Responsive design system
  index.html          Semantic structure and metadata
  assets/             Optimized WebP photos, fonts and favicon
scripts/
  create-demo.mjs     Copies and personalizes a separate client demo
source-assets/
  image-briefs.md     Photography prompts, asset locations and provenance
.client-demos/        Private local copies, ignored by Git
```

Food and interior concept photographs were generated for this project and optimized as WebP. Original menu wording and guest quotes were retained during the redesign. Tajawal is self-hosted under the SIL Open Font License; see `dist/assets/Tajawal-OFL.txt`.
