// components/Container.jsx

export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-[31px] ${className}`}>
      {children}
    </div>
  );
}
