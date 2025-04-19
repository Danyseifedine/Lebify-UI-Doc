import React, { createContext, useContext, useState, useEffect } from 'react'

type CodeTheme = {
    name: string
    import: string
    className?: string
}

const CODE_THEMES: CodeTheme[] = [
    { name: 'VS Code Dark', import: '/assets/css/prism-themes/prism-vsc-dark-plus.css' },
    { name: 'Dracula', import: '/assets/css/prism-themes/prism-dracula.css' },
    { name: 'One Dark', import: '/assets/css/prism-themes/prism-one-dark.css' },
    { name: 'Material Dark', import: '/assets/css/prism-themes/prism-material-dark.css' },
    { name: 'Synthwave', import: '/assets/css/prism-themes/prism-synthwave84.css' },
    { name: 'Nord', import: '/assets/css/prism-themes/prism-nord.css' },
    { name: 'Coldark Dark', import: '/assets/css/prism-themes/prism-coldark-dark.css' },
    { name: 'Shades of Purple', import: '/assets/css/prism-themes/prism-shades-of-purple.css' },
]

type CodeThemeContextType = {
    theme: CodeTheme
    setThemeByName: (name: string) => void
    availableThemes: CodeTheme[]
}

const CodeThemeContext = createContext<CodeThemeContextType | undefined>(undefined)

export function CodeThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<CodeTheme>(CODE_THEMES[0])
    const [themeLoaded, setThemeLoaded] = useState(false)

    // Load theme CSS dynamically
    useEffect(() => {
        // Remove any previously loaded theme stylesheets
        const existingThemeLinks = document.querySelectorAll('link[data-prism-theme]');
        existingThemeLinks.forEach(link => link.remove());

        // Create and append the new theme stylesheet
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = theme.import;
        link.setAttribute('data-prism-theme', theme.name);

        link.onload = () => {
            setThemeLoaded(true);
            // Force re-highlight all code blocks
            if (window.Prism) {
                window.Prism.highlightAll();
            }
        };

        document.head.appendChild(link);

        return () => {
            // Cleanup function
            setThemeLoaded(false);
        };
    }, [theme]);

    useEffect(() => {
        // Load saved theme preference from localStorage
        const savedTheme = localStorage.getItem('code-theme')
        if (savedTheme) {
            const foundTheme = CODE_THEMES.find(t => t.name === savedTheme)
            if (foundTheme) setTheme(foundTheme)
        }
    }, [])

    const setThemeByName = (name: string) => {
        const newTheme = CODE_THEMES.find(t => t.name === name)
        if (newTheme) {
            setTheme(newTheme)
            localStorage.setItem('code-theme', name)
        }
    }

    return (
        <CodeThemeContext.Provider value={{ theme, setThemeByName, availableThemes: CODE_THEMES }}>
            {children}
        </CodeThemeContext.Provider>
    )
}

export function useCodeTheme() {
    const context = useContext(CodeThemeContext)
    if (context === undefined) {
        throw new Error('useCodeTheme must be used within a CodeThemeProvider')
    }
    return context
}

// Add this to make TypeScript happy with our window.Prism access
declare global {
    interface Window {
        Prism: typeof import('prismjs');
    }
}