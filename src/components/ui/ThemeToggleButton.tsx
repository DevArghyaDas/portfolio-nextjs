"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  // const[open,setOpen]= useState<Boolean>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer px-3 py-2">
          <Sun className="dark:hidden" />
          <MoonStar className="not-dark:hidden dark:flex" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel className="text-center">Themes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={theme}
          className="*:cursor-pointer"
        >
          <DropdownMenuRadioItem
            value="light"
            onSelect={() => setTheme("light")}
          >
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="dark"
            onSelect={() => setTheme("dark")}
          >
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="system"
            onSelect={() => setTheme("system")}
          >
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggleButton;
