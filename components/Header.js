import { LuMenu } from "react-icons/lu";
import AuthSection from "@/components/authentication/AuthSection";

function Header() {
  return (
    <header className="w-full flex h-[68px] ">
      <div className="flex items-center justify-between border-b border-[#10411B]/25 shadow-[0px_1px_4px_0px_#00000040] mx-auto w-full max-w-[1440px] px-[31px]">
        <LuMenu className="text-secondary w-[30px] h-[30px] " />
        <AuthSection />
      </div>
    </header>
  );
}

export default Header;
