import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GrifkubaLogo } from '@/components/layout/grifkuba-logo';
import { getWikis } from '@/lib/data';
import Image from 'next/image';

export default async function Home() {
  const wikis = await getWikis();

  return (
    <div className="relative min-h-screen w-full overflow-auto bg-background text-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-80"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
      
      <div className="relative flex flex-col items-center justify-start min-h-screen p-4 md:p-8 z-10">
        <header className="w-full max-w-5xl text-center mb-12">
          <GrifkubaLogo className="w-28 h-28 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-primary font-headline tracking-tighter">
            Grifkuba Hub
          </h1>
        </header>

        <div className="w-full max-w-5xl space-y-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-primary">About Us</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-foreground/80 space-y-4">
              <p>
                We're a network for game enthusiasts, developers and other creative individuals, providing hosting and developing games together.
              </p>
              <p>
                We are currently renovating our web presence to deliver more accurate information about what we do in a clean and presentable package. As this takes time, the following resources may help with what you are looking for.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-primary">Sites We Host</CardTitle>
              <CardDescription>
                Grifkuba is a proud partner of several independently operated wikis that have entrusted us with hosting their sites.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {wikis.map((wiki) => (
                <Link key={wiki.id} href={`/wiki/${wiki.id}/${wiki.mainPage}`} className="group">
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-card hover:bg-accent h-40 transition-colors">
                    {wiki.logo && (
                      <div className="relative w-24 h-24">
                        <Image
                          src={wiki.logo}
                          alt={`${wiki.name} logo`}
                          layout="fill"
                          objectFit="contain"
                          className="group-hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <p className="mt-2 text-center font-semibold text-sm group-hover:text-primary">{wiki.name}</p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://switcher.gg/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                   <div className="relative w-16 h-16">
                        <Image
                          src="https://cdn.grifkuba.net/thumb/1/16/Switcher-logo.png/100px-Switcher-logo.png"
                          alt="Switcher Logo"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                  <span className="text-lg font-semibold group-hover:text-primary">Switcher.gg</span>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Volunteers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We are mainly run by volunteers, for volunteers. Any money brought in by donations or ad revenue help run the server, purchase domains, etc.</p>
                <Button asChild>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSckYJy5j49HP7SOLpq_PIhCv31Yu1okpVPETQCSdqR6g3Bl2A/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                    Fill out our volunteer form
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
