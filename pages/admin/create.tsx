import AdminLayout from '@/components/layout/admin-layout';
import { ReactElement } from 'react';

const Create = () => {
  return (
    <div>
      <h1>Create</h1>
    </div>
  );
};

Create.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default Create;
