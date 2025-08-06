import OpengraphImage from 'components/opengraph-image';
import { getPage } from 'lib/shopify';

export default async function Image({ params }: { params: { page: string } }) {
  try {
    const page = await getPage(params.page);
    const title = page?.seo?.title || page?.title || 'Page Not Found';
    
    return await OpengraphImage({ title });
  } catch (error) {
    // Fallback to default opengraph image
    return await OpengraphImage({ title: 'Page Not Found' });
  }
}