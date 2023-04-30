import { PATHS } from '@/routes/routes';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
const Footer = () => {
  return (
    <section className=" flex h-full w-screen flex-col border-t  border-white text-white ">
      <div className="container flex flex-col items-start justify-between gap-10  px-8 md:flex-row ">
        <div className="flex w-full flex-row items-center justify-between gap-4 md:flex-col md:items-start">
          <h3 className="text-lg font-bold">Logo</h3>

          <ul className="flex flex-row items-center gap-2">
            <SocialItems
              title="Facebook"
              Icon={BsFacebook}
              link={PATHS.social.facebook}
            />
            <SocialItems
              title="Instagram"
              Icon={BsInstagram}
              link={PATHS.social.instagram}
            />
            <SocialItems
              title="Linkedin"
              Icon={BsLinkedin}
              link={PATHS.social.linkedin}
            />
          </ul>
        </div>

        <ListItems
          title="Navigation"
          items={[
            {
              title: 'Featured',
              path: PATHS.app.featured,
            },
            {
              title: 'All Raffles',
              path: PATHS.app.all,
            },
            {
              title: 'Past Raffles',
              path: PATHS.app.past,
            },
          ]}
        />
        <ListItems
          title=" "
          items={[
            {
              title: 'Partners',
              path: PATHS.app.partners,
            },
            {
              title: 'About',
              path: PATHS.app.about,
            },
            {
              title: 'Contact',
              path: PATHS.app.contact,
            },
          ]}
        />
        <ListItems
          title="More Pages"
          items={[
            {
              title: 'Privacy Policy',
              path: PATHS.app.home,
            },
            {
              title: 'Terms & Conditions',
              path: PATHS.app.services,
            },
            {
              title: 'FAQ',
              path: PATHS.app.solutions,
            },
          ]}
        />
        <ListItems
          title="Download"
          items={[
            {
              title: 'Privacy Policy',
              path: PATHS.app.home,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Footer;

const SocialItems = ({
  title,
  Icon,
  link,
}: {
  title: string;
  Icon: IconType;
  link: string;
}) => {
  return (
    <li className=" flex h-7 w-7 cursor-pointer flex-row items-center  justify-center rounded-md border-[1px]  border-primary p-1 transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Icon className="h-full w-full" />
      </Link>
    </li>
  );
};

const ListItems = ({
  title,
  items,
}: {
  title: string;
  items: {
    title: string;
    path: string;
  }[];
}) => {
  return (
    <div className="w-full">
      <h3 className="mb-4 whitespace-nowrap text-lg font-bold">{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              className="text-secondary-text text-sm"
              href={item.path}
              scroll
              shallow
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-[width] after:content-[''] hover:after:ml-auto hover:after:w-full ">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
