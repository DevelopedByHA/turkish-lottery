import { createContext, useContext, useMemo } from 'react';
import { useConnection } from './connection';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  Metaplex,
  bundlrStorage,
  walletAdapterIdentity,
} from '@metaplex-foundation/js';

const DEFAULT_CONTEXT = {
  metaplex: null as Metaplex | null,
};

export const MetaplexContext = createContext(DEFAULT_CONTEXT);

export function useMetaplex() {
  const context = useContext(MetaplexContext);
  if (!context) {
    throw new Error('Missing Metaplex context');
  }
  return context;
}
export const MetaplexProvider = ({ children }: { children: any }) => {
  const { connection } = useConnection();
  const wallet = useWallet();

  const metaplex = useMemo(
    () =>
      Metaplex.make(connection)
        .use(walletAdapterIdentity(wallet))
        .use(
          bundlrStorage({
            address: 'https://devnet.bundlr.network',
            providerUrl: 'https://api.devnet.solana.com',
            timeout: 60000,
          })
        ),
    [connection, wallet]
  );

  return (
    <MetaplexContext.Provider value={{ metaplex: metaplex }}>
      {children}
    </MetaplexContext.Provider>
  );
};
