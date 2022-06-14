import Link from 'next/link';
import Image from 'next/image';

import Logo from '@public/images/logo.png';
import FacebookLogo from '@public/images/facebook.svg';
import InstragramLogo from '@public/images/instagram.svg';
import TwitterLogo from '@public/images/twitter.svg';

const Footer = () => {
  return (
    <footer className='bg-gray-100 border-b-4 border-red-700 flex items-center h-16 p-6'>
      <div className='flex gap-7 mr-auto items-center'>
        <h1>About</h1>
        <h1>Resources</h1>
        <Image src={FacebookLogo} alt='facebook logo' width={20} />
        <Image src={InstragramLogo} alt='instagram logo' width={20} />
        <Image src={TwitterLogo} alt='twitter logo' width={20} />
      </div>
      <Link href='/' passHref>
        <a className='flex items-center'>
          <Image src={Logo} alt='website logo' width={60} height={40} />
          <h1 className='uppercase text-base ml-[-1rem]'>Posh Bank</h1>
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
