import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const ContainerFluid: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={ `w-full max-w-[1680px] mx-auto px-2 xs:px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerFluid;
