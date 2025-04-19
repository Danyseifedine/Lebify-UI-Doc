import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = React.forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <CollapsiblePrimitive.Trigger
        ref={ref}
        className={cn(
            "flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-medium transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            "data-[state=open]:bg-accent/50",
            className
        )}
        {...props}
    >
        {children}
        <ChevronDown
            className={cn(
                "h-4 w-4 shrink-0 transition-transform duration-300",
                "data-[state=open]:rotate-180"
            )}
        />
    </CollapsiblePrimitive.Trigger>
))
CollapsibleTrigger.displayName = CollapsiblePrimitive.Trigger.displayName

const CollapsibleContent = React.forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <CollapsiblePrimitive.Content
        ref={ref}
        className={cn(
            "overflow-hidden bg-dark transition-all duration-300 ease-in-out",
            "data-[state=closed]:h-0 data-[state=open]:h-[var(--radix-collapsible-content-height)]",
            className
        )}
        {...props}
    >
        <div className="py-2 pl-4 transition-all duration-300 ease-in-out opacity-100 data-[state=closed]:opacity-0">
            {children}
        </div>
    </CollapsiblePrimitive.Content>
))
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
