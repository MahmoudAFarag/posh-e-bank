import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

import Logo from '@public/images/logo.png';
import { Button } from '@components/ui';

const Header = () => {
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <header className='h-16 border-t-4 border-red-700 relative flex items-center bg-gray-50 p-2'>
      <div className='mr-auto'>
        <Link href='/' passHref>
          <a className='flex items-center'>
            <Image src={Logo} alt='website logo' width={100} height={70} />
            <h1 className='uppercase text-xl ml-[-1rem]'>Posh Bank</h1>
          </a>
        </Link>
      </div>
      <div className='flex gap-3'>
        {status === 'authenticated' ? (
          <div className='flex items-center gap-3'>
            <p className='tracking-tight'>Welcome, {session.user?.name}</p>
            <Link
              href={{
                pathname: `${session.admin ? '/admin/dashboard' : '/user/dashboard'}`,
              }}
            >
              <a>
                <Button variant='outline'>Dashboard</Button>
              </a>
            </Link>

            <Button variant='outline' onClick={signOut}>
              Sign Out
            </Button>
          </div>
        ) : (
          <Button variant='outline' onClick={signIn}>
            Log In
          </Button>
        )}
        <Button variant='solid'>Apply Now</Button>
      </div>
    </header>
  );
};

export default Header;
