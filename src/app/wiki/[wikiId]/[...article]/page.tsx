import { getArticle, getWikiById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';

export default async function WikiArticlePage({ params }: { params: { wikiId: string; article: string[] } }) {
  const { wikiId, article: articlePath } = params;
  const articleSlug = articlePath.join('/');
  
  const wiki = await getWikiById(wikiId);
  const article = await getArticle(wikiId, articleSlug);

  if (!wiki || !article) {
    notFound();
  }
  
  return (
    <div className="p-4 md:p-8">
        <Breadcrumb className="mb-4">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Home</Link>
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
                    <BreadcrumbPage>{article.title}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">{article.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {article.leadImage && (
            <div className="relative w-full h-48 sm:h-64 md:h-80 mb-6 rounded-md overflow-hidden border-2 border-primary/20">
              <Image
                src={article.leadImage}
                alt={`Lead image for ${article.title}`}
                fill
                className="object-cover"
                data-ai-hint={article.leadImageHint || "gameplay screenshot"}
              />
            </div>
          )}
          <div
            className="wiki-content max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
