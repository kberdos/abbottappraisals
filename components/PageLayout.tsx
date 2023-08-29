import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

type pageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: pageLayoutProps) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-none border">
          <Navbar />
        </div>
        <div className="grow border">{children}</div>
        <div className="flex-none border">
          <Footer />
        </div>
      </div>
    </>
  );
}
