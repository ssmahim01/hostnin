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
import Link from "next/link";

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
          className="origin-top-right absolute right-0 mt-2 w-64 rounded-xl shadow-xl bg-white dark:bg-slate-900 ring-1 ring-accent ring-opacity-5 focus:outline-none z-50 animate-in fade-in-0 zoom-in-95 p-2"
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
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

const DropdownMenuItem = ({
  children,
  href,
  onClick,
  active = false,
}: DropdownMenuItemProps) => (
  <Link
    href={href || ""}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`
      text-zinc-800 dark:text-zinc-200 font-medium group flex items-center 
      px-3 py-2.5 text-sm rounded-lg transition-colors duration-150
      ${
        active
          ? "bg-zinc-100 dark:bg-slate-800"
          : "hover:bg-zinc-100 dark:hover:bg-slate-900"
      }
    `}
    role="menuitem"
  >
    {children}
  </Link>
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
            variant="outline"
            className={`border-2 p-5 rounded-md font-bold 
    transition-colors duration-300 ease-in-out hover:cursor-pointer
    ${
      isOpen
        ? "bg-blue-600 text-white border-blue-600"
        : "text-blue-600 dark:text-gray-100 border-blue-600 hover:bg-blue-700 dark:hover:text-white/95 hover:text-white hover:border-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
    }`}
          >
            Dashboard
          </Button>
        )}
      >
        <div className="flex flex-col space-y-1">
          <DropdownMenuItem href="https://my.hostnin.com" active>
            <LayoutDashboard className="mr-3 h-5 w-5" />
            <span>Dashboard</span>
          </DropdownMenuItem>

          <DropdownMenuItem href="https://my.hostnin.com/index.php/login">
            <LogIn className="mr-3 h-5 w-5" />
            <span>Login</span>
          </DropdownMenuItem>

          <DropdownMenuItem href="https://my.hostnin.com/register.php">
            <FilePen className="mr-3 h-5 w-5" />
            <span>Register</span>
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <div className="flex flex-col space-y-1">
          <DropdownMenuItem href="https://my.hostnin.com/submitticket.php">
            <Wrench className="mr-3 h-5 w-5 text-zinc-500" />
            <span>Open Ticket</span>
          </DropdownMenuItem>
          <DropdownMenuItem href="https://my.hostnin.com/cart.php?a=add&domain=register">
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
