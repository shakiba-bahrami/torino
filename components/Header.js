import { LuMenu } from "react-icons/lu";
import AuthSection from "@/components/authentication/AuthSection";

function Header() {
  return (
    <header className="flex h-[68px] items-center justify-between  ">
      <LuMenu
        className="text-secondary w-[30px] h-[30px] "
      />
      <AuthSection />
    </header>
  );
}

export default Header;
