"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



function NavLinks({onClose}) {
    const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-col gap-6 md:flex-row md:gap-12">
        <li>
          <Link
            onClick={onClose}
            href="/"
            className={pathname === "/" ? "text-primary" : "text-[#595959]"}
          >
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link
            onClick={onClose}
            href="/tours-services"
            className={
              pathname === "/tours-services" ? "text-primary" : "text-[#595959]"
            }
          >
            خدمات گردشگری
          </Link>
        </li>
        <li>
          <Link
            onClick={onClose}
            href="/about-us"
            className={
              pathname === "/about-us" ? "text-primary" : "text-[#595959]"
            }
          >
            درباره ما
          </Link>
        </li>
        <li>
          <Link
            onClick={onClose}
            href="/contact-us"
            className={
              pathname === "/contact-us" ? "text-primary" : "text-[#595959]"
            }
          >
            تماس با ما
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
