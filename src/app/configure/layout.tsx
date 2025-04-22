import MaxWithWrapper from "@/components/MaxWithWrapper";
import Steps from "@/components/Steps";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWithWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWithWrapper>
  );
};

export default Layout;
