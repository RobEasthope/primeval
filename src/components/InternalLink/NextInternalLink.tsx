import Link from "next/link";
import React from "react";

// Component props
export type NextInternalLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string | undefined;
  className?: string;
  children: React.ReactNode;
};

export function NextInternalLink({
  href,
  children,
  className,
  ...rest
}: NextInternalLinkProps) {
  if (!href && !children) {
    return null;
  }

  if (!href) {
    return <span className={className}>{children || null}</span>;
  }

  return (
    <Link
      href={href === "home" ? "/" : `/${href}`}
      className={className}
      role="link"
      tabIndex={0}
      {...rest}
    >
      {children || null}
    </Link>
  );
}
