"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { BsAirplaneEngines } from "react-icons/bs";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";

function NavLinks({ onClose }) {
  const pathname = usePathname();

  const links = [
    { href: "/", title: "صفحه اصلی", icon: FaHome },
    {
      href: "/tours-services",
      title: "خدمات گردشگری",
      icon: BsAirplaneEngines,
    },
    { href: "/about-us", title: "درباره ما", icon: HiMiniSpeakerWave },
    { href: "/contact-us", title: "تماس با ما", icon: IoCallOutline },
  ];

  return (
    <nav>
      <ul className="flex flex-col gap-5 md:flex-row md:gap-3 lg:gap-8 text-[16px] md:text-[14px] lg:text-[clamp(14px,1.11vw,16px)] [&>li]:pr-[10px] md:[&>li]:pr-0 [&>li]:fw-500 md:[&>li>*:first-child]:hidden">
        {links.map(({ href, title, icon: Icon }) => (
          <li
            key={href}
            className={`flex items-center gap-1 ${
              pathname === href ? "text-primary" : "text-[#595959]"
            }`}
          >
            <Icon className="text-inherit" />
            <Link href={href} onClick={onClose} className="text-inherit">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
