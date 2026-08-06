# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Grifkuba Hub — a Next.js web app (originally scaffolded in Firebase Studio) for the Grifkuba wiki-hosting network. It lists the wikis Grifkuba hosts, renders wiki articles, and handles support tickets and contact messages. A companion Expo/React Native app in `mobile/` reuses the same data layer for a native experience.

## Commands

Run from the repo root (web app):

```bash
npm run dev         # Next.js dev server on port 9002 (Turbopack)
npm run build        # Production build (NODE_ENV=production)
npm run start         # Serve the production build
npm run lint          # next lint
npm run typecheck      # tsc --noEmit
npm run genkit:dev      # Start Genkit dev UI against src/ai/dev.ts
npm run genkit:watch    # Same, with file watching
```

There is no test suite/runner configured in this repo.

Mobile app (from `mobile/`):

```bash
cd mobile
npm install
npm run start   # Expo CLI, offline mode; append `-- --port 8090` if 8081 is busy
npm run lint     # eslint over mobile/
```

## Architecture

### Data layer is mocked, not Firebase — despite the name

`src/lib/data.ts` exposes `getWikis`, `getWikiById`, `getArticle`, `getTickets`, `addTicket`, `addMessage`. These are async functions with comments like "In a real app, this would fetch from Firestore" — but they currently operate on in-memory arrays (`wikis`, `tickets`) defined in that same file. `firebase` is a dependency and `apphosting.yaml` configures Firebase App Hosting, but there is no Firestore/Auth client wired into the app code yet. Treat `src/lib/data.ts` as the single seam to swap in real persistence later — all pages/actions go through it, not through Firebase directly.

Wiki article content is similarly hardcoded: `src/lib/wiki-content.ts` contains a `localArticles` map of hand-authored HTML strings keyed by `wikiId` → article slug, despite the app's original concept (see `docs/blueprint.md`) of fetching live via the MediaWiki API. `getArticle()` in `data.ts` looks up `getLocalArticle()` first and returns an `error` field on the `Article` if nothing is found locally — new wiki content needs to be added to this map by hand.

### App Router structure (`src/app`)

- `page.tsx` — home page: about/mission blurb, grid of hosted wikis (from `getWikis()`), partners/volunteer sections.
- `wikis/page.tsx` — wiki listing.
- `wiki/[wikiId]/[...article]/page.tsx` — dynamic article viewer; resolves via `getWikiById` + `getArticle`, calls `notFound()` if the wiki id doesn't exist.
- `tickets/page.tsx` — table of submitted support tickets (status + AI-derived urgency/keywords).
- `tickets/new/page.tsx` + `tickets/new/actions.ts` — ticket submission form; the server action validates with Zod, runs the ticket through the Genkit auto-tag flow, then calls `addTicket()` and redirects to `/tickets`.
- `contact/page.tsx` + `contact/actions.ts` — contact form server action, validates with Zod and calls `addMessage()`.
- `layout.tsx` — root layout: forces dark theme (`className="dark"` on `<html>`), loads the "Source Code Pro" monospace font, registers a service worker (`/sw.js`).
- `template.tsx` — wraps every route in the shadcn `SidebarProvider`/`Sidebar` shell (`MainSidebar` in `src/components/layout`); this is where the collapsible nav lives, not in `layout.tsx`.

### AI (Genkit)

`src/ai/genkit.ts` defines the shared `ai` instance (`googleAI()` plugin, `gemini-2.5-flash`). `src/ai/flows/auto-tag-support-tickets.ts` is a Genkit flow (`ai.definePrompt` + `ai.defineFlow`) that takes a ticket subject/message and returns extracted keywords plus an urgency level (`high`/`medium`/`low`); it's invoked from `tickets/new/actions.ts` before a ticket is persisted. `src/ai/dev.ts` is the Genkit CLI entrypoint (loaded by the `genkit:dev`/`genkit:watch` scripts) and just imports the flow files that should be registered for local dev — new flows need to be imported there too.

### UI components

`src/components/ui/*` is the shadcn/ui set (Radix primitives + `class-variance-authority` + Tailwind), configured via `components.json` (aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`). Prefer composing from these existing primitives over adding new UI libraries. `src/components/layout/` holds app-specific chrome (`MainSidebar`, `GrifkubaLogo`).

Styling: Tailwind (`tailwind.config.ts`) with the retro/CRT theme described in `docs/blueprint.md` — dark charcoal background, teal primary, lavender accent, pixel-style icons, monospace font. `next.config.ts` allow-lists remote image hosts (`placehold.co`, `images.unsplash.com`, `picsum.photos`, `cdn.grifkuba.net`, and per-wiki CDNs) via `images.remotePatterns` — adding a new wiki with a logo/image on a new domain requires adding it here.

Note: `next.config.ts` sets `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true`, so `next build` will not fail on type or lint errors — run `npm run typecheck` and `npm run lint` explicitly.

### Mobile app (`mobile/`)

A separate Expo/React Native project that imports shared logic straight from the web app's `../src` (see `metro.config.js` / `babel.config.js` for the path resolution), so the same mock wiki/ticket data backs both apps without duplication. Screens live in `mobile/src/screens/` (`HomeScreen`, `WikiDetailScreen`, `TicketsScreen`, `NewTicketScreen`, `SocialsScreen`) and are wired up via bottom-tab navigation in `mobile/App.tsx`. It has its own `package.json`/`node_modules` and is not part of the root npm workspace — install and run it independently from `mobile/`.

### Firebase Studio / IDX environment

`.idx/dev.nix` configures the Firebase Studio (Nix) workspace: Node 20, a Firebase emulator service (currently `detect = false`, since the app targets prod backends), and a preview that runs `npm run dev` on IDX's assigned `$PORT`. This is only relevant when running inside Firebase Studio, not for local/CI use.
