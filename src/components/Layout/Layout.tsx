import React from "react";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="pt-4 m-auto max-w-screen-lg">{children}</div>;
};
