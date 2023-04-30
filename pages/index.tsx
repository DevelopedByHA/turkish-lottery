import RaffleList from '@/components/common/raffle-list';
import RaffleLayout from '@/components/layout/raffle-layout';
import { ReactElement } from 'react';

export default function Home() {
  return <RaffleList />;
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <RaffleLayout>{page}</RaffleLayout>;
};
