import { Connection, type ConnectionConfig } from '@solana/web3.js';
import { createContext, useContext } from 'react';
import React, { type FC, type ReactNode, useMemo } from 'react';
import { WrapperConnection } from './ReadApi/WrapperConnection';
export interface ConnectionContextState {
  connection: WrapperConnection;
}

export const ConnectionContext = createContext<ConnectionContextState>(
  {} as ConnectionContextState
);

export function useConnection(): ConnectionContextState {
  return useContext(ConnectionContext);
}

export interface ConnectionProviderProps {
  children: ReactNode;
  endpoint: string;
  config?: ConnectionConfig;
}

export const ConnectionProvider: FC<ConnectionProviderProps> = ({
  children,
  endpoint,
  config = { commitment: 'confirmed' },
}) => {
  const connection = useMemo(
    () => new WrapperConnection(endpoint, config),
    [endpoint, config]
  );

  return (
    <ConnectionContext.Provider value={{ connection }}>
      {children}
    </ConnectionContext.Provider>
  );
};
