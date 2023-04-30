export type RaffleType = {
  id: string;
  description: string;
  image: string;
  price: number;
  totalTickets: number;
  ticketsAvailable: number;
  winner?: string;
  deadline: number;
  familyName: string;
  nftName: string;
  creator: string;
};
