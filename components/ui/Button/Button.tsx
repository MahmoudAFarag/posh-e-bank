interface IProps {
  children: React.ReactNode;
  variant: 'solid' | 'outline';
}

const Button = ({ children, variant }: IProps) => {
  let btnStyle =
    'border-2 border-red-500 py-1.5 px-5 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200 ease-in-out';

  if (variant === 'solid') {
    btnStyle = 'py-1.5 px-5 bg-red-600 text-white transition-colors duration-200 ease-in-out';
  }

  return (
    <button className={`${btnStyle}`}>
      <span className='font-bold'>{children}</span>
    </button>
  );
};

export default Button;
