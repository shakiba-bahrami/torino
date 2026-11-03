// components/Container.jsx

export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-[31px] ${className}`}>
      {children}
    </div>
  );
}
