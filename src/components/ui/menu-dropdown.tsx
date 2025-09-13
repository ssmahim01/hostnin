"use client";
import React, { useState, useEffect, useRef, ReactNode } from "react";
import { Button } from "./button";
import {
  BadgePlus,
  FilePen,
  LayoutDashboard,
  LogIn,
  Wrench,
} from "lucide-react";
import { AuthModal } from "../auth/auth-modal";

interface DropdownMenuProps {
  children: ReactNode;
  trigger: (isOpen: boolean) => ReactNode;
}

const DropdownMenu = ({ children, trigger }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={handleTriggerClick} className="cursor-pointer">
        {trigger(isOpen)}
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-64 rounded-2xl shadow-xl bg-white dark:bg-zinc-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-in fade-in-0 zoom-in-95 p-2"
          role="menu"
          aria-orientation="vertical"
        >
          {children}
        </div>
      )}
    </div>
  );
};

interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
}

const DropdownMenuItem = ({
  children,
  onClick,
  active = false,
}: DropdownMenuItemProps) => (
  <a
    href="#"
    onClick={(e: React.MouseEvent) => {
      e.preventDefault();
      if (onClick) onClick();
    }}
    className={`
      text-zinc-800 dark:text-zinc-200 font-medium group flex items-center 
      px-3 py-2.5 text-sm rounded-lg transition-colors duration-150
      ${
        active
          ? "bg-zinc-100 dark:bg-zinc-800"
          : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
      }
    `}
    role="menuitem"
  >
    {children}
  </a>
);

const DropdownMenuSeparator = () => (
  <div className="my-2 h-px bg-zinc-200 dark:bg-zinc-700" />
);

export default function Dropdown() {
  const [authOpen, setAuthOpen] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<"login" | "register">("login");

  return (
    <div className=" flex items-center justify-center font-sans p-2">
      <DropdownMenu
        trigger={(isOpen) => (
          <Button
            variant={"outline"}
            className={`border-2 p-5 hover:cursor-pointer rounded-md font-bold 
              ${
                isOpen
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-blue-600 border-blue-600 hover:bg-blue-700 hover:text-white hover:border-none"
              }`}
          >
            Dashboard
          </Button>
        )}
      >
        <div className="flex flex-col space-y-1">
          <DropdownMenuItem
            onClick={() => window.open("https://my.hostnin.com", "_blank")}
            active={true}
          >
            <LayoutDashboard className="mr-3 h-5 w-5 text-zinc-500" />
            <span>Dashboard</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => {
              setAuthMode("login");
              setAuthOpen(true);
            }}
          >
            <LogIn className="mr-3 h-5 w-5" />
            <span>Login</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setAuthMode("register");
              setAuthOpen(true);
            }}
          >
            <FilePen className="mr-3 h-5 w-5" />
            <span>Register</span>
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <div className="flex flex-col space-y-1">
          <DropdownMenuItem
            onClick={() => (
              (window.location.href =
                "https://my.hostnin.com/index.php/store/marketgoo"),
              "_blank"
            )}
          >
            <Wrench className="mr-3 h-5 w-5 text-zinc-500" />
            <span>SEO Tools</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => (
              (window.location.href =
                "https://my.hostnin.com/cart.php?a=add&domain=register"),
              "_blank"
            )}
          >
            <BadgePlus className="mr-3 h-5 w-5 text-zinc-500" />
            <span>Register A New Domain</span>
          </DropdownMenuItem>
        </div>
      </DropdownMenu>

      <AuthModal
        open={authOpen}
        mode={authMode}
        onOpenChange={setAuthOpen}
        onModeChange={setAuthMode}
      />
    </div>
  );
}
