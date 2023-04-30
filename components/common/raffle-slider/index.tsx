import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Placeholder from '../../../public/nft-placeholder.png';
import RaffleButton from '../raffle-button';
import { useSliderContext } from '@/context/slider-context';
import Button from '../button';

const RaffleSlider: FC = ({}) => {
  const { sliderIsOpen, closeSlider, slideData } = useSliderContext();

  return (
    <div
      className={`fixed bottom-auto right-0 top-0 z-50 flex h-full w-screen  justify-end overflow-auto  text-black transition-transform duration-500 ease-in-out  will-change-transform  ${
        sliderIsOpen ? 'translate-x-0' : 'translate-x-full delay-500'
      }`}
    >
      <div
        onClick={() => closeSlider()}
        className={`absolute bottom-0 left-0 right-0  top-0 z-0 h-full  w-full cursor-pointer  backdrop-blur-sm transition-opacity duration-500 will-change-auto   ${
          sliderIsOpen ? 'opacity-100 delay-500' : 'opacity-0 '
        }`}
      />

      {slideData && (
        <div className="relative z-10 flex h-max min-h-screen w-full  flex-col  bg-primary  px-10  pt-20  md:max-w-screen-sm">
          <div className="flex flex-col overflow-hidden rounded-lg ">
            <div className="relative">
              <div className="aspect-w-1  h-[320px] cursor-pointer">
                <Image src={slideData.image} fill alt="Placeholder" />
              </div>
            </div>
            <div className="overflow-hidden rounded-b-2xl bg-white p-4 transition-all">
              <div className="flex items-center">
                <Link href={'/'}>{slideData.familyName}</Link>
              </div>
              <h2 className="line-clamp-1 text-left text-xl font-bold ">
                {slideData.nftName}
              </h2>
              <div className="flex items-center gap-x-2 pb-1">
                <Link href={'/'}>@{slideData.creator}</Link>
              </div>
              <div className="mb-3 flex justify-between">
                <div>
                  <strong className="block text-sm font-bold text-gray-500 ">
                    Tickets Remaining
                  </strong>
                  <p className="text-left text-xl font-bold leading-none text-purple-500 ">
                    {slideData.ticketsAvailable} / {slideData.totalTickets}
                  </p>
                </div>
                <div>
                  <strong className="block text-sm font-bold text-gray-500 ">
                    Price/Ticket
                  </strong>
                  <p className="text-left text-xl font-bold leading-none text-purple-500 ">
                    {slideData.price.toFixed(4)} SOL
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Button onClick={() => {}}>Buy a ticket</Button>
                <Button onClick={closeSlider}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RaffleSlider;
