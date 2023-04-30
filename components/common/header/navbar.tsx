import { FC } from 'react';
import NavItem from './nav-item';
import SolanaConnectButton from '../solana/connect-button';
import Link from 'next/link';
import { useAuth } from '@/context/admin-context';

type Props = {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
};
const Navbar: FC<Props> = ({ menuOpen, setMenuOpen }) => {
  const { isAuthorized } = useAuth();
  return (
    <div className="fixed left-0 top-0 z-[65] flex  h-[72px] w-full flex-row items-center justify-between bg-primary px-4 md:px-8">
      <Link href={'/home'}>logo here</Link>
      <div className="hidden md:block">
        <nav className="flex flex-row items-center gap-2">
          {isAuthorized && <NavItem title={'admin'} path="/admin" />}

          <SolanaConnectButton />
        </nav>
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-row items-center justify-center rounded-full bg-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
