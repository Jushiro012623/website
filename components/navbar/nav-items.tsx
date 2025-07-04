"use client";

import React from "react";
import { NavLinks } from "./types";
import TextDipserse from "../text-disperse";

export const navLinks = [
  {
    id: 1,
    name: "BLOG",
    href: "#blog",
  },
  {
    id: 2,
    name: "CONTACT",
    href: "#contact",
  },
  {
    id: 3,
    name: "LINKEDIN",
    href: "#linkedin",
  },
];

export const NavItem = ({ onClick = () => {} }) => {
  return (
    <ul className="flex items-start gap-4 relative">
      {navLinks.map((item: NavLinks) => (
        <li key={item.id} className="text-white link-text relative">
          <TextDipserse className="text-xs">
            <p onClick={onClick}>{item.name}</p>
          </TextDipserse>
        </li>
      ))}
    </ul>
  );
};
