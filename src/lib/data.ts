import type { Wiki, Ticket, Article, Message } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { getLocalArticle } from './wiki-content';

// Mock data to simulate Firestore
const wikis: Wiki[] = [
  {
    id: 'lylat-wiki',
    name: 'Lylat Wiki',
    baseUrl: 'https://starfoxwiki.info',
    apiUrl: 'https://starfoxwiki.info/w/api.php',
    mainPage: 'Lylat_Wiki',
    logo: 'https://cdn.grifkuba.net/thumb/7/7e/Lylat-Wiki-logo.png/100px-Lylat-Wiki-logo.png',
  },
  {
    id: 'square-enix-wiki',
    name: 'Square Enix Wiki',
    baseUrl: 'https://wiki.seiwanetwork.org',
    apiUrl: 'https://wiki.seiwanetwork.org/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/a/a4/Square-Enix-Wiki-logo.png/100px-Square-Enix-Wiki-logo.png'
  },
  {
    id: 'final-fantasy-wiki',
    name: 'Final Fantasy Wiki',
    baseUrl: 'https://finalfantasywiki.com',
    apiUrl: 'https://finalfantasywiki.com/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/b/b1/Final-Fantasy-Wiki-logo0.png/100px-Final-Fantasy-Wiki-logo0.png'
  },
  {
    id: 'kolapedia',
    name: 'Kolapedia',
    baseUrl: 'https://carriefriendswiki.com',
    apiUrl: 'https://carriefriendswiki.com/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/0/0a/Kolapedia-logo.png/100px-Kolapedia-logo.png'
  },
  {
    id: 'crash-bandicoot-wiki',
    name: 'Crash Bandicoot Wiki',
    baseUrl: 'https://crashbandicootwiki.com',
    apiUrl: 'https://crashbandicootwiki.com/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/c/cf/Crash-Bandicoot-Wiki-logo.png/100px-Crash-Bandicoot-Wiki-logo.png'
  },
  {
    id: 'jiggywikki',
    name: 'JiggyWikki',
    baseUrl: 'https://banjokazooiewiki.com',
    apiUrl: 'https://banjokazooiewiki.com/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/b/b7/JiggyWikki-logo.png/100px-JiggyWikki-logo.png'
  },
  {
    id: 'rare-wiki',
    name: 'Rare Wiki',
    baseUrl: 'https://rarewiki.com',
    apiUrl: 'https://rarewiki.com/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/8/81/Rare-Wiki-logo.png/100px-Rare-Wiki-logo.png'
  },
  {
    id: 'saga-wiki',
    name: 'SaGa Wiki',
    baseUrl: 'https://sagawiki.org',
    apiUrl: 'https://sagawiki.org/w/api.php',
    mainPage: 'SaGa_Wiki',
    logo: 'https://cdn.grifkuba.net/thumb/5/50/Saga-Wiki-logo.png/100px-Saga-Wiki-logo.png'
  },
  {
    id: 'triforce-wiki',
    name: 'Triforce Wiki',
    baseUrl: 'https://triforcewiki.com',
    apiUrl: 'https://triforcewiki.com/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/e/e2/Triforce-Wiki-logo.png/100px-Triforce-Wiki-logo.png'
  },
  {
    id: 'wiki-of-mana',
    name: 'Wiki of Mana',
    baseUrl: 'https://wikiofmana.com',
    apiUrl: 'https://wikiofmana.com/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/b/b8/Wiki-of-Mana-logo.png/100px-Wiki-of-Mana-logo.png'
  },
  {
    id: 'arthur-wiki',
    name: 'Arthur Wiki',
    baseUrl: 'https://arthurwiki.com',
    apiUrl: 'https://arthurwiki.com/w/api.php',
    mainPage: 'Arthur_Wiki',
    logo: 'https://cdn.grifkuba.net/thumb/c/cb/Arthur-Wiki-logo.png/100px-Arthur-Wiki-logo.png'
  },
  {
    id: 'etrian-odyssey-wiki',
    name: 'Etrian Odyssey Wiki',
    baseUrl: 'https://etrianodyssey.wiki',
    apiUrl: 'https://etrianodyssey.wiki/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/c/c9/Etrian-Odyssey-Wiki-logo.png/100px-Etrian-Odyssey-Wiki-logo.png'
  },
  {
    id: 'hanna-barbera-wiki',
    name: 'Hanna-Barbera Wiki',
    baseUrl: 'https://hanna-barberawiki.com',
    apiUrl: 'https://hanna-barberawiki.com/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/0/05/Hanna-Barbera-Wiki-logo.png/100px-Hanna-Barbera-Wiki-logo.png'
  },
  {
    id: 'sanrio-wiki',
    name: 'Sanrio Wiki',
    baseUrl: 'https://sanriowiki.com',
    apiUrl: 'https://sanriowiki.com/w/api.php',
    mainPage: 'Sanrio_Wiki',
    logo: 'https://cdn.grifkuba.net/thumb/4/4c/Hello-Kitty-Sanrio-Wiki-logo.png/100px-Hello-Kitty-Sanrio-Wiki-logo.png'
  },
  {
    id: 'cartoon-network-wiki',
    name: 'Cartoon Network Wiki',
    baseUrl: 'https://cartoonnetworkwiki.com',
    apiUrl: 'https://cartoonnetworkwiki.com/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/5/53/Cartoon-Network-Wiki-logo.png/100px-Cartoon-Network-Wiki-logo.png'
  },
  {
    id: 'looney-tunes-wiki',
    name: 'Looney Tunes Wiki',
    baseUrl: 'https://looneytuneswiki.com',
    apiUrl: 'https://looneytuneswiki.com/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/e/e9/Looney-Tunes-Wiki-logo.png/100px-Looney-Tunes-Wiki-logo.png'
  },
  {
    id: 'mega-man-wiki',
    name: 'Mega Man Wiki',
    baseUrl: 'https://megamanwiki.com',
    apiUrl: 'https://megamanwiki.com/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/a/a2/Mega-Man-Wiki-logo.png/100px-Mega-Man-Wiki-logo.png'
  },
  {
    id: 'power-master-wiki',
    name: 'Power Master Wiki',
    baseUrl: 'https://powermasterwiki.com',
    apiUrl: 'https://powermasterwiki.com/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/d/d8/Power-Master-Wiki-logo.png/100px-Power-Master-Wiki-logo.png'
  },
  {
    id: 'spongebob-wiki',
    name: 'SpongeBob Wiki',
    baseUrl: 'https://spongebobwiki.org',
    apiUrl: 'https://spongebobwiki.org/w/api.php',
    mainPage: 'Main_Page',
    logo: 'https://cdn.grifkuba.net/thumb/d/d0/SpongeBob-Wiki-logo.png/100px-SpongeBob-Wiki-logo.png'
  },
];

