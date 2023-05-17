import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Mixpanel } from '@/lib/mixpanel';
const navigation = [
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

export const Socials = () => {
  return (
    <div className='flex justify-start space-x-6 md:order-2'>
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target='_blank'
          className='hover:text-palette-green text-black'
          onClick={() =>
            Mixpanel.track('visit_socials', {
              type: item.name.toLowerCase(),
              link: item.href,
            })
          }
        >
          <span className='sr-only'>{item.name}</span>
          <item.icon
            className='dark:fill-palette-green h-6 w-6'
            aria-hidden='true'
          />
        </a>
      ))}
    </div>
  );
};
