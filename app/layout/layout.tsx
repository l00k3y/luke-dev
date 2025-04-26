import NavigationBar from "~/components/navigationBar/navigationBar";

import type { ReactNode } from "react";
import Footer from "~/components/footer/footer";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationBar />
      <div style={{ height: "82vh", width: "100vw" }}>{children}</div>
      <Footer />
    </>
  );
};
