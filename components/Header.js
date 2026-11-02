import React from "react";
import { LuMenu } from "react-icons/lu";

function Header() {
  return (
    <header className="flex h-[68px] items-center justify-between  ">
      <LuMenu className="text-secondary w-[30px] h-[30px] " />
      <img src="/icons/login.svg" className="w-[40px] h-auto ml-[5px]" />
    </header>
  );
}

export default Header;
