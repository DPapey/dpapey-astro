import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

interface NavLink {
  path: string;
  title: string;
}

interface Props {
  links: NavLink[];
}

const Hamburger = ({ links }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("menuOpen") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("menuOpen", isMenuOpen.toString());
  }, [isMenuOpen]);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="sm:hidden p-3 z-50 relative"
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-8 w-8 text-neutral-600 dark:text-neutral-300" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-neutral-600 dark:text-neutral-300" />
        )}
      </button>

      {/* Mobile Menu (Only renders when isMenuOpen is true) */}
      <div
        className={`fixed inset-0 bg-neutral-200 bg-light-radial dark:bg-dark-radial dark:bg-slate-900 flex flex-col items-center justify-center transition-opacity duration-300 ease-out ${isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        <ul className="space-y-6 text-xl">
          {links.map(({ path, title }) => (
            <li key={path}>
              <a
                href={path}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
                className="block text-neutral-800 dark:text-neutral-200 text-4xl font-bold hover:underline hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
