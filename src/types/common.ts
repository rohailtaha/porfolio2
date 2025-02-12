export type FormFeedback = {
  type: 'success' | 'error';
  message: string;
};

export type Projects = {
  [projectSlug: string]: Project;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  skills: Array<string>;
  image: {
    large: string;
    small: string;
  };
  viewLink: string;
  codeLink?: string;
  year: number;
  highlights: Array<string>;
};

type ProjectPageSEOData = {
  title: string;
  description: string;
  ogImage: string;
};

export type ProjectPagesSEOData = {
  [projectSlug: string]: ProjectPageSEOData;
};
