import { RaffleType } from '@/types/raffle';
import { addLock, removeLock } from '@/utils/body';
import { createContext, useContext, useState } from 'react';

type SliderContextValue = {
  sliderIsOpen: boolean;
  setSliderIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  slideData: RaffleType | null;
  setSlideData: React.Dispatch<React.SetStateAction<RaffleType | null>>;
  openSlider: (slideData: RaffleType) => void;
  closeSlider: () => void;
};
const SliderContext = createContext<SliderContextValue>({
  sliderIsOpen: false,
  setSliderIsOpen: () => {},
  openSlider: () => {},
  closeSlider: () => {},
  slideData: null,
  setSlideData: () => {},
});
export default SliderContext;

const SliderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  const [slideData, setSlideData] = useState<RaffleType | null>(null); // [raffleId, raffleData
  const openSlider = (slideData: RaffleType) => {
    setSlideData(slideData);
    setSliderIsOpen(true);
    addLock();
  };
  const closeSlider = () => {
    setSliderIsOpen(false);
    setTimeout(() => {
      setSlideData(null);
    }, 1000);
    removeLock();
  };
  const value = {
    sliderIsOpen,
    setSliderIsOpen,
    openSlider,
    closeSlider,
    slideData,
    setSlideData,
  };

  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
};
const useSliderContext = () => {
  const context = useContext(SliderContext);
  if (context === undefined) {
    throw new Error('useSlider must be used within a SliderContextProvider');
  }
  return context;
};
export { SliderContextProvider, useSliderContext };
