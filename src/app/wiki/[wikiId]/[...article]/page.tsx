import { getArticle, getWikiById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default async function WikiArticlePage({ params }: { params: { wikiId: string; article: string[] } }) {
  const { wikiId, article: articlePath } = params;
  const articleSlug = articlePath.join('/');
  
  const wiki = await getWikiById(wikiId);
  const article = await getArticle(wikiId, articleSlug);

  if (!wiki) {
    notFound();
  }
  
  return (
    <div className="p-4 md:p-8 lg:p-12">
        <Breadcrumb className="mb-4 text-lg">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href={`/wikis`}>Wikis</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                     <BreadcrumbLink asChild>
                        <Link href={`/wiki/${wiki.id}/Main_Page`}>{wiki.name}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{article.title || articleSlug.replace(/_/g, ' ')}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        
        {article.error ? (
          <Alert variant="destructive" className="mt-8">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Could Not Load Article</AlertTitle>
            <AlertDescription>
              {article.error} The content may be unavailable, or the page may not exist.
            </AlertDescription>
          </Alert>
        ) : (
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">{article.title}</CardTitle>
              {article.description && (
                <CardDescription className="text-lg">{article.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {article.leadImage && (
                <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg">
                  <Image
                    src={article.leadImage}
                    alt={`Lead image for ${article.title}`}
                    fill
                    className="object-cover"
                    data-ai-hint={article.leadImageHint || "gameplay screenshot"}
                    priority
                  />
                </div>
              )}
              <div
                className="wiki-content max-w-none prose prose-invert"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </CardContent>
          </Card>
        )}
    </div>
  );
}
