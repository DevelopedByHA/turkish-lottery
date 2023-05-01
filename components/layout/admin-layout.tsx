import { AuthGuard } from '@/context/admin-context';
import { ModalContextProvider } from '@/context/modal-context';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default AdminLayout;
