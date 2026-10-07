# Form → Email setup (Cloudflare Pages)

The Contact form, **Get a Quote** and **Free Endpoint Assessment** forms send their data to
`/api/contact` (`functions/api/contact.ts`). That Pages Function logs in to the
`info@enduraq.in` mailbox over SMTP (`smtpout.secureserver.net`, port 465 SSL) and emails the
submission to `info@enduraq.in`. The sender's address is set as **Reply-To**, so you can just hit
Reply in your mailbox.

## 1. Cloudflare Pages build settings

| Setting | Value |
|---|---|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20 or newer (env var `NODE_VERSION=20`) |

The `functions/` folder is picked up automatically. `wrangler.toml` already enables the
`nodejs_compat` flag that the SMTP client needs.

## 2. Add the mailbox password as a secret

Cloudflare dashboard → your Pages project → **Settings → Variables and Secrets** → add
(Production, and Preview if you want it there), type **Secret**:

| Name | Value |
|---|---|
| `SMTP_PASS` | the password of info@enduraq.in |

Or from a terminal: `npx wrangler pages secret put SMTP_PASS --project-name enduraq-technologies`

Then redeploy once so the secret takes effect. **Never put the password in the code or in Git.**

Optional overrides (defaults are already correct): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `MAIL_TO`.

## 3. Local testing

```bash
cp .dev.vars.example .dev.vars   # then put the real password in it
npm run pages:dev                # builds the site and serves it with the function
```

`npm run dev` (plain Next.js) does not run the function, so forms will show an error there — use
`pages:dev` to test the email flow.

## Notes
- Port 25 is blocked by Cloudflare, so port 465 (SSL) is used.
- Spam protection: hidden honeypot field, same-origin check, input length limits and header-injection
  protection. For heavier traffic, add Cloudflare Turnstile.
- If emails don't arrive: check the Pages project's **Functions → Real-time logs**, confirm `SMTP_PASS`
  is set, and check the Spam/Junk folder of info@enduraq.in.
