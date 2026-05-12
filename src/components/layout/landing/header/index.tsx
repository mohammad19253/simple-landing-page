import { DesktopNavbar } from "./navbar/DesktopNavbar";
import { MobileNavbar } from "./navbar/MobileNavbar";
import { UserAction } from "./user-action";
import { navItems } from "./navbar/type";

export const LandingHeader = ({ navItems }: { navItems: navItems[] }) => {
  return (
    <div className="bg-white flex justify-center">
      <section className="flex justify-between items-center container max-w-7xl py-2 px-4">
        <div className="flex gap-2 items-center">
          <MobileNavbar navItems={navItems} />
          <a
            className="bg-gray-200 text-black rounded-2xl text-center py-1 px-6"
            href="/"
          >
            logo
          </a>
        </div>
        <DesktopNavbar navItems={navItems} />

        <UserAction />
      </section>
    </div>
  );
};
