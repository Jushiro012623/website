"use client";
import TextDipserse from "../text-disperse";
import { NavItem } from "./nav-items";
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <>
        <div className="flex h-full justify-between items-center gap-y-4 py-5 mx-auto sm:px-5 px-5">
          <div className="flex gap-2">
            <p className="text-lg text-white font-extrabold">IVAN</p>
          </div>
          <NavItem />
        </div>
      </>
    </header>
  );
};

export default Navbar;
