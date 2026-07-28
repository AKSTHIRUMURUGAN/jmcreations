import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-95",
  {
    variants: {
      variant: {
        gold: "bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] text-black shadow-lg shadow-[#d4a853]/25 hover:shadow-[#d4a853]/40 hover:scale-[1.02]",
        glass: "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-[#d4a853]/50 backdrop-blur-md",
        outline: "border border-[#d4a853]/40 bg-[#d4a853]/10 text-[#d4a853] hover:bg-[#d4a853] hover:text-black",
        ghost: "text-zinc-400 hover:bg-white/5 hover:text-white",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 py-2 text-[11px]",
        lg: "h-13 px-8 py-3 text-sm",
        icon: "h-10 w-10 p-0 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
