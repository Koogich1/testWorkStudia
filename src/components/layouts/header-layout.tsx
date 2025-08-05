import { HeaderPaths, PhoneNumber } from "@/constants/header";
import Link from "next/link";
import React from "react";
import Button from "@ui/button/button";

export const HeaderLayout = () => {
  return (
    <nav className="px-[3%] flex justify-between items-center w-full fixed py-4 border-b border-[#D6D9DC] bg-[#F0F0F0] z-[1000]">
      <div>
        <Link href={"/"} className="text-[36px] p-0">
          {" "}
          architecture{" "}
        </Link>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-10 pr-8 border-r border-[#D6D9DC]">
          {HeaderPaths.map((item, index) => (
            <li key={index} className="relative">
              <Button
                variant={"link"}
                size={"link"}
                className="border-[#F0F0F0] active:border-[#F0F0F0]"
              >
                <Link href={item.path}>{item.name}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <p className="pl-8">{PhoneNumber}</p>
      </div>
      <div className="flex md:hidden">...</div>
    </nav>
  );
};
