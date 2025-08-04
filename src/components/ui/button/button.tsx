import React, { FC } from "react";
import { cn } from "@utils";
import { ButtonProps } from "./buttonTypes";
import { cva } from "class-variance-authority";

const buttonStyle = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[57px] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-transition hover:bg-violet-500 text-black border border-black hover:border-[#2969CA] hover:text-white hover:bg-[#2969CA] active:border-[#15458D] active:bg-[#15458D]",
        default_secondary: "bg-transition text-white hover:bg-violet-500 bg-transition border border-white hover:border-[#2969CA] hover:text-white hover:bg-[#2969CA] active:border-[#15458D] active:bg-[#15458D]",
        tabs: "bg-transition text-white border border-transition hover:border-[#2969CA] hover:text-[#2969CA] active:border-white active:text-white",
        link: "text-black border-b border-white hover:border-[#2969CA] hover:text-[#2969CA] active:border-black active:text-black  rounded-none",
        link_secondary: "text-white border-b border-black hover:border-[#2969CA] hover:text-[#2969CA] active:border-white active:text-white rounded-none",
      },
      size: {
        default: "py-[20px] px-[50px]",
        link: "p-0",
        cube: "w-[40px] h-[40px]"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonStyle({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;