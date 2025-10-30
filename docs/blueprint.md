# **App Name**: Grifkuba Hub

## Core Features:

- Wiki Sidebar: Dynamically display wikis from Firestore, with fixed links to Contact, Tickets, Discord, and Support.
- Modular Wiki Content: Fetch and render wiki content natively via MediaWiki API, handling navigation and display.
- Submit Ticket: Form to submit support tickets, stored in Firestore with status tracking.
- View Tickets: Display user-submitted tickets with their statuses from Firestore.
- Ticket Auto-Tagging (Optional): Use a tool (LLM) to auto-tag tickets based on keywords and urgency for better organization.
- Contact Form: Simple form to contact the team, storing submissions in Firestore.
- Community Links: Direct links to Grifkuba's Discord, Patreon, and Ko-fi pages.

## Style Guidelines:

- Background color: Dark charcoal gray (#333333) evokes the feeling of a retro arcade.
- Primary color: Teal (#40E0D0), chosen for its vibrancy and retro feel, reminiscent of old CRT screens.
- Accent color: Lavender (#E6E6FA) as a secondary highlight to complement the teal, creating visual interest and reinforcing the retro gaming aesthetic.
- Font: 'Source Code Pro', a monospace font, for a retro, code-like aesthetic. Note: currently only Google Fonts are supported.
- Pixel-style icons reminiscent of 8-bit games for navigation and actions.
- Responsive layout adapting to various screen sizes, with a collapsible sidebar on mobile.
- Subtle animations with pixelated effects for transitions and button presses.