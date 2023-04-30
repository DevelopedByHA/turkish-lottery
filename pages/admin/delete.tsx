import AdminLayout from '@/components/layout/admin-layout';
import { ReactElement } from 'react';

const Delete = () => {
  return (
    <div>
      <h1>Delete</h1>
    </div>
  );
};

Delete.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default Delete;
