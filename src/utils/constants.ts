import { ProjectPagesSEOData, Projects } from '@/types/common';

export const HEADER_HEIGHT = 76;

export const GITHUB_PROFILE_LINK = 'https://github.com/rohailtaha';
export const LINKEDIN_PROFILE_LINK = 'https://www.linkedin.com/in/rohail-taha/';
export const CODESANDBOX_PROFILE_LINK = 'https://codesandbox.io/u/Rohail77';
export const CODEPEN_PROFILE_LINK = 'https://codepen.io/Rohail_Taha';
export const FRONTEND_MENTOR_PROFILE_LINK =
  'https://www.frontendmentor.io/profile/rohailtaha';

export const MY_EMAIL = 'taharohail77@gmail.com';

export const YEARS_OF_EXPERIENCE = 3;

export const PROJECTS: Projects = {
  'api-freaks': {
    slug: 'api-freaks',
    name: 'APIFreaks',
    description:
      'A centralized API hub for services like ipgeolocation.io, whoisfreaks.com and currencyfreaks.com, allowing users to manage subscriptions and organizations efficiently from a single platform.',
    skills: ['Next.js', 'TailwindCSS', 'PostgreSQL'],
    image: {
      large: 'api-freaks-large.png',
      small: 'api-freaks-small.png',
    },
    viewLink: 'https://apifreaks.com',
    year: 2024,
    highlights: [
      'Developed a responsive, user-friendly frontend and seamlessly integrated it with multiple APIs, working closely with backend developers.',
      'Led the frontend team by delegating tasks, establishing coding standards, and conducting code reviews to ensure code quality and maintainability.',
      'Enhanced core web vitals of multiple pages, improving load times and overall user experience.',
      'Researched and wrote SEO optimized content to improve search visibility and engagement.',
      'Researched and installed the Ghost platform on server for hassle free blog management.',
    ],
  },
  tweetstorm: {
    slug: 'tweetstorm',
    name: 'TweetStorm',
    description:
      'An AI-powered Tweet Generator featuring hashtag generation, bio generation, username suggestions, advanced tweet search. The product also includes browser extensions for generating tweets and replies and for performing bulk twitter actions like bulk tweet deletions, unlikes etc.',
    image: {
      large: 'tweetstorm-large.png',
      small: 'tweetstorm-small.png',
    },
    viewLink: 'https://tweetstorm.ai',
    year: 2024,
    skills: ['Next.js', 'TailwindCSS', 'Stripe', 'MySQL'],
    highlights: [
      'Spearheaded development as both Product Manager and Team Lead.',
      'Developed the frontend and APIs and implemented various application features.',
      'Made changes to database schema and optimized queries to enhance performance and reduce latency.',
      'Migrated the application from PHP/Laravel to Next.js and ensured safe migration of application to the new server.',
      'Performed safe database migrations in production.',
      'Developed the CD pipeline for streamlining the development workflow.',
      'Bug fixes and UI improvements in the browser extensions.',
      'Conducted research and wrote SEO-optimized content to boost search visibility and user engagement.',
      'Performed code reviews and ensured coding standards and clean code practices are met.',
    ],
  },
  webbsai: {
    slug: 'webbsai',
    name: 'WebbsAI',
    description:
      'An AI-powered low-code website builder, that allows users to create websites with drag-and-drop functionality, customizable templates and AI enabled chat. Important features include conversion of linked resume to website, hosting via Amazon S3 and Cloudfront, and Stripe integration for subscriptions.',
    image: {
      large: 'webbsai-large.png',
      small: 'webbsai-small.png',
    },
    viewLink: 'https://webbsai.com',
    year: 2023,
    skills: [
      'Next.js',
      'TailwindCSS',
      'AWS S3',
      'Stripe',
      'MongoDB',
      'Firebase',
    ],
    highlights: [
      'Developed the frontend, drag and drop builder and APIs and implemented various application features.',
      'Updating the @craftjs/layers open source package for our custom use.',
      'Reduced database reads and writes to improve efficiency and scalability.',
      'Writing database migration scripts.',
      'Writing documentation for various architectural designs used in the application.',
      'Performed code reviews and ensured coding standards and clean code practices are met.',
    ],
  },
  pulsechat: {
    slug: 'pulsechat',
    name: 'PulseChat',
    description:
      'AI chatbot for Shopify stores. Boost sales and customer satisfaction with instant product discovery and order tracking.',
    image: {
      large: 'pulsechat-large.png',
      small: 'pulsechat-small.png',
    },
    viewLink: 'https://apps.shopify.com/pulsechat',
    year: 2023,
    skills: ['Next.js', 'Shopify', 'MySQL'],
    highlights: [
      'Migrated the codebase from PHP/Laravel to Node/Express.',
      'Removed the usage of deprecated Shopify REST API and replaced it with the new GraphQL API.',
      'Successfully moved the application to a new server, ensuring database and other data is safely migrated with minimum downtime.',
    ],
  },
  'softwares-rating-app': {
    slug: 'softwares-rating-app',
    name: 'Softwares Rating App',
    description:
      'A softwares-rating-app built with React and Firebase (Firebase authentication, cloud database and hosting). The user can see all reviews of any software, filter from 1 to 5 star reviews, rate and review any software after logging in, edit his/her ratings, change account settings.',
    skills: ['React', 'Firebase', 'React Router', 'Figma'],
    viewLink: 'https://my-holiday-proje-1616778972307.web.app/',
    codeLink: 'https://github.com/rohailtaha/Softwares-Rating-App',
    year: 2021,
    image: {
      large: 'softwares-rating-app.png',
      small: 'softwares-rating-app.png',
    },
    highlights: [
      'Prepared the design of the application on Figma.',
      "Utilized Firebase's firestore, authentication and hosting services to handle application backend.",
      'Used react router for client side navigation.',
    ],
  },
  'nationpedia': {
    slug: 'nationpedia',
    name: 'Nationpedia',
    description:
      'An application that fetches and displays comprehensive information about world countries using the REST Countries API. Users are presented with a paginated list of countries sorted alphabetically. The app offers intuitive search functionality and region-based filters to quickly find specific countries. Detailed country information, including key facts and statistics, is accessible with a single click. Users can also navigate between neighboring countries via clickable border links. The application supports both light and dark modes for an enhanced user experience.',
    image: {
      large: 'nationpedia-large.png',
      small: 'nationpedia-small.png',
    },
    viewLink: 'https://rest-countries-api-ornd.vercel.app/',
    codeLink: 'https://github.com/rohailtaha/REST-Countries-API',
    year: 2021,
    skills: ['React', 'Redux'],
    highlights: [
      'Read the api documentation for fetching the countries data.',
      'Used Redux for storing the state of countries data.',
      'Followed an existing design to make the ui of the application.',
    ],
  },
};

