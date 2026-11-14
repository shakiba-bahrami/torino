import { LuMenu } from "react-icons/lu";
import AuthSection from "@/components/authentication/AuthSection";

function Header({ setIsLoginOpen }) {
  return (
    <header className="w-full flex h-[64px] ">
      <div className="flex items-center justify-between border-b border-[#10411B]/1 shadow-[0px_1px_5px_0px_#00000030] mx-auto w-full max-w-[1440px] px-[31px]">
        <LuMenu className="text-secondary w-[30px] h-[30px] " />
        <AuthSection setIsLoginOpen={setIsLoginOpen} />
      </div>
    </header>
  );
}

export default Header;
