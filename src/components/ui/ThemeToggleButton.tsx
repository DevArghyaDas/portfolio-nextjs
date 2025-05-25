"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ShimmerButton } from "../magicui/shimmer-button";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  // const[open,setOpen]= useState<Boolean>(false)

  return (
    <>
      <ShimmerButton
        background="var(--muted-foreground)"
        shimmerSize="3px"
        shimmerColor="var(--background)"
        className="shadow-2xl"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <MoonStar className="dark:hidden" />
        <Sun className="not-dark:hidden" />
      </ShimmerButton>
    </>
  );
};

export default ThemeToggleButton;
