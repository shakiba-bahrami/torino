import AuthSection from "@/components/authentication/AuthSection";
import MenuButton from "./MenuButton";
import NavLinks from "./NavLinks";
import Link from "next/link";

function Header({ setIsLoginOpen }) {
  return (
    <header className="relative mx-auto w-full max-w-[1440px] h-[65px] md:h-[clamp(65px,5.14vw,74px)] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-between h-full px-[30px] lg:px-[100px] ">
        <div className="md:hidden mt-[10px]">
          <MenuButton />
        </div>
        <div className="hidden md:block md:items-center md:gap-[clamp(16px,3.33vw,48px)] md:flex">
          <Link href="/">
            <img
              src="/images/torino.png"
              alt=""
              className="w-[130px] h-auto ml-[20px] lg:w-[146px]"
            />
          </Link>
          <div className="hidden md:block">
            <NavLinks />
          </div>
        </div>

        <AuthSection setIsLoginOpen={setIsLoginOpen} />
      </div>
    </header>
  );
}

export default Header;
