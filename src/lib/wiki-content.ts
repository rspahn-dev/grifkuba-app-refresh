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
    },
    "Classic_series": {
        "title": "Classic series",
        "content": `
            <p>The <strong>Classic series</strong> is a fan-made term referring to media set in the fictional universe of the original Mega Man game, released in 1987 for the Nintendo Entertainment System and Famicom. It is the first series of the universe's original timeline, set in the year 20XX, chronicling the adventures of the robot Mega Man and his battles to stop the evil Dr. Wily.</p>
            <p>In official Capcom material, this series is often called simply <em>Mega Man</em> or the <em>Mega Man series</em>, differentiating it from the other series by omitting any further identifiers. It is only rarely referred to as <em>Mega Man Classic</em>, using the fan-made name.</p>
            
            <h2>Timeline</h2>
            <h3>Prologue</h3>
            <p>Around the year 200X (the first decade of the 21st century), the technology of robots advanced. Two prodigious young scientists, Thomas Light and Albert Wily, met while attending the Robot Institute of Technology. However, a rift formed between the two when Dr. Light opposed Dr. Wily's controversial research. Dr. Light went on to build robots for the good of mankind. He created two siblings named Rock and Roll to assist him at his lab, along with at least six other robots called Robot Masters to operate in industrial capacities. However, Dr. Wily had more selfish plans for his knowledge of robotics.</p>
            
            <h3>Mega Man</h3>
            <p>One day, Dr. Wily kidnapped Dr. Light's Robot Masters and reprogrammed them into his servants to take over the world. Rock volunteered to be converted into a fighting robot to stop Wily's plot, and Dr. Light agreed, turning him into Mega Man. After defeating all the Robot Masters and infiltrating Dr. Wily's hideout, Mega Man destroyed his work and stopped his plans. Wily escaped and disappeared, while Mega Man returned home victorious.</p>
            
            <h3>Mega Man 2</h3>
            <p>One year after his previous defeat, Dr. Wily returns with eight of his own new Robot Masters to take over the world again. He challenges Mega Man, who heads out to fight these new opponents. Mega Man defeats Dr. Wily and his Robot Masters again. The doctor uses holograms in an attempt to trick Mega Man into believing he was an Alien all along, but this fails. Mega Man departs, having proved Wily wrong once again.</p>

            <h3>Mega Man: Dr. Wily's Revenge</h3>
            <p>Set after <em>Mega Man 2</em>. Despite his crushing defeat, Dr. Wily quickly took his revenge by reprogramming Dr. Light's industrial Robot Masters again. Mega Man set off to set them right once more. After facing Dr. Wily's own robots, including the new Mega Man Killer called Enker, Mega Man defeated Wily and put a stop to his plans.</p>
            
            <h3>Mega Man 3</h3>
            <p>The year is 20XX (further in the 21st century). Having apparently learned his lesson, Dr. Wily forms a truce with Dr. Light. Together they build Gamma, a giant peace-keeping robot, and plan to power him using eight Energy Elements discovered on other planets. However, the eight Robot Masters sent to retrieve them go haywire, and so Mega Man is sent to stop their madness. Meanwhile, a mysterious robot called Proto Man begins hunting Mega Man.</p>
            <p>In the end, Dr. Wily reveals his true evil intentions and hijacks Gamma, planning to use him to conquer the world. Mega Man destroys Gamma, but the base begins to collapse. Proto Man arrives and saves Mega Man, but Dr. Wily appears to be lost in the rubble.</p>

            <h3>Mega Man II (Game Boy)</h3>
            <p>Set after <em>Mega Man 3</em>. Frustrated by his constant defeats, Dr. Wily steals the experimental Time Skimmer in hopes of traveling to the past to change history. Mega Man heads out to fight Wily's Robot Masters and stop him before it's too late. However, Wily discovered that the Time Skipper could only go forward in time and back to the present; changing plans, he kidnapped Mega Man from an alternate future and converted him into a twisted robot named Quint. Mega Man fights Quint, defeats Wily in space, and destroys the Time Skimmer.</p>
            
            <h2>Characters</h2>
            <ul>
                <li>Mega Man</li>
                <li>Dr. Light</li>
                <li>Dr. Wily</li>
                <li>Proto Man</li>
                <li>Rush</li>
                <li>Bass</li>
                <li>Treble</li>
                <li>Roll</li>
                <li>Dr. Cossack</li>
                <li>Kalinka</li>
                <li>Duo</li>
            </ul>

            <h2>Other Media</h2>
            <ul>
                <li>Captain N: The Game Master</li>
                <li>Mega Man (animated series)</li>
                <li>Archie Comics</li>
                <li>Fully Charged</li>
                <li>Nintendo Power Magazines</li>
            </ul>
        `
    }
  }
};

export function getLocalArticle(wikiId: string, articleSlug: string): Article | undefined {
  return localArticles[wikiId]?.[articleSlug];
}
