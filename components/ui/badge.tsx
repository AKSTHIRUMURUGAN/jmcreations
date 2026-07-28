import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        gold: "border-[#d4a853]/40 bg-[#d4a853]/15 text-[#d4a853]",
        emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        sapphire: "border-blue-500/30 bg-blue-500/10 text-blue-400",
        outline: "border-white/15 bg-white/5 text-zinc-300",
        ghost: "border-transparent bg-white/5 text-zinc-400",
      },
    },
    defaultVariants: {
      variant: "gold",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
