type LayoutContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const baseClasses = "mx-auto w-full max-w-6xl px-5 md:px-10";

export default function LayoutContainer({
  children,
  className = "",
}: LayoutContainerProps) {
  return <div className={`${baseClasses} ${className}`}>{children}</div>;
}
