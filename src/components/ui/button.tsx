import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
 "inline-flex items-center justify-center rounded-xl text-sm font-semibold tracking-[0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] disabled:pointer-events-none disabled:opacity-50",
 {
 variants: {
 variant: {
 default: "bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(108,99,255,0.45)]",
 outline: "border border-white/20 bg-white/5 text-foreground hover:bg-white/10",
 ghost: "text-foreground hover:bg-white/10",
 green: "bg-[#25D366] text-white hover:shadow-[0_0_24px_rgba(37,211,102,0.45)]",
 },
 size: {
 default: "h-11 px-5",
 sm: "h-9 px-3",
 lg: "h-12 px-6 text-base",
 icon: "h-10 w-10",
 },
 },
 defaultVariants: {
 variant: "default",
 size: "default",
 },
 },
);

export interface ButtonProps
 extends React.ButtonHTMLAttributes<HTMLButtonElement>,
 VariantProps<typeof buttonVariants> {
 asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
 ({ className, variant, size, ...props }, ref) => (
 <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
 ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
