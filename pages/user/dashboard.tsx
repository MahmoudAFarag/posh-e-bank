import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { Grid } from '@components/ui';
import { Spinner } from '@components/ui';

const UserDashboard = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <Grid>
      <div className='flex flex-col items-start gap-2 mt-24 mx-auto'>
        <Image src={session?.user?.image as string} alt='user image' width={200} height={200} className='rounded' />
        <h1 className='font-bold text-xl'>{session?.user?.name}</h1>
        <h3 className='text-base text-gray-400'>{session?.admin ? 'User' : 'Admin'}</h3>

        {session?.active === true ? (
          <div className='flex items-center'>
            <div className='bg-green-500 rounded-full w-8 h-8'></div>
            <p className='text-green-500 text-base ml-2 uppercase'>Active Account</p>
          </div>
        ) : (
          <div className='flex items-center'>
            <div className='bg-blue-500 rounded-full w-8 h-8'></div>
            <p className='text-blue-500 text-base ml-2'>Pending Verification</p>
          </div>
        )}
      </div>
      <div>
        {/* profile info table */}
        <div className='flex flex-col items-start gap-2 mt-24 mx-auto'>
          <h1 className='font-bold text-xl'>Profile</h1>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-base text-gray-600'>Name:</h3>
              <h3 className='text-xl text-black'>{session?.user?.name}</h3>

              <h3 className='text-base text-gray-600'>Email:</h3>
              <h3 className='text-xl text-black'>{session?.user?.email}</h3>

              <h3 className='text-base text-gray-600'>Phone:</h3>
              <h3 className='text-xl text-black'>undefined</h3>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default UserDashboard;
