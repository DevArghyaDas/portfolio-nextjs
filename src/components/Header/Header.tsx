"use client";
import useActiveSection from "@/hook/useActiveSection";
import Link from "next/link";
import EncodeDecodeAnimation from "../ui/EncodeDecodeAnimation";
import ThemeToggleButton from "../ui/ThemeToggleButton";
import MenuBarMobile from "./MenuBarMobile";

const Header = () => {
  const sections = ["index", "about", "skills", "projects", "contact"];

  const activeSection = useActiveSection(sections, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <>
      <header className="sticky top-0 z-50 border-b backdrop-blur-2xl">
        <div className="container mx-auto flex max-w-5xl items-center justify-between border-r border-l border-dashed px-2 py-4">
          <h1 className="text-2xl font-semibold">
            <EncodeDecodeAnimation text="_arghya_das" />
          </h1>
          <div className="flex w-full justify-start px-4 md:justify-end">
            <ThemeToggleButton />
          </div>
          {/* for desktop/tablet */}
          <nav className="hidden items-center justify-center gap-5 text-xl md:flex">
            {sections.map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className="rounded-sm *:font-mono *:text-lg *:font-semibold *:hover:text-sky-800 *:hover:duration-300"
              >
                <span
                  className={
                    activeSection === section
                      ? "text-sky-500 underline decoration-wavy underline-offset-8 duration-300"
                      : ""
                  }
                >
                  {"_" + section}
                </span>
              </Link>
            ))}
          </nav>
          {/* for mobile */}
          <div className="flex md:hidden">
            <MenuBarMobile />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
