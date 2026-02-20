import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[11px] font-sans transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-[#3a3a3a] to-[#2c2c2c] text-[#d6d6d6] border border-[#0a0a0a] shadow-[inset_1px_1px_0px_0px_#686868,inset_-1px_-1px_0px_0px_#161616] hover:brightness-110 active:shadow-[inset_1px_1px_0px_0px_#161616,inset_-1px_-1px_0px_0px_#686868] active:from-[#2c2c2c] active:to-[#3a3a3a] hover:text-white rounded-[2px]",
        destructive:
          "bg-gradient-to-b from-[#6b1e1e] to-[#4a1c1c] text-white border border-[#0a0a0a] shadow-[inset_1px_1px_0px_0px_#9b3e3e,inset_-1px_-1px_0px_0px_#1a0606] hover:brightness-110 active:shadow-[inset_1px_1px_0px_0px_#1a0606,inset_-1px_-1px_0px_0px_#9b3e3e] active:from-[#4a1c1c] active:to-[#6b1e1e] rounded-[2px]",
        outline:
          "border border-[#0a0a0a] bg-transparent text-[#e0e0e0] shadow-sm hover:bg-[#3f3f3f]/50",
        ghost: "hover:bg-[#3f3f3f]/50 text-[#e0e0e0]",
        link: "text-[#d4b976] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-6 px-4 py-0",
        sm: "h-5 px-3 text-[10px]",
        lg: "h-7 px-8 text-xs",
        icon: "h-6 w-6",
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

