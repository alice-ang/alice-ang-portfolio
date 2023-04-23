import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <nav className='mx-auto w-1/2 rounded-full border border-black px-4 py-6'>
        {/* <Image
          src='/alice.png'
          alt='profil pic'
          width='0'
          height='0'
          sizes='100vw'
          className=' h-9 w-9 rounded-full shadow'
        /> */}
        <ul className='flex items-center justify-between '>
          <li>hej</li>
          <li>few</li>
        </ul>
      </nav>
      <section className='mt-16 grid grid-cols-6 gap-8 lg:px-12'>
        <div className='col-span-6 p-8 md:col-span-4'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
        </div>
        <div className='duration-350 col-span-6 p-8 transition ease-in-out md:col-span-2 md:hover:-rotate-2'>
          <div className='border border-black p-3'>
            <Image
              src='/alice.png'
              alt='profil pic'
              width='0'
              height='0'
              sizes='100vw'
              className=' h-auto w-full  shadow'
            />
            <p className='py-4'>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </section>
      <section className=' grid grid-cols-6 gap-6 lg:px-12'>
        <div className='col-span-6 rounded p-4 md:col-span-4 md:p-6 '>
          <nav aria-label='sidebar' className='sticky top-4'>
            {[0, 1, 2, 3].map((i) => (
              <div className=' rounded-2xl p-8 hover:bg-zinc-100' key={i}>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <p className='text-sm'>hej</p>
                    <h3 className='text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 '>
                      Bostadsbetyg
                    </h3>
                  </div>

                  <Image
                    src='/alice.png'
                    alt='profil pic'
                    width='0'
                    height='0'
                    sizes='100vw'
                    className=' h-9 w-9 rounded-full shadow'
                  />
                </div>

                <p className='mt-4 text-base text-zinc-600 dark:text-zinc-400'>
                  I’m Spencer, a software designer and entrepreneur based in New
                  York City. I’m the founder and CEO of Planetaria, where we
                  develop technologies that empower regular people to explore
                  space on their own terms.
                </p>
                <div className='flex flex-wrap items-center pt-12 '>
                  {[0, 1, 2].map((i) => (
                    <div
                      className='mr-3 rounded-full border border-zinc-200 bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm text-white md:mr-4'
                      key={i}
                    >
                      NextJS
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
        <div className=' col-span-6 md:col-span-2 md:p-6 '>
          <div
            aria-label='sidebar'
            className='sticky top-4 rounded-2xl border border-black p-8'
          >
            <h4 className='text-center text-xl font-extrabold tracking-tight text-gray-700 sm:text-3xl'>
              Betyg
            </h4>
            <dl className=' mt-4 space-y-4  '>ceölf,äwel,f</dl>
            <div className='mt-8 border-t border-gray-200 pt-10'>
              <h4 className='pb-4 text-center text-xl font-extrabold tracking-tight text-gray-700 sm:text-3xl'>
                Karta
              </h4>
              <div className='h-[250px]'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8364.976577639782!2d13.836858432796966!3d58.38928326703061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465b023d3a4c413d%3A0x817d30b9033d4604!2zU2vDtnZkZQ!5e0!3m2!1ssv!2sse!4v1678730360113!5m2!1ssv!2sse'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  aria-hidden='false'
                  tabIndex={0}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='border-grey-300 col-span-6 rounded-2xl border px-6 py-8 md:col-span-2 '>
          <div className='flex pb-6'>
            <MdWork size={22} className='text-zinc-300' />
            <p className='ml-4 text-base'>Arbete</p>
          </div>
          <ul>
            {[0, 1, 2].map((i) => (
              <li className='flex items-center py-2' key={i}>
                <Image
                  src='/alice.png'
                  alt='profil pic'
                  width='0'
                  height='0'
                  sizes='100vw'
                  className=' mr-3 h-10 w-10 rounded-full p-1 shadow-md'
                />
                <div className='flex flex-1 flex-col text-sm'>
                  <p>Petli</p>
                  <p className='text-zinc-400'>Frontend utvecklare</p>
                </div>
                <p className='text-sm text-zinc-500'>jun - dec 2022</p>
              </li>
            ))}
          </ul>
        </div> */}
      </section>
    </Layout>
  );
}
