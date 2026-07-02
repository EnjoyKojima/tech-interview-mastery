# Tech Interview Mastery

Hono + TSX SSR on Cloudflare Workers. Progress is stored in Cloudflare D1.

## Commands

```sh
pnpm dev
pnpm check
pnpm run deploy
```

## Local setup

```sh
cp .dev.vars.example .dev.vars
pnpm db:migrate:local
pnpm dev
```

## Production setup

```sh
pnpm db:migrate:remote
printf '<your-username>' | pnpm exec wrangler secret put BASIC_AUTH_USERNAME
printf '<your-password>' | pnpm exec wrangler secret put BASIC_AUTH_PASSWORD
pnpm run deploy
```
