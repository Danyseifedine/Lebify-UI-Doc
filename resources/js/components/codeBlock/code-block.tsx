import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react"
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import { useCodeTheme } from "@/components/codeBlock/contexts/code-theme-context"

interface CodeBlockProps {
    code: string
    language?: string
    className?: string
    showLineNumbers?: boolean
    showThemeSelector?: boolean
}

export function CodeBlock({
    code,
    language = "typescript",
    className,
    showLineNumbers = true,
}: CodeBlockProps) {
    const [copied, setCopied] = useState(false)
    const codeRef = useRef<HTMLElement>(null)
    const { theme } = useCodeTheme()
    const [key, setKey] = useState(0)

    useEffect(() => {
        setKey(prev => prev + 1)
    }, [theme])

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current)
        }
    }, [code, language, theme, key])

    const onCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className={cn("relative group", className)} key={key}>
            <pre className={cn(
                "bg-[#1e1e1e] p-4 rounded-lg overflow-x-auto border border-[#333] shadow-md",
                showLineNumbers && "line-numbers"
            )}>
                <code ref={codeRef} className={`language-${language} text-sm`}>
                    {code}
                </code>
            </pre>
            <button
                onClick={onCopy}
                className="absolute right-3 top-3 p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Copy code"
            >
                {copied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                )}
            </button>
            {copied && (
                <div className="absolute right-14 top-3 bg-green-600 text-white px-2 py-1 rounded text-sm animate-in slide-in-from-right-5 duration-200">
                    Copied!
                </div>
            )}
        </div>
    )
}
