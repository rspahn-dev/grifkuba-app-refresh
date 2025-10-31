import type { Wiki, Ticket, Article, Message } from '@/lib/types';
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
  },
  {
    id: 'pikipedia',
    name: 'Pikipedia',
    baseUrl: 'https://www.pikminwiki.com',
    apiUrl: 'https://www.pikminwiki.com/w/api.php',
    mainPage: 'Main_Page',
  },
  {
    id: 'ssb-wiki',
    name: 'Super Smash Bros. Wiki',
    baseUrl: 'https://www.ssbwiki.com',
    apiUrl: 'https://www.ssbwiki.com/api.php',
    mainPage: 'Main_Page',
  },
  {
    id: 'inkipedia',
    name: 'Inkipedia',
    baseUrl: 'https://splatoonwiki.org',
    apiUrl: 'https://splatoonwiki.org/w/api.php',
    mainPage: 'Main_Page',
  },
  {
    id: 'mega-man-wiki',
    name: 'Mega Man Wiki',
    baseUrl: 'https://megamanwiki.com',
    apiUrl: 'https://megamanwiki.com/w/api.php',
    mainPage: 'Main_Page',
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
