import { SliderContextProvider } from '@/context/slider-context';
import { AnimatePresenceWrapper } from '../common/animate-presence-wrapper';
import Footer from '../common/footer/footer';
import Header from '../common/header';
import RaffleSlider from '../common/raffle-slider';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SliderContextProvider>
      <Header />
      <main className="min-h-screen  pt-[72px]">{children}</main>
      <Footer />
      <AnimatePresenceWrapper>
        <RaffleSlider />
      </AnimatePresenceWrapper>
    </SliderContextProvider>
  );
};

export default BaseLayout;
