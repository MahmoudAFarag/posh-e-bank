import { Button } from '@components/ui';

const HeroForm = () => {
  return (
    <div className='flex gap-2'>
      <input
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-[50%]'
        type='email'
        placeholder='Enter your email'
      />
      <Button variant='solid'>Get Started</Button>
    </div>
  );
};

export default HeroForm;
