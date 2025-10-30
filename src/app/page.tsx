import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GrifkubaLogo } from '@/components/layout/grifkuba-logo';
import { BookOpen, Ticket } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-4 md:p-8">
      <Card className="w-full max-w-2xl text-center shadow-lg border-primary/20 bg-card/50">
        <CardHeader className="items-center">
            <GrifkubaLogo className="w-20 h-20 text-primary mb-4" />
          <CardTitle className="text-4xl font-bold text-primary font-headline">
            Welcome to Grifkuba Hub
          </CardTitle>
          <CardDescription className="text-foreground/80">
            Your central place for Grifkuba's wikis and community support.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Grifkuba is a volunteer-run organization that maintains multiple game-related wikis and offers community support tools. This app is your gateway to all our resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-bold">
              <Link href="/wiki/lylat-wiki/Main_Page">
                <BookOpen className="mr-2" />
                Explore Wikis
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold text-secondary-foreground">
              <Link href="/tickets/new">
                <Ticket className="mr-2" />
                Get Support
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
