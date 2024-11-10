'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { navigationLinks } from '@/static/constants/navigationLinks';

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold m-2 mb-4">
              sungyup<span className="text-accent">.</span>
            </h1>
            <p className="text-sm font-m">
              <span className="text-accent">frontend</span> dev
            </p>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {navigationLinks.map((link, index) => {
            return (
              <SheetClose key={index} asChild>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathname &&
                    'text-accent border-b2 border-accent'
                  } text-xl capitalize hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
