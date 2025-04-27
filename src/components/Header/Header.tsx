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
      <header className="sticky top-0 border-b backdrop-blur-2xl">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <h1 className="text-2xl font-semibold">_Arghya_Das</h1>
          <div className="flex w-full justify-start px-2 md:justify-end">
            <ThemeToggleButton />
            {/* for desktop/tablet */}
          </div>
          <nav className="relative hidden items-center justify-center gap-5 text-xl *:relative *:before:absolute *:before:-top-4 *:before:-left-3 *:before:scale-0 *:before:text-3xl *:before:duration-300 *:before:content-['⟔'] *:after:absolute *:after:-right-4 *:after:-bottom-3 *:after:scale-0 *:after:text-3xl *:after:duration-300 *:after:content-['⟓'] *:hover:before:scale-100 *:hover:after:scale-100 md:flex">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
              >
                <span
                  className={
                    activeSection === section
                      ? "font-semibold underline underline-offset-8"
                      : ""
                  }
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
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
