// Core imports
import Image from 'next/image';

// Components
import { Grid } from '@components/ui';
import HeroForm from './Form/HeroForm';

// Images
import HeroImg from '@public/images/hero.webp';

const Hero = () => {
  return (
    <Grid>
      <div className='flex justify-center flex-col gap-4 ml-4'>
        <h1 className='text-5xl tracking-tight font-extrabold flex justify-center flex-col gap-2'>
          <span>Banking &</span>
          <span>Budgeting, made</span>
          <span>Simple</span>
        </h1>
        <h3 className='tracking-wide text-lg'>Master your money through one app</h3>
        <HeroForm />
      </div>
      <Image src={HeroImg} alt='Hero image' />
    </Grid>
  );
};

export default Hero;
