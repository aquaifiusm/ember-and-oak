import { cp, mkdir, readFile, writeFile, access } from "node:fs/promises";
import { resolve, dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const options = {};
for (let index = 0; index < args.length; index += 2) {
  const key = args[index];
  if (
    !/^--(name|slug|logo|accent|phone|whatsapp|profile)$/.test(key) ||
    !args[index + 1]
  )
    throw new Error(
      "Use --name, --slug, --logo, --accent, --phone, --whatsapp, or --profile followed by a value.",
    );
  options[key.slice(2)] = args[index + 1];
}
const profilePath = options.profile ? resolve(options.profile) : null;
const profile = profilePath
  ? JSON.parse(await readFile(profilePath, "utf8"))
  : {};
const name = options.name || profile.restaurant?.name || profile.name;
const slug = options.slug || profile.slug;
if (!name || !slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
  throw new Error(
    'Supply a restaurant name and a lowercase slug, e.g. --name "Lamma" --slug lamma.',
  );
const accent = options.accent || profile.theme?.accent;
if (accent && !/^#[\da-f]{6}$/i.test(accent))
  throw new Error("Accent must be a six-digit hex color, e.g. #956f36.");
const output = join(root, ".client-demos", slug);
let exists = false;
try {
  await access(output);
  exists = true;
} catch {}
if (exists)
  throw new Error(
    `A demo already exists at ${output}. Choose a new slug; existing client work is never overwritten.`,
  );
const restaurant = {
  ...profile.restaurant,
  name,
  monogram:
    typeof name === "string"
      ? name.trim().slice(0, 2)
      : (name.en || name.ar).slice(0, 2),
};
if (options.phone) {
  restaurant.phone = options.phone;
  restaurant.phoneUrl = `tel:${options.phone.replace(/\s/g, "")}`;
}
if (options.whatsapp) {
  const number = options.whatsapp.replace(/[^\d]/g, "");
  if (number.length < 10 || number.length > 15)
    throw new Error(
      "Supply a WhatsApp phone number including the country code.",
    );
  restaurant.whatsappUrl = `https://wa.me/${number}`;
}
const logoInput = options.logo || profile.logo;
let logoSource, logoName;
if (logoInput) {
  logoSource = resolve(
    options.logo ? process.cwd() : dirname(profilePath),
    logoInput,
  );
  await access(logoSource);
  const extension = extname(logoSource).toLowerCase();
  if (![".png", ".jpg", ".jpeg", ".webp", ".svg"].includes(extension))
    throw new Error("Logo must be PNG, JPG, WebP, or SVG.");
  logoName = `client-logo${extension}`;
  restaurant.logo = `assets/${logoName}`;
}
await mkdir(output, { recursive: true });
await cp(join(root, "dist"), output, { recursive: true });
if (logoSource) await cp(logoSource, join(output, "assets", logoName));
const override = {
  ...profile,
  restaurant,
  theme: { ...profile.theme, ...(accent ? { accent } : {}) },
};
delete override.slug;
delete override.logo;
delete override.name;
let script = await readFile(join(output, "content.js"), "utf8");
script += `\n\n// This independent client's settings. Edit here without changing the base template.\nconst CLIENT_PROFILE = ${JSON.stringify(override, null, 2)};\nfor (const [key, value] of Object.entries(CLIENT_PROFILE)) {\n  window.EMBER_CONTENT[key] = value && typeof value === 'object' && !Array.isArray(value)\n    ? { ...window.EMBER_CONTENT[key], ...value } : value;\n}\n`;
await writeFile(join(output, "content.js"), script);
const htmlEscape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const displayName = typeof name === "string" ? name : name.ar || name.en;
let html = await readFile(join(output, "index.html"), "utf8");
html = html
  .replaceAll("Ember &amp; Oak", htmlEscape(displayName))
  .replaceAll("Ember & Oak", htmlEscape(displayName));
if (restaurant.logo)
  html = html.replace('href="assets/favicon.svg"', `href="${restaurant.logo}"`);
if (override.theme?.paper)
  html = html.replace(
    'content="#f3f0e9"',
    `content="${htmlEscape(override.theme.paper)}"`,
  );
await writeFile(join(output, "index.html"), html);
await writeFile(join(output, "robots.txt"), "User-agent: *\nDisallow: /\n");
console.log(
  `Client demo ready: ${output}\nPreview: python -m http.server 4174 --bind 127.0.0.1 --directory "${output}"\nPublish the contents of this folder to a separate Cloudflare Pages project.`,
);
