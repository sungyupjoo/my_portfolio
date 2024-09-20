"use client";

import Link from "next/link";
import { navigationLinks } from "@/static/constants/navigationLinks";
import { LinkType } from "@/static/constants/navigationLinks";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {navigationLinks.map((link: LinkType, index: number) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } font-medium hover:text-accent transition-all
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
