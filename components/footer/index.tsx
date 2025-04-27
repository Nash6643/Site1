import Link from "@/components/link";
import { AppThemeSwitcher } from "@/components/theme";

const Footer = () => {
  return (
    <div className="flex w-full flex-col gap-3 border-border border-t pt-4">
      <div className="flex w-full items-center justify-between">
        <div className="px-[2px] text-muted text-small">
          Developed by <Link href="https://github.com/WUFAZA" text="iBz" underline />
        </div>
        <div className="text-muted text-small">
          <AppThemeSwitcher />
        </div>
      </div>
      <div className="flex items-center gap-4 pb-2 text-muted text-small">
        <Link href="https://github.com/WUFAZA/Minisite_01" text="GitHub" underline />
        <Link href="https://twitter.com/" text="Twitter" underline />
        <Link href="/guides" text="Guides" underline />
      </div>
    </div>
  );
};

export { Footer };
