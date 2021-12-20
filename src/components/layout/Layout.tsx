import { FC } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactChildren | React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="main">{children}</div>
    </>
  );
};

export default Layout;
