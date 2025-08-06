import Prose from 'components/prose';
import { getPage } from 'lib/shopify';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(props: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  try {
    const page = await getPage(params.page);

    if (!page) {
      return {
        title: 'Page Not Found',
        description: 'The requested page could not be found.'
      };
    }

    return {
      title: page.seo?.title || page.title,
      description: page.seo?.description || page.bodySummary,
      openGraph: {
        publishedTime: page.createdAt,
        modifiedTime: page.updatedAt,
        type: 'article'
      }
    };
  } catch (error) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    };
  }
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params;
  
  try {
    const page = await getPage(params.page);

    if (!page) {
      notFound();
    }

    return (
      <>
        <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
        <Prose className="mb-8" html={page.body} />
        <p className="text-sm italic">
          {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }).format(new Date(page.updatedAt))}.`}
        </p>
      </>
    );
  } catch (error) {
    console.error('Error fetching page:', error);
    notFound();
  }
}