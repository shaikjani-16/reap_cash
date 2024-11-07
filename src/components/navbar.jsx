"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-lg mx-auto z-50 sm:mt-8 md:mt-0",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href="/contact">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
        <Link href="/faq">
          <MenuItem setActive={setActive} active={active} item="FAQ"></MenuItem>
        </Link>
        <Link href="/about">
          <MenuItem
            setActive={setActive}
            active={active}
            item="About Us"
          ></MenuItem>
        </Link>
        <Link href="/pricing">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Pricing"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
