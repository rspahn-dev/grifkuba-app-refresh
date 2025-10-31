
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
  },
  "crash-bandicoot-wiki": {
    "Main_Page": {
      "title": "Crash Bandicoot Wiki",
      "description": "An online encyclopedia about Crash Bandicoot.",
      "content": `
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div class="lg:col-span-3 space-y-4">
            <div class="border border-border bg-card p-4 rounded-lg">
                <h2 class="text-2xl font-bold text-primary mb-2">Featured article</h2>
                <div class="flex flex-col sm:flex-row gap-4">
                    <img alt="Crash Nitro Kart PS2 cover.jpg" src="https://cdn.crashbandicootwiki.com/thumb/c/c0/Crash_Nitro_Kart_PS2_cover.jpg/84px-Crash_Nitro_Kart_PS2_cover.jpg" width="84" height="120" class="rounded-md border border-border" />
                    <p><i><b>Crash Nitro Kart</b></i> is a racing game for the PlayStation 2, Nintendo GameCube and Xbox. The game was developed by Vicarious Visions and published by Universal Interactive in 2003. <i>Crash Nitro Kart</i> is an indirect follow up to <i>Crash Team Racing</i>. In 2007, PlayStation 2 version was re-released as part of the three-disc <i>Crash Bandicoot Action Pack</i> compilation (alongside <i>Crash Twinsanity</i> and <i>Crash Tag Team Racing</i>). The game has a story, which is explored in Adventure mode. <i>Crash Nitro Kart</i> was the last <i>Crash Bandicoot</i> game released under the Universal Interactive label, which parent company Vivendi would scrap after the game's release, in favor of their new company, Vivendi Universal Games. It is the first <i>Crash Bandicoot</i> game to have full-motion video cutscenes. Content from <i>Crash Nitro Kart</i> would later be used for <i>Crash Team Racing Nitro-Fueled</i>.</p>
                </div>
            </div>
            <div class="border border-border bg-card p-4 rounded-lg">
                <h2 class="text-2xl font-bold text-primary mb-2">Did you know?</h2>
                <div class="flex flex-col sm:flex-row gap-4">
                    <img alt="Traveller's Tales Oxford Studios.jpg" src="https://cdn.crashbandicootwiki.com/thumb/8/80/Traveller%27s_Tales_Oxford_Studios.jpg/120px-Traveller%27s_Tales_Oxford_Studios.jpg" width="120" height="90" class="rounded-md border border-border" />
                    <ul>
                        <li>During <i><b>Crash Team Racing</b></i>'s development, Crescent Island, a course from <i>Diddy Kong Racing</i>, was recreated to see if the PlayStation could handle similarly sized courses.</li>
                        <li><b>Mr. Crumb</b>, who recently reappeared in <i>Crash Bandicoot: On the Run!</i>, originated as the villain of an obscure Tiger Electronics handheld simply titled <i>Crash Bandicoot</i>.</li>
                        <li><b>Traveller's Tales</b> <i>(pictured)</i> attempted to create a racing game twice, <i>Crash Nitro Kart</i> and <i>Crash Tag Team Racing</i>, but different game developers would later work on each title instead.</li>
                        <li><b>Crash Bandicoot</b> was called <i>Willy the Wombat</i> during early stages of the first game's development.</li>
                    </ul>
                </div>
            </div>
          </div>
          <div class="lg:col-span-2 space-y-4">
            <div class="border border-border bg-card p-4 rounded-lg">
                <h2 class="text-2xl font-bold text-primary mb-2">News</h2>
                <img alt="Crash Team Rumble Promo.jpg" src="https://cdn.crashbandicootwiki.com/thumb/3/34/Crash_Team_Rumble_Promo.jpg/180px-Crash_Team_Rumble_Promo.jpg" width="180" height="101" class="rounded-md border border-border mb-2" />
                <ul>
                    <li><b>December 19, 2022</b>: The shutdown of <i><b>Crash Bandicoot: On the Run!</b></i> on February 16, 2023 is announced across the game's social media accounts.</li>
                    <li><b>December 8, 2022</b>: <i><b>Crash Team Rumble</b></i> is unveiled at The Game Awards for release in 2023 on the PlayStation 4, PlayStation 5, Xbox Series X|S, and the Xbox One.</li>
                    <li><b>January 18, 2022</b>: Microsoft has announced their deal to acquire Activision for $69 billion dollars and is set to obtain complete ownership of the <b><i>Crash Bandicoot</i> franchise</b> on July 2023.</li>
                    <li><b>March 25, 2021</b>: <i><b>Crash Bandicoot: On the Run!</b></i> has been released for iOS and Android devices.</li>
                </ul>
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

    