import React from "react";

function ModalContainer({ children }) {
  return (
    <div className="fixed top-0 right-0 w-svw h-full bg-black/40 z-10 backdrop-blur-xs">
      <div className="w-full h-full flex justify-center items-center ">
        <div className="min-w-10 min-h-10 bg-white rounded-[20]">{children}</div>
      </div>
    </div>
  );
}

export default ModalContainer;
