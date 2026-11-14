import type { AnchorHTMLAttributes, ReactNode } from "react";
import FadeLink from "@/atoms/FadeLink";

type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: ReactNode;
  label: string;
};

export default function IconLink({ icon, label, className = "", ...props }: IconLinkProps) {
  return (
    <FadeLink tone="ivory" className={`flex flex-col items-center gap-2 ${className}`} {...props}>
      {icon}
      <span className="text-sm">{label}</span>
    </FadeLink>
  );
}
