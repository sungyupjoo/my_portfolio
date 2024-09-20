"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkType {
  name: string;
  path: string;
}

const links: LinkType[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link: LinkType, index: number) => {
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
