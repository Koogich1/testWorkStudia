import { HeaderPaths, PhoneNumber } from "@/constants/header";
import Link from "next/link";
import React from "react";
import Button from "@ui/button/button";

const FooterLayout = () => {
  return (
    <nav className="space-y-5 md:space-y-0 py-12 md:py-4 bg-[#181818] flex flex-col-reverse md:flex-col lg:flex-row justify-start md:justify-between items-start md:items-center w-full border-t border-[#5B5C5D] text-white sm:px-[3%]">
      <div className="flex items-center w-full md:w-auto gap-3 pt-15 md:pt-0 border-t border-[#5b5c5d] px-[3%] md:px-0 md:border-none">
        <Link href={"/"} className="text-[24px] md:text-[36px]">
          {" "}
          architecture{" "}
        </Link>
        <p className="pt-2 text-[12px] md:text-[16px]">(с) 2025, all rights reserved</p>
      </div>
      <div className="space-y-5 md:space-y-0 flex md:flex-row flex-col items-start justify-start md:justify-center md:items-center w-full md:w-auto px-[3%] md:px-0 pb-8 md:pb-0">
        <ul className="flex flex-row w-full justify-between md:justify-start md:gap-10 pr-8 md:border-r border-[#5B5C5D]">
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
        <p className="md:hidden"> Call me</p>
        <p className="md:pl-9 text-nowrap">{PhoneNumber}</p>
      </div>
    </nav>
  );
};

export default FooterLayout;
