/* eslint-disable camelcase */
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Router, useRouter } from 'next/router';
import { toast } from 'react-toastify';

type AuthContextProps = {
  isAuthorized: boolean;
  signIn: (walletPublicKey: string) => void;
  signOut: () => void;
};
const AuthContext = createContext<AuthContextProps>({
  isAuthorized: true,
  signIn: () => {},
  signOut: () => {},
});
type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [isAuthorized, setIsAuthorized] = useState<boolean>(true);
  const router = useRouter();

  const signIn = (walletPublicKey: string) => {
    if (!walletPublicKey) return;
    if (walletPublicKey !== process.env.NEXT_PUBLIC_ADMIN_PUBLIC_KEY) return;
    setIsAuthorized(true);
    sessionStorage.setItem('admin', walletPublicKey);
  };

  const signOut = async () => {
    sessionStorage.clear();
    // setIsAuthorized(false);
    router.replace('/');
  };

  const value = {
    isAuthorized,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const router = useRouter();

  // if (typeof window !== 'undefined' && !auth.isAuthorized) {
  //   toast.error('You are not authorized to view this page');

  //   router.push('/');
  // }

  return <>{children}</>;
};

export { AuthProvider, useAuth, AuthGuard };
