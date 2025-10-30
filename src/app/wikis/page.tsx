import { getWikis } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default async function WikisPage() {
    const wikis = await getWikis();

    return (
        <div className="p-4 md:p-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">Explore our Wikis</CardTitle>
                    <CardDescription>
                        A collection of game-related wikis maintained by Grifkuba.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wikis.map((wiki) => (
                        <Card key={wiki.id} className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-xl">{wiki.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex items-end">
                                 <Button asChild className="w-full">
                                    <Link href={`/wiki/${wiki.id}/Main_Page`}>
                                        <BookOpen className="mr-2 h-4 w-4" />
                                        Visit Wiki
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
