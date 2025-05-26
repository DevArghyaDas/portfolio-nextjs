import ThemeToggleButton from "../ui/ThemeToggleButton";

const Footer = () => {
  return (
    <>
      <footer className="border-b shadow">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <h1 className="text-2xl font-semibold">App Name</h1>
          <div className="inline-flex items-center gap-2 *:underline">
            Icons provided by{" "}
            <a
              href="https://icons8.com/"
              target="_blank"
            >
              Icons8
            </a>{" "}
            &{" "}
            <a
              href="https://simpleicons.org/"
              target="_blank"
            >
              simpleicons
            </a>
          </div>

          <nav className="flex items-center">
            <ThemeToggleButton />
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