let tickets: Ticket[] = [
    {
        id: '1',
        name: 'Valeria',
        email: 'valeria@example.com',
        subject: 'Cannot login to my account',
        message: 'I am trying to log in but my password is not working. I have tried resetting it multiple times but I am not receiving the reset email. This is very urgent as I need to access my files.',
        status: 'open',
        createdAt: new Date('2024-05-20T10:00:00Z'),
        keywords: ['login', 'password reset', 'account access'],
        urgency: 'high'
    },
    {
        id: '2',
        name: 'Alex',
        email: 'alex@example.com',
        subject: 'Feature Request: Dark Mode',
        message: 'It would be great if you could add a dark mode to the application. It would be easier on the eyes, especially at night.',
        status: 'in progress',
        createdAt: new Date('2024-05-19T14:30:00Z'),
        keywords: ['feature request', 'dark mode', 'UI'],
        urgency: 'low'
    },
    {
        id: '3',
        name: 'Sam',
        email: 'sam@example.com',
        subject: 'Billing issue',
        message: "I was charged twice for this month's subscription. Can you please look into it and refund the extra charge?",
        status: 'closed',
        createdAt: new Date('2024-05-18T09:00:00Z'),
        keywords: ['billing', 'subscription', 'refund'],
        urgency: 'medium'
    }
];

const leadImagePlaceholder = PlaceHolderImages.find(p => p.id === 'wiki-lead-image');

// Mock API functions
export async function getWikis(): Promise<Wiki[]> {
  // In a real app, this would fetch from Firestore
  return Promise.resolve(wikis);
}

export async function getWikiById(id: string): Promise<Wiki | undefined> {
  return Promise.resolve(wikis.find(w => w.id === id));
}

export async function getArticle(wikiId: string, articleSlug: string): Promise<Article> {
    const localArticle = getLocalArticle(wikiId, articleSlug);

    if (localArticle) {
        return localArticle;
    }

    // Fallback or error for articles not found locally
    const title = articleSlug.replace(/_/g, ' ');
    return {
        title: title,
        content: '',
        error: `Article "${title}" not found locally. Please provide the source content.`,
    };
}

export async function getTickets(): Promise<Ticket[]> {
  return Promise.resolve(tickets.sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime()));
}

export async function addTicket(ticket: Omit<Ticket, 'id' | 'createdAt' | 'status'> & { keywords?: string[]; urgency?: 'high' | 'medium' | 'low' }): Promise<Ticket> {
  const newTicket: Ticket = {
    id: (tickets.length + 1).toString(),
    ...ticket,
    status: 'open',
    createdAt: new Date(),
  };
  tickets = [newTicket, ...tickets];
  return newTicket;
}

export async function addMessage(message: Omit<Message, 'id' | 'createdAt'>): Promise<Message> {
  const newMessage: Message = {
    id: Date.now().toString(),
    ...message,
    createdAt: new Date(),
  };
  console.log('New message added (mock):', newMessage);
  return newMessage;
}
