interface DocSectionProps {
    id: string;
    title: string;
    size: string;
    children: React.ReactNode;
    className?: string;
}

interface DocParagraphProps {
    children: React.ReactNode;
    className?: string;
}

function DocSection({ id, title, size, children, className = '' }: DocSectionProps) {
    return (
        <section className={`space-y-6 ${className}`}>
            <h2
                id={id}
                className={`
                    scroll-m-20
                    pt-10
                    border-b
                    main-title
                    pb-2
                    text-${size}
                    font-semibold
                    tracking-tight
                    hover:text-primary/80
                    transition-colors
                `}
            >
                {title}
            </h2>
            <div className="animate-fade-in">
                {children}
            </div>
        </section>
    );
}

function DocParagraph({ children, className = '' }: DocParagraphProps) {
    return (
        <p className={`
            text-muted-foreground
            pt-5
            pb-3
            leading-7
            secondary-text
            hover:text-foreground/80
            transition-colors
            ${className}
        `}>
            {children}
        </p>
    );
}

export { DocSection, DocParagraph };