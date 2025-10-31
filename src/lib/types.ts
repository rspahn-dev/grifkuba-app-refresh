export type Wiki = {
  id: string;
  name: string;
  baseUrl: string;
  apiUrl: string;
  mainPage: string;
  logo?: string;
};

export type Ticket = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'open' | 'in progress' | 'closed';
  createdAt: Date;
  keywords?: string[];
  urgency?: 'high' | 'medium' | 'low';
};

export type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
};

export type Article = {
    title: string;
    description?: string;
    leadImage?: string;
    leadImageHint?: string;
    content: string;
    error?: string;
}
