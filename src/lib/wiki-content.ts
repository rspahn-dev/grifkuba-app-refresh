
import type { Article } from './types';

const localArticles: { [wikiId: string]: { [articleSlug: string]: Article } } = {
  "lylat-wiki": {
    "Lylat_Wiki": {
      title: "Lylat Wiki",
      description: "The definitive Star Fox resource.",
      leadImage: "https://cdn.starfoxwiki.info/thumb/9/99/Fox_McCloud_SF0_artwork.png/80px-Fox_McCloud_SF0_artwork.png",
      leadImageHint: "Fox McCloud",
      content: `
        <div class="space-y-4">
          <div class="bg-card border border-border rounded-lg p-4">
            <div class="grid md:grid-cols-[auto_1fr] gap-4 items-center">
              <img src="https://cdn.starfoxwiki.info/thumb/9/99/Fox_McCloud_SF0_artwork.png/80px-Fox_McCloud_SF0_artwork.png" alt="Fox McCloud" class="mx-auto" />
              <div>
                <h2 class="text-2xl font-bold text-primary mb-2">Welcome to the one and only Lylat Wiki!</h2>
                <p>We're a comprehensive <i>Star Fox</i> wiki that aims to cover the entire <i>Star Fox</i> series. Interested in helping out? Create an account and start editing!</p>
                <hr class="my-2 border-border" />
                <p>We have <b>459 articles</b> of <b>4,327 pages</b> and <b>1,516 files</b>.</p>
              </div>
            </div>
          </div>

          <div class="bg-card border border-border rounded-lg p-4">
             <h2 class="text-2xl font-bold text-primary text-center mb-2">To Do</h2>
             <p class="text-center mb-4">These are tasks we need help with. On the left are continuous tasks that will always need work, while on the right are current tasks.</p>
             <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-muted p-4 rounded-lg">
                    <h3 class="font-bold text-lg mb-2 text-primary-foreground">Continuous tasks</h3>
                    <ul class="list-disc list-inside space-y-2">
                        <li>Expand articles in need of <a href="#">more content</a>.</li>
                        <li>Mark or fix anything relating to <a href="#">maintenance</a>.</li>
                        <li>Create pages listed under <a href="#">Special:WantedPages</a>.</li>
                    </ul>
                </div>
                <div class="bg-muted p-4 rounded-lg">
                    <h3 class="font-bold text-lg mb-2 text-primary-foreground">Current tasks</h3>
                    <p>Please help expand these item-related stubs.</p>
                    <ul class="list-disc list-inside space-y-2">
                        <li><a href="#">Reflector</a></li>
                        <li><a href="#">SpellStone</a></li>
                        <li><a href="#">Wing Repair</a></li>
                        <li><a href="#">Pepper Coin</a></li>
                        <li><a href="#">CloudRunner Flute</a></li>
                    </ul>
                </div>
             </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-card border border-border rounded-lg p-4">
                <h2 class="text-2xl font-bold text-primary mb-2 text-center">News</h2>
                <div class="space-y-4 text-sm">
                    <div>
                        <h3 class="font-bold text-primary-foreground">Star Fox News</h3>
                        <ul class="list-disc list-inside space-y-2 mt-2">
                            <li><b>September 25, 2021</b> - Star Fox 64 announced for Nintendo Switch Online + Expansion Pack.</li>
                            <li><b>April 13, 2020</b> - Rick May, voice of Peppy Hare and Andross, has passed away.</li>
                            <li><b>December 4, 2019</b> - Star Fox 2 announced for Nintendo Switch Online.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-primary-foreground">Lylat Wiki & NIWA News</h3>
                         <ul class="list-disc list-inside space-y-2 mt-2">
                            <li><b>December 11th, 2022</b> - The Dragon Quest Wiki has been officially ousted as a member of the NIWA Network.</li>
                            <li><b>May 24th, 2021</b> - Our third Editor-in-Chief election is going on!</li>
                        </ul>
                    </div>
                </div>
              </div>
              <div class="bg-card border border-border rounded-lg p-4">
                <h2 class="text-2xl font-bold text-primary mb-2 text-center">Featured</h2>
                 <div class="bg-muted p-4 rounded-lg text-center">
                    <p>A Featured System is yet to come, stick around until it does!</p>
                 </div>
              </div>
          </div>
        </div>
      `
    }
  },
  "mega-man-wiki": {
    "Main_Page": {
      title: "Mega Man Wiki",
      description: "Mega Man Knowledge Base is home to everything Mega Man—games, characters, weapons, and more across every series.",
      leadImage: "https://cdn.megamanwiki.com/thumb/1/15/MMKB_logo.png/150px-MMKB_logo.png",
      leadImageHint: "Mega Man Knowledge Base logo",
      content: `
        <div class="space-y-6">
          <div class="border border-border bg-card rounded-lg p-6 shadow">
            <div class="flex flex-col md:flex-row md:items-center gap-4">
              <img class="w-28 h-28 object-contain mx-auto md:mx-0" src="https://cdn.megamanwiki.com/thumb/1/15/MMKB_logo.png/200px-MMKB_logo.png" alt="Mega Man Knowledge Base logo"/>
              <div class="space-y-2 text-center md:text-left">
                <h2 class="text-3xl font-bold text-primary">Welcome to Mega Man Knowledge Base</h2>
                <p class="text-foreground/80">
                  Mega Man Knowledge Base—better known as <strong>Mega Man Wiki</strong>—keeps track of every game, character, ability, and world in Capcom’s long-running franchise. Whether you’re jumping into Classic adventures or exploring the far future with Battle Network, the archives are ready for you to explore and expand.
                </p>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="border border-border bg-card rounded-lg p-6">
              <h3 class="text-2xl font-semibold text-primary mb-4 text-center">Explore by Series</h3>
              <div class="grid grid-cols-2 gap-3 text-sm font-semibold text-center">
                <a class="hover:text-primary" href="/wiki/mega-man-wiki/Classic_series">Classic</a>
                <a class="hover:text-primary" href="/wiki/mega-man-wiki/X_series">X</a>
                <a class="hover:text-primary" href="/wiki/mega-man-wiki/Zero_series">Zero</a>
                <a class="hover:text-primary" href="/wiki/mega-man-wiki/ZX_series">ZX</a>
                <a class="hover:text-primary" href="/wiki/mega-man-wiki/Legends_series">Legends</a>
                <a class="hover:text-primary" href="/wiki/mega-man-wiki/Battle_Network_series">Battle Network</a>
                <a class="hover:text-primary" href="/wiki/mega-man-wiki/Star_Force_series">Star Force</a>
                <a class="hover:text-primary" href="/wiki/mega-man-wiki/Crossover">Crossovers</a>
                <a class="hover:text-primary" href="/wiki/mega-man-wiki/Other_media">Other media</a>
              </div>
            </div>
            <div class="border border-border bg-card rounded-lg p-6">
              <h3 class="text-2xl font-semibold text-primary mb-4 text-center">Wiki Hubs</h3>
              <ul class="space-y-2 text-sm text-foreground/80">
                <li><a class="hover:text-primary font-medium" href="/wiki/mega-man-wiki/Games">Games</a></li>
                <li><a class="hover:text-primary font-medium" href="/wiki/mega-man-wiki/Characters">Characters</a></li>
                <li><a class="hover:text-primary font-medium" href="/wiki/mega-man-wiki/Weapons">Weapons</a></li>
                <li><a class="hover:text-primary font-medium" href="/wiki/mega-man-wiki/Stages">Stages</a></li>
                <li><a class="hover:text-primary font-medium" href="/wiki/mega-man-wiki/Items">Items</a></li>
                <li><a class="hover:text-primary font-medium" href="/wiki/mega-man-wiki/Series">Series overview</a></li>
              </ul>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="border border-border bg-card rounded-lg p-6">
              <h3 class="text-xl font-semibold text-primary mb-2 text-center">Featured Article</h3>
              <p class="text-sm text-foreground/80 italic text-center">Featured content rotates regularly. Dive into the highlighted article to learn something new about Mega Man.</p>
            </div>
            <div class="border border-border bg-card rounded-lg p-6">
              <h3 class="text-xl font-semibold text-primary mb-2 text-center">Did you know?</h3>
              <p class="text-sm text-foreground/80 italic text-center">Fun franchise facts and deep-cut trivia are curated by the community.</p>
            </div>
          </div>

          <div class="border border-border bg-card rounded-lg p-6">
            <h3 class="text-xl font-semibold text-primary mb-2">Guides &amp; Policies</h3>
            <p class="text-sm text-foreground/80">
              Review the <a class="underline hover:text-primary" href="/wiki/MMKB:Manual_of_Style">Manual of Style</a> and the wiki <a class="underline hover:text-primary" href="/wiki/MMKB:Rules">Rules</a> before contributing. Mega Man Wiki is proud to stand with the <a class="underline hover:text-primary" href="https://niwanetwork.org/ultra/" target="_blank" rel="noopener noreferrer">Nintendo Independent Wiki Alliance</a> in keeping fan knowledge freely available.
            </p>
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
  },
  "final-fantasy-wiki": {
    "Main_Page": {
      "title": "Final Fantasy Wiki",
      "description": "Welcome hub for the Final Fantasy Wiki community, tracking news, trivia, and collaboration tasks across the franchise.",
      "leadImage": "https://cdn.finalfantasywiki.com/7/7e/FFVI_logo.jpg",
      "leadImageHint": "Final Fantasy VI logo artwork",
      "content": `
        <div class="space-y-6">
          <div class="border border-border bg-card rounded-lg p-6 shadow-sm">
            <div class="flex flex-col md:flex-row gap-4 items-center md:items-start">
              <img src="https://cdn.finalfantasywiki.com/thumb/0/0b/Cloud_on_Chocobo_FFVII_artwork.jpg/150px-Cloud_on_Chocobo_FFVII_artwork.jpg" alt="Cloud riding a chocobo" class="rounded-md border border-border w-[120px] h-auto" />
              <div class="space-y-2 text-center md:text-left">
                <h2 class="text-3xl font-bold text-primary">Welcome to Final Fantasy Wiki</h2>
                <p class="text-foreground/90">A community-maintained encyclopedia for the <i>Final Fantasy</i> franchise since January 2020.</p>
                <p class="text-sm text-muted-foreground">We are currently hosting <b>805 articles</b>. Visit the <a class="underline hover:text-primary" href="https://finalfantasywiki.com/wiki/Help:Contents" target="_blank" rel="noopener noreferrer">help center</a> to get started, or drop by our <a class="underline hover:text-primary" href="https://discord.gg/eQNsPWR4" target="_blank" rel="noopener noreferrer">Discord</a> to request an account.</p>
              </div>
            </div>
          </div>

          <div class="grid lg:grid-cols-2 gap-6">
            <div class="border border-border bg-card rounded-lg p-6 space-y-4">
              <div>
                <h3 class="text-2xl font-semibold text-primary mb-2 text-center">Featured article</h3>
                <div class="flex flex-col sm:flex-row gap-4">
                  <img src="https://cdn.finalfantasywiki.com/thumb/7/7e/FFVI_logo.jpg/200px-FFVI_logo.jpg" alt="Final Fantasy VI logo" class="rounded-md border border-border w-[160px] h-auto mx-auto sm:mx-0" />
                  <p class="text-sm leading-relaxed text-foreground/90">
                    <i><b>Final Fantasy VI</b></i> is the sixth mainline installment, originally released in 1994 for the Super Nintendo Entertainment System. Co-directed by Yoshinori Kitase and Hiroyuki Itou, with a score by Nobuo Uematsu and character art by Yoshitaka Amano, it introduced hidden party members and marked the final 2D main series entry before <i>Final Fantasy VII</i> revolutionized the franchise.
                  </p>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-purple-300 mb-2 text-center">Did you know?</h3>
                <ul class="list-disc list-inside space-y-1 text-sm text-foreground/90">
                  <li>The series name came from Hironobu Sakaguchi, who thought it might be his final game.</li>
                  <li>Cloud Strife has more recurring appearances than any other main protagonist.</li>
                  <li><i>Final Fantasy X</i> was the first entry with full voice acting.</li>
                  <li><i>Final Fantasy VI</i> pioneered hidden party members.</li>
                  <li>Torgal’s moves in <i>Final Fantasy XVI</i> draw inspiration from the assist system in <i>Marvel vs. Capcom 2</i>.</li>
                  <li>The iconic “Prelude” theme was composed in about five minutes.</li>
                </ul>
              </div>
            </div>

            <div class="border border-border bg-card rounded-lg p-6 space-y-4">
              <div>
                <h3 class="text-2xl font-semibold text-emerald-300 mb-2 text-center">News</h3>
                <ul class="space-y-2 text-sm text-foreground/90">
                  <li><b>October 14, 2025:</b> <i>Dissidia Duellum Final Fantasy</i> announced for mobile in 2026.</li>
                  <li><b>September 30, 2025:</b> <i>Final Fantasy Tactics: The Ivalice Chronicles</i> released worldwide.</li>
                  <li><b>August 2025:</b> <i>Final Fantasy Brave Exvius</i> sunset set for October 31.</li>
                  <li><b>June 9, 2025:</b> <i>Final Fantasy XVI</i> confirmed for Xbox Series consoles; <i>FFVII Remake Intergrade</i> heads to additional platforms Winter 2026.</li>
                  <li><b>June 4, 2025:</b> <i>Final Fantasy Tactics: The Ivalice Chronicles</i> revealed with a September 30 launch.</li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-amber-300 mb-2 text-center">To do</h3>
                <div class="grid sm:grid-cols-2 gap-4 text-sm text-foreground/90">
                  <div class="space-y-2">
                    <h4 class="font-semibold text-primary text-center">Continuous</h4>
                    <ul class="list-disc list-inside space-y-1">
                      <li>Expand stub-class articles.</li>
                      <li>Create pages listed in <i>Special:WantedPages</i>.</li>
                      <li>Add missing citations to unsourced content.</li>
                      <li>Upgrade low quality images across the wiki.</li>
                    </ul>
                  </div>
                  <div class="space-y-2">
                    <h4 class="font-semibold text-primary text-center">Current</h4>
                    <ul class="list-disc list-inside space-y-1">
                      <li>Refresh character pages for <i>Final Fantasy IV</i>, <i>VI</i>, and <i>VII</i>.</li>
                      <li>Build comprehensive main articles for <i>FFVII</i>, <i>FFVII Remake</i>, and <i>FFXVI</i>.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid lg:grid-cols-2 gap-6">
            <div class="border border-border bg-card rounded-lg p-6 space-y-4">
              <h3 class="text-2xl font-semibold text-primary text-center">Navigation</h3>
              <p class="text-center text-sm text-foreground/80">Browse the major Final Fantasy categories maintained by volunteers across the network.</p>
              <div class="flex flex-wrap justify-center gap-2 text-sm font-medium text-primary">
                <span class="px-3 py-1 rounded-full border border-primary/40">Games</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Characters</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Enemies</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Species</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Items</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Equipment</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Weapons</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Armor</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Locations</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Abilities</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Summons</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Classes</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Terms</span>
                <span class="px-3 py-1 rounded-full border border-primary/40">Music</span>
              </div>
            </div>
            <div class="border border-border bg-card rounded-lg p-6 space-y-3">
              <h3 class="text-2xl font-semibold text-primary text-center">Square Enix Independent Wiki Alliance</h3>
              <p class="text-sm text-foreground/80 text-center">
                Final Fantasy Wiki collaborates closely with fellow SEIWA members such as Square Enix Wiki, Chrono Wiki, Kingdom Hearts Wiki, and StrategyWiki to build comprehensive coverage across all Square Enix properties.
              </p>
            </div>
          </div>

          <div class="grid lg:grid-cols-2 gap-6">
            <div class="border border-border bg-card rounded-lg p-6 space-y-3">
              <h3 class="text-2xl font-semibold text-primary text-center">Gaming Wiki Network</h3>
              <p class="text-sm text-foreground/80 text-center">
                As part of the broader Gaming Wiki Network, Final Fantasy Wiki stands alongside independent projects covering Banjo-Kazooie, Crash Bandicoot, Fallout, Hollow Knight, Mana, SaGa, Zelda, and many more community-led resources.
              </p>
            </div>
            <div class="border border-border bg-card rounded-lg p-6 space-y-3">
              <h3 class="text-2xl font-semibold text-primary text-center">Independent Wiki Federation</h3>
              <p class="text-sm text-foreground/80 text-center">
                The Independent Wiki Federation provides tools and shared best practices for volunteer wiki teams—linking Final Fantasy Wiki with allies like the Independent Fallout Wiki, Sonic Archive, Telepedia, TWEWY Wiki, and other self-hosted communities.
              </p>
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
