import classNames from 'classnames';
import { useRouter } from 'next/router';

const RaffleLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <section>
      <div className="sticky top-[72px] z-10 mb-1 flex w-full flex-col justify-between rounded-lg bg-primary/70 py-3 pl-8 md:flex-row ">
        <div className="mb-4 md:mb-0">
          <button
            onClick={() => router.push('?category=featured')}
            className={classNames(
              'rounded-full  px-5 py-3 font-bold text-white transition  hover:text-indigo-300',
              {
                'bg-secondary': !category || category === 'featured',
              }
            )}
          >
            Featured
          </button>
          <button
            onClick={() => router.push('?category=all')}
            className={classNames(
              'mr-1 rounded-full px-5 py-3 font-bold text-white transition  hover:text-indigo-300',

              {
                'bg-secondary': category === 'all',
              }
            )}
          >
            All Raffles
          </button>
          <button
            onClick={() => router.push('?category=past')}
            className={classNames(
              'mr-1 rounded-full px-5 py-3 font-bold text-white transition  hover:text-indigo-300',
              {
                'bg-secondary': category === 'past',
              }
            )}
          >
            Past Raffles
          </button>
        </div>
      </div>
      {children}
    </section>
  );
};

export default RaffleLayout;
