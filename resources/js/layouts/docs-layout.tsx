import { Sidebar } from '@/components/web/sidebar'
import { Navbar } from '@/components/web/navbar'
import { cn } from '@/lib/utils'
import { ThemeProvider } from 'lebify-ui';
import { CodeThemeProvider } from '@/components/codeBlock/contexts/code-theme-context';


interface DocsLayoutProps {
    children: React.ReactNode
    tocItems?: TableOfContentsItem[]
}

export interface TableOfContentsItem {
    title: string
    url: string
    level: number
}

function TableOfContents({ items }: { items: TableOfContentsItem[] }) {
    return (
        <div className="space-y-6">
            <h4 className="text-xl pb-7 font-bold text-foreground/90">
                Contents
            </h4>
            <nav>
                <ul className="space-y-3">
                    {items.map((item, i) => (
                        <li
                            key={i}
                            className={cn(
                                "border-l-2 border-border/40 transition-all duration-200",
                                item.level === 2 && "ml-4"
                            )}
                        >
                            <a
                                href={item.url}
                                className={cn(
                                    "block pl-4 py-1",
                                    "hover:border-l-2 hover:-ml-[2px] hover:border-primary",
                                    "text-muted-foreground hover:text-foreground",
                                    item.level === 1 && "text-sm font-bold",
                                    item.level === 2 && "text-xs tracking-wide"
                                )}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export function DocsLayout({ children, tocItems = [] }: DocsLayoutProps) {
    return (
        <CodeThemeProvider>
            <ThemeProvider
                themes={[
                    "light", "dark", "dim", "earth", "sunset", "sunset-dark", "terrain",
                    "forest", "ocean", "lavender", "mint", "ruby", "sapphire", "amber",
                    "emerald", "coral", "slate", "violet", "indigo", "crimson", "teal",
                    "olive", "maroon", "navy", "rose", "gold", "silver", "bronze"
                ]}
                defaultTheme="dark"
            >
                <div className="relative min-h-screen"
                    style={{
                        backgroundImage: 'url(../../assets/images/bg-doc.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}>
                    <Navbar />
                    <div className="pt-[8.5rem] pb-16">
                        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
                            <div className="flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_220px] lg:gap-8">
                                {/* Left sidebar */}
                                <aside className="fixed top-[8.5rem] z-30 hidden h-[calc(100vh-8.5rem)] w-[240px] shrink-0 md:sticky md:block border-r">
                                    <div className="h-full overflow-y-auto py-6 pr-6 scrollbar-none">
                                        <Sidebar />
                                    </div>
                                </aside>

                                {/* Main content */}
                                <main className="relative py-6">
                                    {children}
                                </main>

                                {/* Right sidebar - Table of Contents */}
                                {tocItems.length > 0 && (
                                    <aside className="hidden xl:block">
                                        <div className="fixed w-[220px] overflow-y-auto py-6 pl-8">
                                            <TableOfContents items={tocItems} />
                                        </div>
                                    </aside>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider >
        </CodeThemeProvider>
    )
}
