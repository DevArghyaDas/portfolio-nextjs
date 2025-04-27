"use client";

import {
  Dumbbell,
  FolderGit2,
  HousePlus,
  Kanban,
  Phone,
  SquareUser,
} from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const MenuBarMobile = () => {
  return (
    <>
      <Drawer>
        <DrawerTrigger className="group">
          <Kanban
            className="-rotate-90"
            size={32}
          />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{""}</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>

          <div className="grid w-full grid-flow-col place-content-evenly pb-6">
            <a href="#index">
              <HousePlus />
            </a>
            <a href="#about">
              <SquareUser />
            </a>
            <a href="#skills">
              <Dumbbell />
            </a>
            <a href="#projects">
              <FolderGit2 />
            </a>
            <a href="#contact">
              <Phone />
            </a>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuBarMobile;
