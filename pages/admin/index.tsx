import Button from '@/components/common/button';
import AdminLayout from '@/components/layout/admin-layout';
import Head from 'next/head';
import { ReactElement, useEffect } from 'react';

const Admin = () => {
  return (
    <>
      <Head>
        <title>Petnet</title>
        <meta name="description" content="Home" />
      </Head>
      <section className="flex w-full flex-col items-center justify-center text-white  ">
        <h1 className="text-center text-4xl font-bold">Admin</h1>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <Button> Create a raffle</Button>
          <Button> Create a raffle</Button>
        </div>
      </section>
    </>
  );
};
Admin.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Admin;
