interface IProps {
  children: React.ReactNode;
}

const Grid = ({ children }: IProps) => {
  return <div className='grid grid-cols-2 p-7'>{children}</div>;
};

export default Grid;
