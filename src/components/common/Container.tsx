import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={ `max-w-[95%] xl:max-w-7xl mx-auto px-2 xs:px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
