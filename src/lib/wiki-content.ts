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
        <div style="border:3pt solid #194EC8;width:100%;padding:1pt;background:#69AEFF;">
          <div style="width:100%;">
            <div style="background:#194EC8;color:#ffffff;text-align:center;">Welcome to <big>Mega Man Wiki!</big></div>
            <div style="background:#DBECFF; padding: 1em;"> We have many articles on the ''Mega Man'' franchise and counting! This wiki is predominantly divided into seven series, including additional material from crossovers and other sources.</div>
          </div>
        </div>

        <div style="border:3px solid #194EC8;min-width:320px;width:90%;padding:1px;margin:4pt auto;background:#69AEFF;">
          <div style="border:3px solid #194EC8;min-width:320px;width:50%;padding:1px;margin:4pt auto;background:#69AEFF;">
            <div style="width:100%;text-align:center;margin:auto;background:#DBECFF;">
              <div style="width:33%;vertical-align:top;display:inline-block;padding:1em;"><a href="/wiki/mega-man-wiki/Classic_series"><img src="https://megamanwiki.com/images/thumb/1/11/Wiki_-_Classic_Icon.png/104px-Wiki_-_Classic_Icon.png" alt="Classic series icon" /><br/><big>Classic</big></a></div>
              <div style="width:33%;vertical-align:top;display:inline-block;padding:1em;"><a href="/wiki/mega-man-wiki/X_series"><img src="https://megamanwiki.com/images/thumb/7/73/Wiki_-_X_Icon.png/104px-Wiki_-_X_Icon.png" alt="X series icon" /><br/><big>X</big></a></div>
              <div style="width:33%;vertical-align:top;display:inline-block;padding:1em;"><a href="/wiki/mega-man-wiki/Zero_series"><img src="https://megamanwiki.com/images/thumb/6/6a/Wiki_-_Zero_Icon.png/104px-Wiki_-_Zero_Icon.png" alt="Zero series icon" /><br/><big>Zero</big></a></div>
              <div style="vertical-align:top;display:inline-block;padding:1em;"><a href="/wiki/mega-man-wiki/ZX_series"><img src="https://megamanwiki.com/images/thumb/7/7f/Wiki_-_ZX_Icon.png/104px-Wiki_-_ZX_Icon.png" alt="ZX series icon" /><br/><big>ZX</big></a></div>
              <div style="vertical-align:top;display:inline-block;padding:1em;"><a href="/wiki/mega-man-wiki/Legends_series"><img src="https://megamanwiki.com/images/thumb/a/a3/Wiki_-_Legends_Icon.png/104px-Wiki_-_Legends_Icon.png" alt="Legends series icon" /><br/><big>Legends</big></a></div>
              <div style="vertical-align:top;display:inline-block;padding:1em;"><a href="/wiki/mega-man-wiki/Battle_Network_series"><img src="https://megamanwiki.com/images/thumb/1/19/Wiki_-_Battle_Network_Icon.png/104px-Wiki_-_Battle_Network_Icon.png" alt="Battle Network series icon" /><br/><big>Battle Network</big></a></div>
              <div style="vertical-align:top;display:inline-block;padding:1em;"><a href="/wiki/mega-man-wiki/Star_Force_series"><img src="https://megamanwiki.com/images/thumb/3/38/Wiki_-_Star_Force_Icon.png/104px-Wiki_-_Star_Force_Icon.png" alt="Star Force series icon" /><br/><big>Star Force</big></a></div>
              <div style="vertical-align:top;display:inline-block;padding:1em;"><a href="/wiki/mega-man-wiki/Crossover"><img src="https://megamanwiki.com/images/thumb/f/f0/Wiki_-_Other_Games_Icon.png/104px-Wiki_-_Other_Games_Icon.png" alt="Crossover icon" /><br/><big>Crossovers</big></a></div>
              <div style="vertical-align:top;display:inline-block;padding:1em;"><a href="/wiki/mega-man-wiki/Other_media"><img src="https://megamanwiki.com/images/thumb/a/a2/Wiki_-_Other_Media_Icon.png/104px-Wiki_-_Other_Media_Icon.png" alt="Other media icon" /><br/><big>Other</big></a></div>
            </div>
          </div>
        </div>

        <p>Note: The complex wikitext for 'Featured Article', 'Featured Image', and 'Did you know?' sections has been omitted as it requires template expansion which is not supported in this context.</p>
      `
    }
  }
};

export function getLocalArticle(wikiId: string, articleSlug: string): Article | undefined {
  return localArticles[wikiId]?.[articleSlug];
}
