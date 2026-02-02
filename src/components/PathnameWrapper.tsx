import { ReactNode } from "react";
import Navbar from "./header/navbar";

const PathnameWrapper = ({ children }: { children: ReactNode }) => {

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PathnameWrapper;