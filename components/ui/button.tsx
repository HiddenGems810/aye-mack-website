import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-display tracking-widest uppercase transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-saginaw-red)] text-[var(--color-bone-white)] shadow hover:bg-[var(--color-saginaw-red)]/80",
        destructive:
          "bg-red-500 text-[var(--color-bone-white)] shadow-sm hover:bg-red-500/90",
        outline:
          "border border-[var(--color-concrete-gray)] bg-transparent shadow-sm hover:bg-[var(--color-graphite)] hover:text-[var(--color-bone-white)] hover:border-[var(--color-saginaw-red)]",
        secondary:
          "bg-[var(--color-graphite)] text-[var(--color-bone-white)] shadow-sm hover:bg-[var(--color-graphite)]/80 border border-[var(--color-concrete-gray)]/30",
        ghost: "hover:bg-[var(--color-graphite)] hover:text-[var(--color-bone-white)]",
        link: "text-[var(--color-saginaw-red)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-2 text-base",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
