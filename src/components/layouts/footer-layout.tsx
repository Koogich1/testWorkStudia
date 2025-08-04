import { HeaderPaths, PhoneNumber } from "@/constants/header";
import Link from "next/link";
import React from "react";
import Button from "@ui/button/button";

const FooterLayout = () => {
  return (
    <nav className="px-[3%] py-4 bg-black flex justify-between items-center w-full border-t border-[#5B5C5D] text-white">
      <div className="flex items-center gap-3">
        <Link href={"/"} className="text-[36px] p-0">
          {" "}
          architecture{" "}
        </Link>
        <p className="pt-2">(с) 2025, all rights reserved</p>
      </div>
      <div className="flex">
        <ul className="flex gap-10 pr-8 border-r border-[#5B5C5D]">
          {HeaderPaths.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                <Button variant={"link_secondary"} size={"link"}>
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

export default FooterLayout;
