import NavigationBar from "~/components/navigationBar/navigationBar";

import type { ReactNode } from "react";
import Footer from "~/components/footer/footer";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};
