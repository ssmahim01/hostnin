"use client";
import { motion } from "framer-motion";

import { NavItem } from "@/types/nav";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface MobileDropdownProps {
  item: NavItem;
  closeMenu: () => void;
}

export default function MobileDropdown({
  item,
  closeMenu,
}: MobileDropdownProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        className="w-full flex justify-between items-center px-3 py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {item.label}
        {item.hasDropdown && (
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {item.hasDropdown && expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex flex-col pl-6"
        >
          {item.dropdownItems?.map((sub) => (
            <Link
              key={sub.label}
              href={sub.href}
              className="flex items-center gap-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={closeMenu}
            >
              {sub.icon && <sub.icon className="w-4 h-4" />}
              <span>{sub.label}</span>
              {sub.badge && (
                <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded">
                  {sub.badge}
                </span>
              )}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}
