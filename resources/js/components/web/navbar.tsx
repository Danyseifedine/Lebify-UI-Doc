import { Link } from '@inertiajs/react'
import AppLogo from '@/components/app-logo'
import { Button } from '@/components/ui/button'
import { Search, Sun, Moon, Github, Heart, Menu, X, AlignLeft } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Sidebar } from '@/components/web/sidebar'
import { useTheme } from 'lebify-ui'
import { CodeThemeDropdown } from '@/components/codeBlock/code-theme-selector'

export function Navbar() {
    const { setTheme } = useTheme();

    const [theming, setTheming] = useState<'light' | 'dark'>('light')
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        // Set initial theme
        const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light')
        setTheming(initialTheme)
        document.documentElement.classList.toggle('dark', initialTheme === 'dark')

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const togglingTheme = (newTheme: 'light' | 'dark') => {
        setTheming(newTheme)
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }

    return (
        <div className="fixed top-0 z-50 w-full">
            {/* Premium banner */}
            <div className="relative z-50 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x">
                <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
                    <div className="flex h-12 items-center justify-center text-sm font-medium text-white">
                        <p className="flex items-center gap-2">
                            <span className="sm:inline">No child should witness the horrors of war...🕊️</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <div className={`relative z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isScrolled ? 'shadow-lg' : ''} transition-all duration-300`}>
                <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-8">
                            <Link href="/" className="flex items-center group">
                                <AppLogo className="h-8 w-8 transition-transform group-hover:scale-110" />
                                <span className="ml-2 text-xl font-bold">Lebify UI</span>
                            </Link>

                            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                                {[
                                    { href: route('doc.installation'), label: 'Docs' },
                                    { href: route('blog'), label: 'Blog' },
                                    { href: route('contributors'), label: 'Contributors' }
                                ].map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="relative text-muted-foreground transition-colors hover:text-foreground group"
                                    >
                                        {item.label}
                                        <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden md:flex items-center gap-3">
                                <div className="flex items-center gap-2 bg-accent/50 rounded-full p-1">
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-background/80">
                                        <Search className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-background/80">
                                        <Heart className="h-4 w-4" />
                                    </Button>
                                    <CodeThemeDropdown />
                                    <Toggle
                                        pressed={theming === 'dark'}
                                        onPressedChange={() => togglingTheme(theming === 'light' ? 'dark' : 'light')}
                                        className="rounded-full hover:bg-background/80"
                                    >
                                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    </Toggle>
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-background/80">
                                        <Github className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="flex md:hidden items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full"
                                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                >
                                    {isSidebarOpen ? <X className="h-5 w-5" /> : <AlignLeft className="h-5 w-5" />}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile menu */}
            <div
                className={cn(
                    "fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm bg-background/95 backdrop-blur md:hidden",
                    "border-l border-border/40 shadow-2xl",
                    "transform transition-all duration-300 ease-out",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    <div className="p-4 border-b border-border/40">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                                <AppLogo className="h-8 w-8" />
                                <span className="ml-2 text-xl font-bold">Lebify UI</span>
                            </Link>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto py-6 px-4">
                        <nav className="space-y-2">
                            {[
                                { href: route('doc.installation'), label: 'Docs' },
                                { href: route('blog'), label: 'Blog' },
                                { href: route('contributors'), label: 'Contributors' }
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="p-4 border-t border-border/40">
                        <div className="grid grid-cols-5 gap-2">
                            <Button variant="outline" size="icon" className="rounded-lg">
                                <Search className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-lg">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <CodeThemeDropdown className="flex justify-center" />
                            <Toggle
                                pressed={theming === 'dark'}
                                onPressedChange={() => togglingTheme(theming === 'light' ? 'dark' : 'light')}
                                className="rounded-lg"
                            >
                                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            </Toggle>
                            <Button variant="outline" size="icon" className="rounded-lg">
                                <Github className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile sidebar */}
            <div
                className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsSidebarOpen(false)}
            />
            <div
                className={`fixed inset-y-0 left-0 z-50 w-[80%] max-w-sm bg-background/95 backdrop-blur transform transition-transform duration-300 ease-out md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="h-full overflow-y-auto">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
