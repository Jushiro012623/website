"use client";
import TextDipserse from "../text-disperse";
import { NavItem } from "./nav-items";
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-40">
      <div>
        <div className="flex flex-col gap-y-4 py-5 my-auto sm:px-5 px-5">
          <div className="flex gap-2">
            <TextDipserse className="text-lg text-white font-extrabold">
              <p>IVAN</p>
            </TextDipserse>
            <TextDipserse className="text-lg text-white font-extrabold">
              <p>MARTIN</p>
            </TextDipserse>
          </div>
          <NavItem />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
