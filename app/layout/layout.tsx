import NavigationBar from "~/navigationBar/navigationBar";

import type { ReactNode } from "react";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationBar />
      <div>{children}</div>
      <footer className="p-4 bg-gray-800 text-white">
        © 2025 Luke Chisnall.dev
      </footer>
    </>
  );
};
