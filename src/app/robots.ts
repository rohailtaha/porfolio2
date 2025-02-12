import { MetadataRoute } from 'next';

const HOST = `${process.env.PROTOCOL}://${process.env.DOMAIN}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: HOST + '/sitemap.xml',
  };
}
