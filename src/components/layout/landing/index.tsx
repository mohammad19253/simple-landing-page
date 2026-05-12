import React, { ReactNode } from "react";
import { LandingFooter } from "./footer";
import { LandingHeader } from "./header";
import { NAV_ITEMS } from "@/mock-data";

export const LandingLayout: React.FC<{ children: ReactNode , }> = ({
  children,
}) => {
  return (
    <div>
      <LandingHeader navItems={NAV_ITEMS}/>
      {children}
      <LandingFooter />
    </div>
  );
};
