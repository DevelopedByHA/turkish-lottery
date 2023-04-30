import RaffleCard from '../raffle-card';
import Placeholder from '../../../public/nft-placeholder.png';

const RaffleList = () => {
  return (
    <div
      className={
        'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '
      }
    >
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <RaffleCard
            description=""
            price={Math.random() * 2}
            totalTickets={Math.ceil(Math.random() * 100)}
            ticketsAvailable={Math.floor(Math.random() * 100)}
            familyName="Theheist"
            nftName="The Heist #7608"
            creator="Dr_Psycho"
            image={Placeholder.src}
            id={i + ''}
            key={i}
            deadline={Date.now() + i * 5000}
          />
        ))}
    </div>
  );
};

export default RaffleList;
