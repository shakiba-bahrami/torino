import AuthSection from "@/components/authentication/AuthSection";
import MenuButton from "./MenuButton";
import NavLinks from "./NavLinks";

function Header({ setIsLoginOpen }) {
  return (
    <header className="w-full overflow-hidden flex h-[64px] md:h-[74px]">
      <div className="flex items-center rounded-t-xl bg-white justify-between px-[20px] border-b border-[#10411B]/1 shadow-[0px_1px_5px_0px_#00000030] mx-auto w-full max-w-[1440px] md:px-[100px]">
        <div className="md:hidden">
          <MenuButton />
        </div>
        <div className="hidden md:block md:items-center md:gap-12 md:flex">
          <img src="/images/torino.png" alt="" className="w-[190px] h-auto" />
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
