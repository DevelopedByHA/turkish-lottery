import { AnimatePresenceWrapper } from '@/components/common/animate-presence-wrapper';
import Modal from '@/components/common/modal';
import AdminLayout from '@/components/layout/admin-layout';
import CreateRaffle from '@/components/sections/admin/create';
import { ReactElement } from 'react';

const Create = () => {
  return <CreateRaffle />;
};

Create.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default Create;
