import { cn } from "@/lib/utils";

export function SubTitle({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("mb-4 text-center text-xl font-semibold", className)}>
      {children}
    </h2>
  );
}
