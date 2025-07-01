import Header from "./header";
import { cx } from "class-variance-authority";

export default function MainLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <Header />
      <main className={cx("px-6", className)}>{children}</main>
    </div>
  );
}
