import { FC } from 'react';
import Countdown from 'react-countdown';

// Renderer callback with condition
const renderer = ({
  hours,
  minutes,
  seconds,
  completed,
}: {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    // Render a completed state
    return 'Raffle Ended';
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};
type RaffleButtonProps = {
  countdown: Date;
  onClick?: () => void;
};
const RaffleButton: FC<RaffleButtonProps> = ({ countdown, onClick }) => {
  return (
    <div className="flex justify-between gap-x-3" onClick={onClick}>
      <button className="mt-2 block flex-1 rounded-2xl border border-indigo-500 bg-gradient-to-t from-indigo-600 to-indigo-500 py-3 text-center text-xl text-white opacity-90 transition-all hover:opacity-100 ">
        <strong className="block leading-tight">View Raffle</strong>
        <span className="block text-sm">
          <Countdown date={countdown} renderer={renderer} />
        </span>
      </button>
    </div>
  );
};

export default RaffleButton;
