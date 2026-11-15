"use client";

import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import Sidebar from "./Sidebar";

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="cursor-pointer"
      >
        <LuMenu className="text-secondary w-[30px] h-[30px]" />
      </button>

      {isMenuOpen && <Sidebar onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default MenuButton;
