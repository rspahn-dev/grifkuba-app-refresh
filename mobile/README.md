# Grifkuba Hub – Mobile

This Expo project ports the core “Sites We Host” experience from the Next.js web app into a native-friendly layout for iOS, Android, and the Expo Go client. The app pulls the same mock wiki data that backs the web experience, so content stays in sync without maintaining two data sources.

## Getting Started

1. Install dependencies:
   ```bash
   cd mobile
   npm install
   ```
2. Run the Expo development server:
   ```bash
   npm run start
   ```
3. Launch on a device of your choice:
   - press `a` for Android emulator / device
   - press `i` for iOS simulator (macOS)
   - scan the QR code with Expo Go on a physical device

> **Note:** Because this project imports TypeScript modules from `../src`, Metro watches the workspace root. If the default port is already taken, add `-- --port 8090` (or another open port) after the start command when you run it.

## Project Structure

- `App.tsx` – bottom-tab navigation hosting home, tickets, and socials stacks.
- `src/screens/HomeScreen.tsx` – wiki grid and volunteer CTA.
- `src/screens/WikiDetailScreen.tsx` – detail view with outbound links and metadata.
- `src/screens/TicketsScreen.tsx` – ticket list with refresh and quick status context.
- `src/screens/NewTicketScreen.tsx` – native form for opening new support tickets.
- `src/screens/SocialsScreen.tsx` – social icon cards plus an inline contact form tied to `addMessage`.
- `metro.config.js` / `babel.config.js` – allow the mobile app to resolve shared code from `../src`.

## Next Steps

- Expand the support area with ticket detail view/editing and message threads.
- Introduce offline caching once a real API replaces the mocked data.
- Style refinements: typography scaling, dark/light theming, animation polish.
