import { Button } from "@/components/ui/button"
import { useCodeTheme } from "@/components/codeBlock/contexts/code-theme-context"
import { Check, Palette } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useRef, useEffect } from "react"

export function CodeThemeDropdown({ className }: { className?: string }) {
    const { theme, setThemeByName, availableThemes } = useCodeTheme()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Handle click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleThemeChange = (themeName: string) => {
        setThemeByName(themeName)
        setIsOpen(false)
    }

    return (
        <div className={cn("relative", className)} ref={dropdownRef}>
            <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                title="Code Theme"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <Palette className="h-5 w-5" />
                <span className="sr-only">Code Theme</span>
            </Button>

            {isOpen && (
                <div
                    className="absolute right-0 top-full mt-2 w-56 rounded-md border border-border bg-background shadow-lg z-50 animate-in fade-in-0 slide-in-from-top-2"
                    role="menu"
                >
                    <div className="py-1">
                        <div className="px-3 py-2 text-sm font-medium border-b border-border">
                            Code Theme
                        </div>
                        {availableThemes.map((t) => (
                            <button
                                key={t.name}
                                className={cn(
                                    "flex w-full items-center px-3 py-2 text-sm transition-colors",
                                    theme.name === t.name ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
                                )}
                                onClick={() => handleThemeChange(t.name)}
                                role="menuitem"
                                aria-current={theme.name === t.name}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4 transition-opacity",
                                        theme.name === t.name ? "opacity-100" : "opacity-0"
                                    )}
                                    aria-hidden="true"
                                />
                                {t.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}