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
  },
  "mega-man-wiki": {
    "Main_Page": {
      title: "Mega Man Wiki",
      description: "We have many articles on the Mega Man franchise and counting! This wiki is predominantly divided into seven series, including additional material from crossovers and other sources.",
      content: `
        <div class="border-2 border-primary/30 w-full p-px bg-card mb-4 rounded-lg shadow-md">
          <div class="bg-primary/10 text-primary text-center p-2 font-bold text-lg rounded-t-md">Welcome to Mega Man Wiki!</div>
          <div class="p-4">We have many articles on the ''Mega Man'' franchise and counting! This wiki is predominantly divided into seven series, including additional material from crossovers and other sources.</div>
        </div>

        <div class="border border-border w-full md:w-3/4 mx-auto p-1 bg-card mb-4 rounded-lg">
          <div class="p-4">
              <h2 class="text-xl font-bold text-center mb-4 text-primary">Game Series</h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                  <div><a href="/wiki/mega-man-wiki/Classic_series" class="font-bold">Classic</a></div>
                  <div><a href="/wiki/mega-man-wiki/X_series" class="font-bold">X</a></div>
                  <div><a href="/wiki/mega-man-wiki/Zero_series" class="font-bold">Zero</a></div>
                  <div><a href="/wiki/mega-man-wiki/ZX_series" class="font-bold">ZX</a></div>
                  <div><a href="/wiki/mega-man-wiki/Legends_series" class="font-bold">Legends</a></div>
                  <div><a href="/wiki/mega-man-wiki/Battle_Network_series" class="font-bold">Battle Network</a></div>
                  <div><a href="/wiki/mega-man-wiki/Star_Force_series" class="font-bold">Star Force</a></div>
                  <div><a href="/wiki/mega-man-wiki/Crossover" class="font-bold">Crossovers</a></div>
                  <div><a href="/wiki/mega-man-wiki/Other_media" class="font-bold">Other</a></div>
              </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="border border-border bg-card p-px rounded-lg">
                <h3 class="bg-muted text-foreground text-center p-2 font-bold rounded-t-md">Featured Article</h3>
                <div class="p-4 min-h-[100px]">
                    <p><i>Content to be added later.</i></p>
                </div>
            </div>
            <div class="border border-border bg-card p-px rounded-lg">
                <h3 class="bg-muted text-foreground text-center p-2 font-bold rounded-t-md">Main Areas of the Wiki</h3>
                <div class="p-4">
                    <ul>
                      <li><a href="/wiki/mega-man-wiki/Games">Games</a></li>
                      <li><a href="/wiki/mega-man-wiki/Characters">Characters</a></li>
                      <li><a href="/wiki/mega-man-wiki/Weapons">Weapons</a></li>
                      <li><a href="/wiki/mega-man-wiki/Stages">Stages</a></li>
                      <li><a href="/wiki/mega-man-wiki/Items">Items</a></li>
                      <li><a href="/wiki/mega-man-wiki/Series">Series</a></li>
                    </ul>
                </div>
            </div>
            <div class="border border-border bg-card p-px rounded-lg">
                <h3 class="bg-muted text-foreground text-center p-2 font-bold rounded-t-md">Featured Image</h3>
                <div class="p-4 min-h-[100px]">
                    <p><i>Content to be added later.</i></p>
                </div>
            </div>
            <div class="border border-border bg-card p-px rounded-lg">
                <h3 class="bg-muted text-foreground text-center p-2 font-bold rounded-t-md">Did you know?</h3>
                <div class="p-4 min-h-[100px]">
                    <p><i>Content to be added later.</i></p>
                </div>
            </div>
        </div>
      `
    }
  }
};

export function getLocalArticle(wikiId: string, articleSlug: string): Article | undefined {
  return localArticles[wikiId]?.[articleSlug];
}
