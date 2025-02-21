import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { CodeSandboxIcon, GithubIcon, LinkedInIcon } from '@/components/icons';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import Projects from '@/components/Projects';
import SectionHeading from '@/components/SectionHeading';
import {
  CODESANDBOX_PROFILE_LINK,
  GITHUB_PROFILE_LINK,
  HEADER_HEIGHT,
  LINKEDIN_PROFILE_LINK,
  PROJECTS,
} from '@/utils/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAbsoluteUrl } from '../api-utils/helpers';

const EXPERIENCES = [
  {
    company: 'JFreaks Software Sol.',
    title: 'FullStack Developer',
    start: 'Feb 2024',
    end: 'Now',
  },
  {
    company: 'ThinkSoft',
    title: 'FullStack Developer',
    start: 'Jan 2022',
    end: 'Jan 2024',
  },
];

const EDUCATION = [
  {
    institution: 'National University of Sciences and Technology',
    degree: 'BSCS',
    start: '2019',
    end: '2023',
  },
  {
    institution: 'Madina College',
    degree: 'Intermediate',
    start: '2017',
    end: '2019',
  },
  {
    institution: 'Allied Schools',
    degree: 'Matriculation',
    start: '2015',
    end: '2017',
  },
];

const SKILLS = {
  frontend: [
    'Next.js',
    'React.js',
    'TailwindCSS',
    'HTML/CSS',
    'JavaScript',
    'Typescript',
  ],
  backend: [
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Firebase',
  ],
  other: ['Docker', 'Figma'],
};

export const metadata: Metadata = {
  title: 'Home - Rohail Taha',
  description:
    'Hi, I am Rohail Taha, a Full Stack Developer. Welcome to my porfolio website',
  alternates: {
    canonical: getAbsoluteUrl(),
  },
};

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: HEADER_HEIGHT }} className="responsive-pad">
        <section className="pt-32 pb-32 mx-auto max-content-w">
          <div className="grid items-center lg:grid-cols-[1fr,auto] grow">
            <div>
              <h1 className="text-5xl font-bold xs:text-6xl">
                Hi, I&apos;m <br></br>
                <span className="text-primary"> Rohail Taha </span>
              </h1>
              <p className="mt-5 text-xl">
                A Full Stack Developer Crafting Elegant Solutions for the Web.
              </p>
            </div>
            <ul className="flex flex-row gap-4 mt-8 lg:flex-col lg:justify-self-end">
              <li>
                <Link
                  href={GITHUB_PROFILE_LINK}
                  aria-label="View my GitHub profile"
                >
                  <GithubIcon width="1.75rem" height="1.75rem" />
                </Link>
              </li>
              <li>
                <Link
                  href={LINKEDIN_PROFILE_LINK}
                  aria-label="View my LinkedIn profile"
                >
                  <LinkedInIcon width="1.75rem" height="1.75rem" />
                </Link>
              </li>
              <li>
                <Link
                  href={CODESANDBOX_PROFILE_LINK}
                  aria-label="View my CodeSandbox profile"
                >
                  <CodeSandboxIcon width="1.75rem" height="1.75rem" />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section id="work" className="pt-16 mx-auto max-content-w space-y-7">
          <div className="flex-cb">
            <SectionHeading>Selected Work</SectionHeading>
            <div>
              <Link
                href="/work"
                className="px-4 py-2 font-medium border-2 rounded-full flex-c gap-x-2 border-text-primary text-text-primary"
              >
                <span className="text-sm"> Show all projects</span>
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <Projects projects={Object.keys(PROJECTS).slice(0, 4)} />
        </section>
        <section id="about" className="pt-32 mx-auto max-content-w">
          <SectionHeading>Bio</SectionHeading>
          <div className="grid justify-between md:grid-cols-[1.4fr_1fr] mt-7 gap-x-8 lg:gap-x-24">
            <div>
              <div className="space-y-3">
                <p>
                  Hey there, I&apos;m Rohail! A Full Stack Developer who loves
                  turning ideas into real, user-friendly web experiences. Over
                  the past 3 years, I&apos;ve been lucky enough to work on a
                  bunch of exciting projects—whether it&apos;s revamping tech
                  stacks, crafting robust APIs, or fine-tuning database
                  performance. I&apos;ve also had the chance to lead teams and
                  mentor junior developers along the way.
                </p>
                <p></p>
                <p>
                  In my free time, you&apos;ll usually find me experimenting
                  with side projects and learning new topics to enhance my
                  engineering skills.
                </p>
                <p>
                  Thanks for stopping by—if you want to talk about anything,
                  just say hi, I&apos;m always around!
                </p>
              </div>
              <Link
                href="/assets/resume.pdf"
                download="rohail-resume.pdf"
                className="inline-flex items-center px-5 py-3 font-semibold text-white rounded-full gap-x-2 mt-7 bg-primary"
              >
                <span>Download my resume</span>
                <span className="block w-[24px] h-[24px] bg-white rounded-full flex-cc text-primary">
                  <ArrowDownIcon />
                </span>{' '}
              </Link>
            </div>
            <div>
              <div className="px-2 pt-2 hidden md:inline-block text-center -rotate-[6deg] -translate-y-10 bg-white border shadow-lg w-fit">
                <Image
                  src="/assets/me.png"
                  alt="my-image"
                  className="bg-white"
                  width={219}
                  height={306}
                />
                <span className="inline-block my-1 italic">This is me!</span>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-32 mx-auto max-content-w">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <SectionHeading>Work Experience</SectionHeading>
              <ul className="mt-10 space-y-6">
                {EXPERIENCES.map(experience => {
                  return (
                    <li className="pb-6 border-b" key={experience.company}>
                      <h3 className="text-lg font-bold">{experience.title}</h3>
                      <div className="text-sm font-medium flex-cb gap-x-4">
                        <span>{experience.company}</span>
                        <span>
                          {experience.start} - {experience.end}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <SectionHeading>Education</SectionHeading>
              <ul className="mt-10 space-y-6">
                {EDUCATION.map(education => {
                  return (
                    <li className="pb-6 border-b" key={education.institution}>
                      <h3 className="text-lg font-bold">{education.degree}</h3>
                      <div className="text-sm font-medium flex-cb gap-x-4">
                        <span>{education.institution}</span>
                        <span className="text-nowrap">
                          {education.start} - {education.end}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className="pt-16 pb-32 mx-auto max-content-w">
          <SectionHeading>Skills</SectionHeading>
          <div className="grid font-medium gap-x-16 gap-y-8 sm:grid-cols-3 mt-7 text-text-primary">
            <div>
              <h3 className="text-text-secondary">Frontend</h3>
              <ul className="mt-4 flex sm:flex-col gap-4 flex-wrap max-h-[250px]">
                {SKILLS.frontend.map(skill => {
                  return <li key={skill}>{skill}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-text-secondary">Backend</h3>
              <ul className="mt-4 flex sm:flex-col gap-4 flex-wrap max-h-[250px]">
                {SKILLS.backend.map(skill => {
                  return <li key={skill}>{skill}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-text-secondary">Other</h3>
              <ul className="mt-4 flex sm:flex-col gap-4 flex-wrap max-h-[250px]">
                {SKILLS.other.map(skill => {
                  return <li key={skill}>{skill}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