export const PROJECT_PAGES_SEO_DATA: ProjectPagesSEOData = {
  'api-freaks': {
    title: 'Work - APIFreaks',
    description:
      'APIFreaks is an API hub for ipgeolocation.io, whoisfreaks.com and currencyfreaks.com, allowing users to manage subscriptions and organizations from a single platform.',
    ogImage: 'api-freaks-large.png',
  },
  tweetstorm: {
    title: 'Work - TweetStorm',
    description:
      'An AI-powered Tweet Generator featuring hashtag generation, bio generation, username suggestions, advanced tweet search and a browser extension.',
    ogImage: 'tweetstorm-large.png',
  },
  webbsai: {
    title: 'Work - WebbsAI',
    description:
      'An AI-powered low-code website builder, that allows users to create websites with drag-and-drop functionality, customizable templates and AI enabled chat.',
    ogImage: 'webbsai-large.png',
  },
  pulsechat: {
    title: 'Work - PulseChat',
    description:
      'AI chatbot for Shopify stores. Boost sales and customer satisfaction with instant product discovery and order tracking.',
    ogImage: 'pulsechat-large.png',
  },
  'softwares-rating-app': {
    title: 'Work - Softwares Rating App',
    description:
      'A softwares-rating-app built with React and Firebase (Firebase authentication, cloud database and hosting).',
    ogImage: 'softwares-rating-app.png',
  },
  'nationpedia': {
    title: 'Work - Nationpedia',
    description:
      'An application that fetches and displays comprehensive information about world countries using the REST Countries API.',
    ogImage: 'nationpedia-large.png',
  },
};
