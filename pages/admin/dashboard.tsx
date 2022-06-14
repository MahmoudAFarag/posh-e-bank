import type { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import prisma from '@lib/prisma';

interface IProps {
  admin: boolean;
}

const AdminDashboard = ({ admin }: IProps) => {
  const { data: session } = useSession();

  if (!admin) {
    return <p>You are not authorized.</p>;
  }

  return (
    <>
      <h1>Admin Dashboard</h1>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      props: {
        admin: false,
      },
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email,
    },
  });

  if (user.admin !== true) {
    return {
      props: {
        admin: false,
      },
    };
  }

  return {
    props: {
      admin: user.admin,
    },
  };
};

export default AdminDashboard;
