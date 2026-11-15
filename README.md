# DocsGuard landing page

English app landing page built with Next.js App Router and static export. The visual direction takes inspiration from Cal AI: centered typography, prominent app previews, simple feature sections, and download calls to action. All product imagery is included in `public/assets/`.

## Development

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
```

Deploy `out/` to a static host. SEO includes server-rendered content, English metadata, canonical URL, Open Graph and Twitter cards, SoftwareApplication structured data, robots.txt, and sitemap.xml.

Update the origin in `app/layout.js`, `app/sitemap.js`, and `app/robots.js` when switching to a custom domain. Public, crawlable hosting is required for search traffic. Submit `/sitemap.xml` in Google Search Console after publication.

No ratings, reviews, download counts, or free-trial claims are included. Review feature availability and pricing against the current App Store listing before a public launch.

## GitHub

The repository root is this `docsguard-site` directory. Push from here:

```sh
git push -u origin main
```

Remote: `git@github.com:wahyudwi99/docs-guard-landing-page.git`.

Node.js 20.9 or later is required. Install dependencies with `npm ci` on a fresh checkout. Build output, local environment files, and local Sites hosting configuration are excluded from Git.
