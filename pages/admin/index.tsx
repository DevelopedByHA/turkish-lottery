import Button from '@/components/common/button';
import AdminLayout from '@/components/layout/admin-layout';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

const Admin = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Petnet</title>
        <meta name="description" content="Home" />
      </Head>
      <section className="flex w-full flex-col items-center justify-center text-white  ">
        <h1 className="text-center text-4xl font-bold">Admin</h1>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <Link href={'admin/create'}>
            <Button> Create a raffle</Button>
          </Link>
          <Link href={'admin/delete'}>
            <Button> Remove a raffle</Button>
          </Link>
        </div>
      </section>
    </>
  );
};
Admin.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Admin;
