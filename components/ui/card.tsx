import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-[3px] border border-[#0a0a0a] bg-[#1a1a1a] text-card-foreground shadow-[inset_1px_1px_0px_0px_#4a4a4a,inset_-1px_-1px_0px_0px_#0a0a0a,0_4px_12px_rgba(0,0,0,0.8)]",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { showClose?: boolean; onClose?: () => void }
>(({ className, children, showClose = true, onClose, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex items-center justify-center py-1.5 px-4 mb-1 border-b border-[#0a0a0a] shadow-[inset_0_1px_0_0_#4a4a4a] bg-gradient-to-b from-[#3a3a3a] to-[#202020]",
      className
    )}
    {...props}
  >
    {children}
    {showClose && (
      <Button
        variant="default"
        size="icon"
        className="absolute right-[3px] top-[3px] h-[17px] w-[17px] rounded-[2px]"
        onClick={onClose}
      >
        <X className="h-3 w-3" strokeWidth={3} />
        <span className="sr-only">Close</span>
      </Button>
    )}
  </div>
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-[12px] font-sans text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] tracking-wide",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[11px] text-[#a0a0a0]", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 pt-2", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center p-3 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
