import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GrifkubaLogo } from '@/components/layout/grifkuba-logo';
import { BookOpen, Ticket, Gamepad2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-80"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
      
      <div className="relative flex flex-col items-center justify-center min-h-full p-4 md:p-8 text-center z-10">
        <div className="max-w-4xl w-full">
          <GrifkubaLogo className="w-28 h-28 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-primary font-headline tracking-tighter">
            Grifkuba Hub
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Your central place for Grifkuba's community-driven game wikis and support.
          </p>

          <p className="mt-8 text-muted-foreground max-w-3xl mx-auto">
            Grifkuba is a volunteer-run organization dedicated to creating and maintaining high-quality wikis for various video games. We also provide tools and support for our vibrant community of editors and readers. This hub is your gateway to all our resources.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-bold text-lg py-6 px-8 shadow-lg shadow-primary/10 hover:scale-105 transition-transform">
              <Link href="/wikis">
                <BookOpen className="mr-2" />
                Explore Wikis
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold text-lg py-6 px-8 shadow-lg hover:scale-105 transition-transform">
              <Link href="/tickets/new">
                <Ticket className="mr-2" />
                Get Support
              </Link>
            </Button>
          </div>

          <div className="mt-16 border-t border-primary/20 pt-8 max-w-lg mx-auto">
            <h3 className="text-2xl font-semibold text-primary flex items-center justify-center gap-2">
              <Gamepad2/>
              <span>For Gamers, By Gamers</span>
            </h3>
            <p className="text-muted-foreground mt-2">
              Our projects are powered by passionate fans just like you. Get involved, contribute to a wiki, or join our community on Discord.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
