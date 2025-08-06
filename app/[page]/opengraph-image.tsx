import OpengraphImage from 'components/opengraph-image';
import { getPage } from 'lib/shopify';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

export default async function Image({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  const title = page?.seo?.title || page?.title || 'Page Not Found';
  
  return await OpengraphImage({ title });
}