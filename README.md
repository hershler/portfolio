# Rachel Rubin Hershler — Portfolio

Personal site: semantic HTML, sitemap, robots.txt, Open Graph, and Person structured data.

- GitHub: https://github.com/hershler/portfolio
- Live site (after Netlify): https://rachel-rubin-hershler.netlify.app

## Run locally

```bash
npm run dev
```

Open http://localhost:3000

## Deploy on Netlify

1. Sign in to [Netlify](https://app.netlify.com) with GitHub.
2. **Add new site → Import an existing project** and choose `hershler/portfolio`.
3. Leave the Next.js defaults (build command `npm run build`).
4. Before the first deploy, open **Site configuration → Domain management → Options → Change site name** and set it to `rachel-rubin-hershler`.
5. Add this environment variable in Netlify:
   ```
   NEXT_PUBLIC_SITE_URL=https://rachel-rubin-hershler.netlify.app
   ```
6. Trigger a redeploy so sitemap and canonical URLs use the live address.

## Make it show up on Google

1. In [Google Search Console](https://search.google.com/search-console), add the live URL, verify, and submit `https://rachel-rubin-hershler.netlify.app/sitemap.xml`.
2. Optional: connect a custom domain (`rachelhershler.com` or similar) — a personal name domain is clearer than a subdomain.

Google will not list a site that only runs on your laptop. Indexing usually takes days after a public deploy and sitemap submit.
