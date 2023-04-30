import Link from 'next/link';
import { FC } from 'react';
import RaffleButton from '../raffle-button';
import Image from 'next/image';
import Placeholder from '../../../public/nft-placeholder.png';
import { useSliderContext } from '@/context/slider-context';
type RaffleCardProps = {
  countdown: number;
};
const RaffleCard: FC<RaffleCardProps> = ({ countdown }) => {
  const { setSliderIsOpen, openSlider } = useSliderContext();

  return (
    <div className="flex flex-col overflow-hidden rounded-lg ">
      <div className="relative">
        <div className="aspect-w-1 aspect-h-1 cursor-pointer">
          <Image src={Placeholder} alt="Placeholder" />
        </div>
      </div>
      <div className="overflow-hidden rounded-b-2xl bg-white p-4 transition-all">
        <div className="flex items-center">
          <Link href={'/'}>Oggy Pods</Link>
        </div>
        <h2 className="line-clamp-1 text-left text-xl font-bold ">
          oogy pod #838
        </h2>
        <div className="flex items-center gap-x-2 pb-1">
          <Link href={'/'}>@mjbreese613</Link>
        </div>
        <div className="mb-3 flex justify-between">
          <div>
            <strong className="block text-sm font-bold text-gray-500 ">
              Tickets Remaining
            </strong>
            <p className="text-left text-xl font-bold leading-none text-purple-500 ">
              10 / 50
            </p>
          </div>
          <div>
            <strong className="block text-sm font-bold text-gray-500 ">
              Price/Ticket
            </strong>
            <p className="text-left text-xl font-bold leading-none text-purple-500 ">
              0.699 SOL
            </p>
          </div>
        </div>
        <RaffleButton onClick={openSlider} countdown={new Date(countdown)} />
      </div>
    </div>
  );
};

export default RaffleCard;
