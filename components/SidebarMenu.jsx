"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";
import Link from "next/link";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SidebarContext = createContext();

const SidebarMenu = ({ children }) => {
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setExpand(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={expand ? "w-60 p-2" : "w-fit p-2"}>
      <div className="flex items-center justify-start">
        <button
          className=" text-md w-fit whitespace-nowrap rounded-full p-3 font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          onClick={() => setExpand(!expand)}
        >
          {expand ? (
            <LuPanelRightOpen size={20} />
          ) : (
            <LuPanelLeftOpen size={20} />
          )}
        </button>
        {expand && (
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            priority
            className="ml-2"
          />
        )}
      </div>
      <ScrollArea className="h-[90dvh]">
        <SidebarContext.Provider value={{ expand }}>
          <ul>{children}</ul>
        </SidebarContext.Provider>
      </ScrollArea>
    </div>
  );
};

export function SidebarMenuItem({ icon, text, link, active, alert }) {
  const { expand } = useContext(SidebarContext);

  return (
    <Link
      className={` group
         relative my-1 flex cursor-pointer
        items-center rounded-md px-3
        py-2 font-medium transition-colors hover:bg-accent
        ${active ? "" : "text-gray-600"}
    `}
      href={link}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expand ? "ml-3 w-full" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 h-2 w-2 rounded bg-red-600 ${
            expand ? "" : "top-2"
          }`}
        />
      )}
      {!expand && (
        <div
          className={`
          invisible absolute left-full ml-6 -translate-x-3 rounded-md px-2
          py-1 text-sm opacity-20 transition-all
          group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
      `}
        >
          {text}
        </div>
      )}
    </Link>
  );
}

export function SidebarMenuChannel({ icon, text, link, active, alert }) {
  const { expand } = useContext(SidebarContext);

  return (
    <Link
      className={` group
         relative my-1 flex cursor-pointer
        items-center rounded-md px-3
        py-1 font-medium transition-colors hover:bg-accent
        ${active ? "" : "text-gray-600"}
    `}
      href={link}
    >
      <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span
        className={`overflow-hidden transition-all ${
          expand ? "ml-3 w-full" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 h-2 w-2 rounded bg-red-600 ${
            expand ? "" : "top-2"
          }`}
        />
      )}
      {!expand && (
        <div
          className={`
          invisible absolute left-full ml-6 -translate-x-3 rounded-md px-2
          py-1 text-sm opacity-20 transition-all
          group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
      `}
        >
          {text}
        </div>
      )}
    </Link>
  );
}

export function SidebarMenuTitle({ text, active, link, icon }) {
  const { expand } = useContext(SidebarContext);
  return (
    <Link
      className={`group
         relative my-1 flex cursor-pointer
        items-center rounded-md  px-3
        py-2 font-medium transition-colors hover:bg-accent
        ${active ? "" : "text-gray-600"}
    `}
      href={link}
    >
      <span
        className={`overflow-hidden transition-all ${
          expand ? "ml-3 w-full" : "w-0"
        }`}
      >
        {text}
      </span>
      {icon}
      {!expand && (
        <div
          className={`
          invisible absolute left-full ml-6 -translate-x-3 rounded-md px-2
          py-1 text-sm opacity-20 transition-all
          group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
      `}
        >
          {text}
        </div>
      )}
    </Link>
  );
}

export function SidebarMenuSeperator() {
  return <li className="h-[1px] w-full shrink-0 bg-border"></li>;
}

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const { expand } = useContext(SidebarContext);
  return (
    <>
      {!expand && (
        <button
          className="inline-flex h-fit w-full items-center  justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className=" absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
      )}
    </>
  );
}

export default SidebarMenu;
