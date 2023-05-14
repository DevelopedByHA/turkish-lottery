import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const SolanaConnectButton = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  return <WalletMultiButton />;
};

export default SolanaConnectButton;
