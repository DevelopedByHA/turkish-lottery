import RaffleCard from '../raffle-card';

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
          <RaffleCard key={i} countdown={Date.now() + i * 5000} />
        ))}
    </div>
  );
};

export default RaffleList;
