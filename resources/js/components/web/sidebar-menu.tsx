import { motion, AnimatePresence } from "framer-motion"
import { Link } from '@inertiajs/react'
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

interface MenuItem {
    title: string
    href?: string
    items?: MenuItem[]
    current?: boolean
    icon?: React.ReactNode
}

interface SidebarMenuProps {
    items: MenuItem[]
    defaultOpen?: string[]
    currentPath: string
}

export function SidebarMenu({ items, defaultOpen = [], currentPath }: SidebarMenuProps) {
    const [openSections, setOpenSections] = useState<string[]>(defaultOpen)

    useEffect(() => {
        setOpenSections(defaultOpen)
    }, [defaultOpen])

    return (
        <nav className="space-y-2 px-2">
            {items.map((item, index) => (
                <MenuItemWithSubItems
                    key={index}
                    item={item}
                    isOpen={openSections.includes(item.title)}
                    onOpenChange={(isOpen) => {
                        setOpenSections(prev =>
                            isOpen
                                ? [...prev, item.title]
                                : prev.filter(t => t !== item.title)
                        )
                    }}
                    currentPath={currentPath}
                />
            ))}
        </nav>
    )
}

function MenuItemWithSubItems({
    item,
    isOpen,
    onOpenChange,
    currentPath
}: {
    item: MenuItem
    isOpen: boolean
    onOpenChange: (isOpen: boolean) => void
    currentPath: string
}) {
    const isCurrentPath = (href?: string) => href === currentPath
    const hasCurrentChild = item.items?.some(subItem => isCurrentPath(subItem.href))

    if (!item.items) {
        return (
            <Link
                href={item.href || '#'}
                className={cn(
                    "group flex items-center gap-2 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                    "hover:bg-accent/20 hover:translate-x-1",
                    isCurrentPath(item.href)
                        ? "bg-accent text-accent-foreground shadow-sm"
                        : "text-muted-foreground"
                )}
            >
                {item.icon}
                <span className="flex-1">{item.title}</span>
            </Link>
        )
    }

    return (
        <div className="relative">
            <button
                onClick={() => onOpenChange(!isOpen)}
                className={cn(
                    "group flex w-full items-center justify-between rounded-lg px-3 py-2",
                    "text-sm font-medium transition-all duration-200",
                    "hover:bg-accent/20 hover:translate-x-1",
                    (isOpen || hasCurrentChild) && "bg-accent/10",
                    hasCurrentChild ? "text-accent-foreground" : "text-muted-foreground"
                )}
            >
                <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                <ChevronDown
                    className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180",
                        "group-hover:animate-bounce"
                    )}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                                height: { duration: 0.3 },
                                opacity: { duration: 0.2, delay: 0.1 }
                            }
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: { duration: 0.3 },
                                opacity: { duration: 0.2 }
                            }
                        }}
                        className="overflow-hidden"
                    >
                        <div className="relative ml-4 pl-4 py-1 space-y-1">
                            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent/40 to-accent/10" />
                            {item.items.map((subItem, index) => (
                                <Link
                                    key={index}
                                    href={subItem.href || '#'}
                                    className={cn(
                                        "group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                                        "hover:bg-accent/20 hover:translate-x-1",
                                        isCurrentPath(subItem.href)
                                            ? "bg-accent text-accent-foreground shadow-sm"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {subItem.icon}
                                    <span>{subItem.title}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
