import ThemeToggleButton from "../ui/ThemeToggleButton";
import MenuBarMobile from "./MenuBarMobile";

const Header = () => {
  return (
    <>
      <header className="fixed w-full border-b backdrop-blur-2xl">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <h1 className="text-2xl font-semibold">_Arghya_Das</h1>

          <nav className="hidden items-center gap-4 capitalize md:flex">
            <ThemeToggleButton />
            <a href="#index">index</a>
            <a href="#about">about</a>
            <a href="#skills">skills</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
          </nav>
          <div className="flex md:hidden">
            <MenuBarMobile />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
