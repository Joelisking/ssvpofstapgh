/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: '1t27kto8',
  dataset: 'production',
  apiVersion: 'v2025-06-25',
  useCdn: false,
});

export interface UpcomingEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

type SanityEvent = {
  _id: string;
  title: string;
  description: string;
  date: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
};

export async function getUpcomingEvents(): Promise<UpcomingEvent[]> {
  const query = `*[_type == "upcomingEvent"] | order(date desc) {
    _id,
    title,
    description,
    date,
    image {
      asset->{url}
    }
  }`;
  const events: SanityEvent[] = await sanityClient.fetch(query);
  return events.map((event) => ({
    id: event._id,
    title: event.title,
    description: event.description,
    date: event.date,
    imageUrl: event.image?.asset?.url || '',
  }));
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  slug: string;
  body: any[];
}

type SanityNews = {
  _id: string;
  title: string;
  description: string;
  date: string;
  image?: { asset?: { url?: string } };
  slug: { current: string };
  body: any[];
};

export async function getAllNews(): Promise<NewsItem[]> {
  const query = `*[_type == "news"] | order(date desc) {
    _id,
    title,
    description,
    date,
    image { asset->{url} },
    slug,
    body
  }`;
  const news: SanityNews[] = await sanityClient.fetch(query);
  console.log('News', news);
  return news.map((item) => ({
    id: item._id,
    title: item.title,
    description: item.description,
    date: item.date,
    imageUrl: item.image?.asset?.url || '',
    slug: item.slug.current,
    body: item.body,
  }));
}

export async function getNewsBySlug(
  slug: string
): Promise<NewsItem | null> {
  const query = `*[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    description,
    date,
    image { asset->{url} },
    slug,
    body
  }`;
  const item: SanityNews | null = await sanityClient.fetch(query, {
    slug,
  });
  if (!item) return null;
  return {
    id: item._id,
    title: item.title,
    description: item.description,
    date: item.date,
    imageUrl: item.image?.asset?.url || '',
    slug: item.slug.current,
    body: item.body,
  };
}

// Helper function to get a plain text excerpt from rich text
export function getExcerpt(
  body: any[],
  length: number = 150
): string {
  if (!body || !Array.isArray(body)) return '';

  const textBlocks = body
    .filter(
      (block) => block._type === 'block' && block.style === 'normal'
    )
    .map(
      (block) =>
        block.children
          ?.filter((child: any) => child._type === 'span')
          .map((child: any) => child.text)
          .join('') || ''
    )
    .join(' ');

  return textBlocks.length > length
    ? textBlocks.substring(0, length) + '...'
    : textBlocks;
}
