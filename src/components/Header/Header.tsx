"use client";
import useActiveSection from "@/hook/useActiveSection";
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
                      ? "font-semibold text-slate-400 underline decoration-wavy underline-offset-2"
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
