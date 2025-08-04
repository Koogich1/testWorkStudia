import { VariantProps } from "class-variance-authority";
import buttonStyle from "./ButtonStyle";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof buttonStyle> {}