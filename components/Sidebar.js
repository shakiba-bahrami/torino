"use client";
import NavLinks from "./NavLinks";

function Sidebar({ onClose }) {
  return (
    <>
      <button
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20"
        aria-label="بستن منو"
      />
      <aside className="fixed top-0 right-0 z-50 w-[209px] h-screen bg-white shadow-lg rounded-l-xl pt-[30px] pr-[10px]">
        <NavLinks onClose={onClose} />
      </aside>
    </>
  );
}

export default Sidebar;
