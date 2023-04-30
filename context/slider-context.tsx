import { addLock, removeLock } from '@/utils/body';
import { createContext, useContext, useState } from 'react';

type SliderContextValue = {
  sliderIsOpen: boolean;
  setSliderIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openSlider: () => void;
  closeSlider: () => void;
};
const SliderContext = createContext<SliderContextValue>({
  sliderIsOpen: false,
  setSliderIsOpen: () => {},
  openSlider: () => {},
  closeSlider: () => {},
});
export default SliderContext;

const SliderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sliderIsOpen, setSliderIsOpen] = useState(false);

  const openSlider = () => {
    setSliderIsOpen(true);
    addLock();
  };
  const closeSlider = () => {
    setSliderIsOpen(false);
    removeLock();
  };
  const value = { sliderIsOpen, setSliderIsOpen, openSlider, closeSlider };

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
