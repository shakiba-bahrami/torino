"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar({ onClose }) {
  const pathname = usePathname();
  return (
    <>
      <button
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20"
        aria-label="بستن منو"
      />
      <aside className="fixed top-0 right-0 z-50 w-[200px] h-screen bg-white shadow-lg">
        <button onClick={onClose} className="p-3 text-xl">
          ×
        </button>

        <nav>
          <ul className="flex flex-col gap-6 p-4">
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
                  pathname === "/tours-services"
                    ? "text-primary"
                    : "text-[#595959]"
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
      </aside>
    </>
  );
}

export default Sidebar;
