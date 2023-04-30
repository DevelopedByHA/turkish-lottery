import { AuthGuard } from '@/context/admin-context';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default AdminLayout;
