// components/Container.jsx

export default function Container({ children}) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[clamp(31px,calc(9.05vw-4.3px),126px)] flex flex-col flex-1 mx-auto">
      {children}
    </div>
  );
}
