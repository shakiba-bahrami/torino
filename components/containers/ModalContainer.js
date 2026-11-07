function ModalContainer({ children, setIsLoginOpen }) {
  return (
    <div
      onClick={() => setIsLoginOpen(false)}
      className="fixed top-0 right-0 w-svw h-full bg-black/40 z-10 backdrop-blur-xs"
    >
      <div className="w-full h-full flex justify-center items-center ">
        <div
          onClick={(e) => e.stopPropagation()}
          className="min-w-10 min-h-10 bg-white rounded-[20px]"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
