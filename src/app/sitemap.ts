import { PROJECTS } from '@/utils/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = Object.keys(PROJECTS).map(projectSlug => ({
    url: `/work/${projectSlug}`,
    changeFrequency: 'weekly',
    priority: 0.9,
  })) as MetadataRoute.Sitemap;

  return [
    {
      url: '/',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: '/work',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: '/contact',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...projectPages,
  ];
}
