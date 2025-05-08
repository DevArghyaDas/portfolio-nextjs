"use client";
import useActiveSection from "@/hook/useActiveSection";
import ThemeToggleButton from "../ui/ThemeToggleButton";
import MenuBarMobile from "./MenuBarMobile";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["index", "about", "skills", "projects", "contact"];
  const activeSection = useActiveSection(sections, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  return (
    <>
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-2xl"
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="container mx-auto flex items-center justify-between border-r border-l border-dashed px-2 py-3">
          <h1 className="text-2xl font-semibold">_Arghya_Das</h1>
          <div className="flex w-full justify-start px-2 md:justify-end">
            <ThemeToggleButton />
          </div>
          {/* for desktop/tablet */}
          <nav className="hidden items-center justify-center gap-5 text-xl md:flex">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="custom-hover rounded-sm p-1 capitalize"
              >
                <span
                  className={
                    activeSection === section
                      ? "font-semibold underline decoration-dashed underline-offset-8 duration-700"
                      : ""
                  }
                >
                  {section}
                </span>
              </a>
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
