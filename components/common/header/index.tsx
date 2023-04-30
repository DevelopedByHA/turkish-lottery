import { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import { useWallet } from '@solana/wallet-adapter-react';
import { useAuth } from '@/context/admin-context';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const closeMenu = () => setMenuOpen(false);
  const { publicKey, connected } = useWallet();
  const { signIn, signOut } = useAuth();
  useEffect(() => {
    if (connected && publicKey) {
      signIn(publicKey.toBase58());
    } else {
      signOut();
    }
  }, [connected]);
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar menuOpen={menuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Header;
