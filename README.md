# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Mobile Companion

Explore the `mobile/` directory for an Expo-powered React Native build that reuses the same mock wiki data, including native tabs for tickets and socials.

### Run the mobile app

1. `cd mobile`
2. `npm install`
3. `npm run start`
4. Open Expo Go (SDK 54 or newer) and scan the QR code, or press `a` / `i` to launch Android or iOS simulators.

> The `npm run start` script uses the modern `@expo/cli` in offline mode. If the default port is busy, append `-- --port 8090` (for example) when running the command.

## Related repositories

This is the active, canonical repository for Grifkuba. Two earlier repos were used during prototyping and are now superseded:

- [`grifkuba-app-old`](https://github.com/rspahn-dev/grifkuba-app-old) — original WebView-only mobile shell
- [`grifkuba-app-save`](https://github.com/rspahn-dev/grifkuba-app-save) — intermediate native mobile app iteration and scratch backups

Their functionality (wiki listing, wiki detail pages, volunteer sign-up, tickets, socials) now lives here: the website in `src/`, and the native mobile app in `mobile/`.
