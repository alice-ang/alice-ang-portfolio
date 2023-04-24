import groq from 'groq';
import Image from 'next/image';
import { AiFillGithub, AiFillHeart, AiFillLinkedin } from 'react-icons/ai';

import { ProjectType } from '@/lib/helper';

import Layout from '@/components/layout/Layout';
import { Polaroid } from '@/components/Polaroid';
import { Project } from '@/components/Project';
import Seo from '@/components/Seo';

import client from '../../client';

const socials = [
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/alice-anglesj%C3%B6-9503121a7/',
    icon: AiFillLinkedin,
  },

  {
    name: 'GitHub',
    href: 'https://github.com/alice-ang',
    icon: AiFillGithub,
  },
];

const images = [
  {
    icon: null,
    url: '/alice.png',
    alt: 'Picture of me',
  },
  {
    icon: null,
    url: '/van.png',
    alt: 'Me and my white van',
  },

  {
    icon: AiFillHeart,
    url: '/doggo.png',
    alt: 'Little Märta',
  },

  {
    icon: null,
    url: '/his.png',
    alt: 'Högskolan i Skövde',
  },
  {
    icon: null,
    url: '/quizzly.png',
    alt: 'Quizzly app',
  },
];

const work = [
  {
    logo: '/quizzly.png',
    company: 'Quizzly',
    role: 'Developer / aspiring founder',
    start: '2023',
    end: 'current',
  },
  {
    logo: '/petli.png',
    company: 'Petli',
    role: 'Frontend developer',
    start: '2022',
    end: '2023',
  },
  {
    logo: '/paf.png',
    company: 'Paf',
    role: 'Junior frontend developer',
    start: '2020',
    end: '2022',
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HomePage = ({ props }: any) => {
  const { projectData } = props.data;

  return (
    <>
      <Layout>
        <Seo templateTitle='Alice Anglesjö' />

        <section className='grid grid-cols-6 gap-8 pt-6 md:pt-12 lg:px-12'>
          <div className='col-span-6 p-8 md:col-span-4'>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
              Hello, I'm Alice 👋
            </h1>
            <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
              Frontend developer who likes to try out different technologies.
              When I am not in front of the computer doing either 👩🏻‍💻 or 🎮, I
              enjoy spending some quality time with my dog. I am currently a
              part of the startup program at Science Park Skövde spending all of
              my time trying to start a company.
            </p>
            <span className='mt-4 flex items-center'>
              {socials.map((social) => (
                <a
                  key={social.name}
                  target='_blank'
                  href={social.href}
                  className='hover:text-palette-yellow text-black'
                >
                  <span className='sr-only'>{social.name}</span>
                  <social.icon
                    className='dark:fill-palette-yellow mr-p2 h-6 w-6 dark:hover:fill-zinc-600'
                    aria-hidden='true'
                  />
                </a>
              ))}
            </span>
          </div>
        </section>
        <section className='my-8 flex justify-center gap-5 py-4 sm:gap-8'>
          {images.map((pic, i) => (
            <Polaroid pic={pic} key={i} isRotated={i % 2 == 1} />
          ))}
        </section>
        <section className='grid grid-cols-6 lg:px-12'>
          <h3 className='col-span-6 px-8 pt-8  text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 '>
            👩‍💻 Some projects through the years
          </h3>
          <div className='col-span-6 md:col-span-4'>
            {Object.values(projectData).map((project, i) => (
              <Project project={project as ProjectType} key={i} />
            ))}
          </div>
          <div className='order-first col-span-6 border-b p-8 md:order-last md:col-span-2 md:border-none md:p-6'>
            <div aria-label='sidebar' className='sticky top-4'>
              <h3 className='text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 '>
                💼 Work experience
              </h3>
              <ul className='my-12'>
                {work.map((item) => (
                  <li
                    className='mb-4 flex items-center justify-between text-zinc-700 dark:text-zinc-400'
                    key={item.company}
                  >
                    <span className='flex items-center'>
                      <Image
                        src={item.logo}
                        alt={item.company}
                        width='0'
                        height='0'
                        sizes='100vw'
                        className=' mr-3 h-9 w-9 rounded-full bg-white object-contain p-1 dark:bg-zinc-500'
                      />
                      <div>
                        <p className='font-semibold'>{item.company}</p>
                        <p className='text-xs'>{item.role}</p>
                      </div>
                    </span>
                    <span className='flex text-xs'>
                      {item.start}
                      {item.end && <p> - {item.end}</p>}
                    </span>
                  </li>
                ))}
              </ul>
              <a href='/alice_anglesjo.pdf' download='alice_anglesjo.pdf'>
                <button className=' w-full rounded-md border border-black bg-zinc-100 px-4 py-2 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600/80 dark:hover:text-zinc-50'>
                  Download full CV
                </button>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
const projectQuery = groq`*[_type == "project" && isAcive == true] | order(createdAt desc) {
  title,
  "categories": categories[]->title,
  "imagesGallery": imagesGallery[].asset->url,
  demoUrl,
  githubUrl,
  body,
  createdAt,
  isAcive,
  "mainImage": mainImage.asset->url
}`;
HomePage.getInitialProps = async function () {
  const projectData = await client.fetch(projectQuery);

  const data = { projectData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};
export default HomePage;
