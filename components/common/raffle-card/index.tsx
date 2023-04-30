import Link from 'next/link';
import { FC } from 'react';
import RaffleButton from '../raffle-button';
import Image from 'next/image';
import { useSliderContext } from '@/context/slider-context';
import { RaffleType } from '@/types/raffle';

const RaffleCard: FC<RaffleType> = ({
  deadline,
  description,
  id,
  image,
  price,
  ticketsAvailable,
  totalTickets,
  winner,
  familyName,
  nftName,
  creator,
}) => {
  const { openSlider } = useSliderContext();
  const handleClick = () => {
    openSlider({
      deadline,
      description,
      id,
      image,
      price,
      ticketsAvailable,
      totalTickets,
      winner,
      familyName,
      nftName,
      creator,
    });
  };
  return (
    <div className="flex flex-col overflow-hidden rounded-lg ">
      <div className="relative">
        <div className="aspect-w-1  h-[320px] cursor-pointer">
          <Image src={image} fill alt="Placeholder" />
        </div>
      </div>
      <div className="overflow-hidden rounded-b-2xl bg-white p-4 transition-all">
        <div className="flex items-center">
          <Link href={'/home'}>{familyName}</Link>
        </div>
        <h2 className="line-clamp-1 text-left text-xl font-bold ">{nftName}</h2>
        <div className="flex items-center gap-x-2 pb-1">
          <Link href={'/home'}>@{creator}</Link>
        </div>
        <div className="mb-3 flex justify-between">
          <div>
            <strong className="block text-sm font-bold text-gray-500 ">
              Tickets Remaining
            </strong>
            <p className="text-left text-xl font-bold leading-none text-purple-500 ">
              {ticketsAvailable} / {totalTickets}
            </p>
          </div>
          <div>
            <strong className="block text-sm font-bold text-gray-500 ">
              Price/Ticket
            </strong>
            <p className="text-left text-xl font-bold leading-none text-purple-500 ">
              {price.toFixed(4)} SOL
            </p>
          </div>
        </div>
        <RaffleButton onClick={handleClick} countdown={new Date(deadline)} />
      </div>
    </div>
  );
};

export default RaffleCard;
