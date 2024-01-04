"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { NavbarRightSide } from "./components/navbar-right-side";
const pagesWithoutNavbar: string[] = ["/login", "/register"];
export const Navbar = () => {
  const pathname = usePathname();

  const shouldNotShowNavbar = useMemo(
    () => pagesWithoutNavbar.includes(pathname),
    [pathname]
  );

  if (shouldNotShowNavbar) {
    return null;
  }

  return (
    <nav className="px-10 z-50 py-3 shadow-sm shadow-gray-400 fixed w-screen overflow-hidden bg-white flex justify-between items-center">
      <div>Navbar</div>
      <NavbarRightSide />
    </nav>
  );
};
