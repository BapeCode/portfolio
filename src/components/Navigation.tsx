"use client";

import { useState } from "react";
import { useMobile } from "@/hooks/useMobile";
import Navigation, { NavigationBody, NavigationLinks } from "./ui/navigation";

export default function NavigationComponent() {
  const mobile = useMobile();
  const [active, setActive] = useState(false);
  const nav = [
    {
      name: "About Me",
      href: "about",
    },
    {
      name: "Projects",
      href: "projects",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ];

  return (
    <Navigation>
      <NavigationBody>
        <p className="text-lg md:xl font-semibold text-white/80 hidden md:block">
          M.F
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-4">
          {nav.map((item, index) => {
            return <NavigationLinks key={index} link={item} />;
          })}
        </div>
      </NavigationBody>
    </Navigation>
  );
}
