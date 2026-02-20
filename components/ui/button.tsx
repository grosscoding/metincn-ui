import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-[11px] font-sans transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#3f3f3f] text-[#f4f4f4] border border-black shadow-[inset_1px_1px_0px_0px_#797979,inset_-1px_-1px_0px_0px_#0a0a0a] active:shadow-[inset_1.5px_1.5px_0px_0px_#0a0a0a,inset_-1px_-1px_0px_0px_#797979] rounded-[3px] active:bg-[#353535] hover:brightness-110",
        destructive:
          "bg-[#6b1e1e] text-white border border-black shadow-[inset_1px_1px_0px_0px_#9b3e3e,inset_-1px_-1px_0px_0px_#1a0606] active:shadow-[inset_1.5px_1.5px_0px_0px_#1a0606,inset_-1px_-1px_0px_0px_#9b3e3e] rounded-[3px] active:bg-[#4a1c1c] hover:brightness-110",
        outline:
          "border border-black bg-transparent text-[#e0e0e0] shadow-sm hover:bg-[#3f3f3f]/50",
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
      >
        <span className="relative z-10 flex items-center gap-2">{props.children}</span>
        {variant === "default" && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
