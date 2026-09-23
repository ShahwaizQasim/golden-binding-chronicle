import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-none border px-6 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-primary bg-primary text-primary-foreground hover:border-brand-gold hover:bg-brand-gold hover:text-brand-ink",
        outline:
          "border-border bg-transparent text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
        hero: "border-brand-gold bg-brand-gold text-brand-ink hover:border-brand-paper hover:bg-brand-paper",
        heroOutline:
          "border-brand-paper/60 bg-transparent text-brand-paper hover:border-brand-paper hover:bg-brand-paper hover:text-brand-ink",
      },
      size: {
        default: "h-12",
        lg: "h-14 px-8",
        icon: "size-11 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };