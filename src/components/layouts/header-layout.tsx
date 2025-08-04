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
      <div className="flex">
        <ul className="flex gap-10 pr-8 border-r border-[#D6D9DC]">
          {HeaderPaths.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                <Button variant={"link"} size={"link"} className="border-[#F0F0F0] active:border-[#F0F0F0]">
                  {item.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
        <p className="pl-8">{PhoneNumber}</p>
      </div>
    </nav>
  );
};
