import ThemeToggleButton from "../ui/ThemeToggleButton";

const Footer = () => {
  return (
    <>
      <footer className="border-b shadow">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <h1 className="text-2xl font-semibold">App Name</h1>

          <nav className="flex items-center">
            <ThemeToggleButton />
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
