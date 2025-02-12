import BreadCrumbs from '@/components/BreadCrumbs';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { GithubIcon, TickIcon, ViewProjectIcon } from '@/components/icons';
import SectionHeading from '@/components/SectionHeading';
import {
  HEADER_HEIGHT,
  PROJECT_PAGES_SEO_DATA,
  PROJECTS,
} from '@/utils/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type SingleWorkProps = {
  params: Promise<{ projectName: string }>;
};

export async function generateMetadata({
  params,
}: SingleWorkProps): Promise<Metadata> {
  const { projectName } = await params;

  const title = PROJECT_PAGES_SEO_DATA[projectName].title;
  const description = PROJECT_PAGES_SEO_DATA[projectName].description;
  const ogImage = PROJECT_PAGES_SEO_DATA[projectName].ogImage;

  return {
    title,
    description,
    openGraph: {
      url: ogImage,
      title,
      description,
    },
    twitter: {
      title,
      description,
      images: [{ url: ogImage }],
    },
  };
}

async function SingleWork({ params }: SingleWorkProps) {
  const { projectName } = await params;
  const project = PROJECTS[projectName];

  const breadCrumbLinks = [
    { href: '/', name: 'Home' },
    { href: '/work', name: 'Work' },
    { href: `/work/${project.slug}`, name: project.name },
  ];

  return (
    <div>
      <Header />
      <main style={{ paddingTop: HEADER_HEIGHT }} className="responsive-pad">
        <div className="pt-10 pb-32 mx-auto max-content-w">
          <BreadCrumbs links={breadCrumbLinks} />
          <section className="mt-10">
            <div className="mt-8">
              <Image
                src={`/assets/${project.image.large}`}
                className="border rounded-xl"
                alt={`image for project ${project.name}`}
                width={1830}
                height={910}
              />
            </div>
            <div className="flex-cb mt-9">
              <h1 className="text-3xl font-bold">{project.name}</h1>
              <span className="px-2 py-0.5 font-medium bg-purple-200 rounded-full text-primary">
                {project.year}
              </span>
            </div>
            <div className="gap-2 mt-6 flex-cb">
              <div>
                <h2 className="font-medium">Tech Stack</h2>
                <ul className="flex-wrap gap-1 mt-2 text-sm flex-c">
                  {project.skills.map(skill => {
                    return (
                      <li
                        key={skill}
                        className="px-3 py-1 font-medium bg-purple-200 rounded-full text-primary"
                      >
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="font-medium flex-c gap-x-3">
                {project.codeLink && (
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={project.codeLink}
                    aria-label="View project on GitHub"
                  >
                    <GithubIcon />
                  </Link>
                )}
                {project.viewLink && (
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={project.viewLink}
                    aria-label="View project"
                  >
                    <ViewProjectIcon />
                  </Link>
                )}
              </div>
            </div>
            <div className="max-w-[680px] mt-16">
              <SectionHeading> Description</SectionHeading>
              <p className="mt-4">{project.description}</p>
            </div>
            <div className="mt-16 max-w-[680px]">
              <SectionHeading> Highlights</SectionHeading>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight, index) => {
                  return (
                    <li key={index} className="flex-c gap-x-2">
                      <span className="text-primary">
                        <TickIcon width="1.5rem" height="1.5rem" />{' '}
                      </span>
                      <p>{highlight}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SingleWork;
