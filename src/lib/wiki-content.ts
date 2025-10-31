import type { Article } from './types';

const localArticles: { [wikiId: string]: { [articleSlug: string]: Article } } = {
  "lylat-wiki": {
    "Lylat_Wiki": {
      title: "Welcome to Lylat Wiki",
      description: "The definitive Star Fox resource.",
      leadImage: "https://picsum.photos/seed/lylat-wiki-main/800/400",
      leadImageHint: "space battle fighters",
      content: `
        <h1>Welcome to Lylat Wiki</h1>
        <p>This is placeholder content for the Lylat Wiki main page. Please provide the actual source content to replace this.</p>
        <p>Lylat Wiki is a collaborative encyclopedia about the Star Fox series, which anyone can edit. We are the definitive Star Fox resource.</p>
        <h2>Getting Started</h2>
        <p>To contribute, simply find a page that needs editing and click the edit button. You can also create new pages to expand our coverage of the Star Fox universe.</p>
        <ul>
            <li>Characters</li>
            <li>Games</li>
            <li>Locations</li>
        </ul>
      `
    }
  }
};

export function getLocalArticle(wikiId: string, articleSlug: string): Article | undefined {
  return localArticles[wikiId]?.[articleSlug];
}
