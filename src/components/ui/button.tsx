import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-none border px-6 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground hover:border-brand-gold hover:bg-brand-gold hover:text-brand-ink",
        primary:
          "border-primary bg-primary text-primary-foreground hover:border-brand-gold hover:bg-brand-gold hover:text-brand-ink",
        destructive:
          "border-destructive bg-destructive text-destructive-foreground hover:opacity-90",
        secondary:
          "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-secondary",
        link: "min-h-0 border-transparent bg-transparent p-0 text-primary underline-offset-4 hover:underline",
        outline:
          "border-border bg-transparent text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
        hero: "border-brand-gold bg-brand-gold text-brand-ink hover:border-brand-paper hover:bg-brand-paper",
        heroOutline:
          "border-brand-paper/60 bg-transparent text-brand-paper hover:border-brand-paper hover:bg-brand-paper hover:text-brand-ink",
      },
      size: {
        default: "h-12",
        sm: "h-9 px-3",
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

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };