"use client";

import { cn } from "@/lib/utils";
import { createContext, useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavigationContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NavigationContext = createContext<NavigationContextProps | null>(null);

export const useNavigation = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  return context;
};

export const NavigationProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <NavigationContext.Provider value={{ open, setOpen }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default function Navigation({
  children,
  open,
  setOpen,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) {
  return (
    <NavigationProvider open={open} setOpen={setOpen}>
      {children}
    </NavigationProvider>
  );
}

export const NavigationBody = (props: any) => {
  return (
    <>
      <DesktopNavigation {...(props as React.ComponentProps<"div">)} />
      <MobileNavigation {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopNavigation = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div className="fixed w-full z-10 p-4 hidden md:flex items-center justify-center">
      <nav
        className={cn(
          "flex items-center justify-between rounded-full bg-white/10 liquid p-4 w-full max-w-7xl mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </nav>
    </div>
  );
};

export const MobileNavigation = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useNavigation();

  return (
    <>
      <div
        className={cn(
          "fixed z-50 bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-between w-[90%] md:hidden",
          className
        )}
        {...props}
      >
        <div className="liquid rounded-full backdrop-blur-2xl cursor-pointer transition-transform duration-200 active:scale-95 h-12 w-12 flex items-center justify-center">
          <Link href={"/"}>
            <p className="text-lg md:xl font-semibold text-white/80">M.F</p>
          </Link>
        </div>

        <div
          className="liquid rounded-full backdrop-blur-2xl cursor-pointer transition-transform duration-200 active:scale-95 h-12 w-12 flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </div>

        <div
          className={cn(
            "fixed inset-0 z-[60] flex items-center justify-center transition-all duration-300 ease-in-out",
            {
              "translate-x-0 opacity-100 pointer-events-auto": open,
              "translate-x-100 opacity-0 pointer-events-none": !open,
            }
          )}
        >
          <div className="absolute inset-0" onClick={() => setOpen(false)} />
          <div className="absolute bottom-15 liquid right-0 z-10 cursor-pointer p-3 rounded-3xl backdrop-blur-2xl w-full">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export const NavigationLinks = ({
  link,
  className,
  ...props
}: {
  link: NavigationLink;
  className?: string;
  props?: LinkProps;
}) => {
  const handleScroll = (e: any, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        `flex flex-col md:flex-row items-center justify-center cursor-pointer hover:bg-white/50 hover:backdrop-blur-xl`,
        className
      )}
      onClick={(e) => handleScroll(e, link.href)}
      {...props}
    >
      <span
        className={cn(
          "text-sm transition-all duration-300 whitespace-pre",
          `opacity-100 inline-block hover:text-gray-600 text-white`
        )}
      >
        {link.name}
      </span>
    </div>
  );
};
