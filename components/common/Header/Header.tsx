import Link from 'next/link';
import Image from 'next/image';

import Logo from '@public/images/logo.png';
import { Button } from '@components/ui';

const Header = () => {
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
        <Button variant='outline'>Log In</Button>
        <Button variant='solid'>Apply Now</Button>
      </div>
    </header>
  );
};

export default Header;
