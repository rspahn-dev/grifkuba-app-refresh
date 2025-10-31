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
   npm start
   ```
3. Launch on a device of your choice:
   - press `a` for Android emulator / device
   - press `i` for iOS simulator (macOS)
   - scan the QR code with Expo Go on a physical device

> **Note:** Because this project imports TypeScript modules from `../src`, Metro is configured to watch the workspace root. If you see module resolution issues, make sure the repository root remains adjacent to this `mobile` directory.

## Project Structure

- `App.tsx` – navigation container and shared theme values.
- `src/screens/HomeScreen.tsx` – wiki grid, partner links, and volunteer CTA.
- `src/screens/WikiDetailScreen.tsx` – detail view with outbound links and metadata.
- `metro.config.js` / `babel.config.js` – allow the mobile app to resolve shared code from `../src`.

## Next Steps

- Add tabs or drawers for tickets/contact flows once those web routes are solidified.
- Introduce offline caching once a real API replaces the mocked data.
- Style refinements: typography scaling, dark/light theming, animation polish.
