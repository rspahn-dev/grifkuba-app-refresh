import type { Wiki, Ticket, Article, Message } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';
import wtf from 'wtf_wikipedia';

// Mock data to simulate Firestore
const wikis: Wiki[] = [
  {
    id: 'lylat-wiki',
    name: 'Lylat Wiki',
    baseUrl: 'https://starfoxwiki.info',
    apiUrl: 'https://starfoxwiki.info/api.php',
  },
  {
    id: 'pikipedia',
    name: 'Pikipedia',
    baseUrl: 'https://www.pikminwiki.com',
    apiUrl: 'https://www.pikminwiki.com/api.php',
  },
  {
    id: 'ssb-wiki',
    name: 'Super Smash Bros. Wiki',
    baseUrl: 'https://www.ssbwiki.com',
    apiUrl: 'https://www.ssbwiki.com/api.php',
  },
  {
    id: 'inkipedia',
    name: 'Inkipedia',
    baseUrl: 'https://splatoonwiki.org',
    apiUrl: 'https://splatoonwiki.org/api.php',
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

// Helper function to convert relative URLs to absolute URLs
function convertToAbsoluteUrls(html: string, baseUrl: string): string {
    return html.replace(/href="\/wiki\//g, `href="/wiki/${baseUrl.split('/').pop()?.split('.')[0]}/`);
}

export async function getArticle(wikiId: string, articleSlug: string): Promise<Article | null> {
    const wiki = await getWikiById(wikiId);
    if (!wiki) return null;

    const params = new URLSearchParams({
        action: 'parse',
        page: articleSlug,
        prop: 'wikitext|images',
        format: 'json',
        origin: '*', // Necessary for CORS
    });

    try {
        const response = await fetch(`${wiki.apiUrl}?${params.toString()}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        if (data.error) {
            console.error('API Error:', data.error.info);
            // Return a simple article indicating the page doesn't exist.
            return {
                title: articleSlug.replace(/_/g, ' '),
                content: `<p>This page does not exist on ${wiki.name}.</p>`,
            };
        }

        const wikitext = data.parse.wikitext['*'];
        const doc = wtf(wikitext);
        let htmlContent = doc.text();

        // Make links relative to our app structure
        htmlContent = htmlContent.replace(new RegExp(`href="/`, 'g'), `href="${wiki.baseUrl}/`);
        htmlContent = htmlContent.replace(new RegExp(`href="${wiki.baseUrl}/wiki/`, 'g'), `href="/wiki/${wiki.id}/`);


        const leadImage = doc.image()?.url();

        return {
            title: data.parse.title,
            leadImage: leadImage,
            leadImageHint: leadImage ? 'gameplay screenshot' : undefined,
            content: htmlContent,
        };

    } catch (error) {
        console.error("Failed to fetch article:", error);
        // Fallback to mock data on error
        const title = articleSlug.replace(/_/g, ' ');
        const dynamicImageUrl = `https://picsum.photos/seed/${wikiId}-${articleSlug}/800/400`;
        return {
            title: title,
            leadImage: dynamicImageUrl,
            leadImageHint: leadImagePlaceholder?.imageHint,
            content: `
                <p>Could not fetch article content for <strong>${title}</strong> from ${wiki.name}. Displaying mock content instead.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.</p>
            `
        }
    }
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
