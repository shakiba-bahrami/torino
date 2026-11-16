"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";

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
        <NavLinks onClose={onClose} />
      </aside>
    </>
  );
}

export default Sidebar;
