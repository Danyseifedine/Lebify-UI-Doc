import { cn } from "@/lib/utils"

interface AppLogoProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export default function AppLogo({ className, ...props }: AppLogoProps) {
    return (
        <div className={cn("flex items-center gap-2", className)} {...props}>
            <img
                src="/assets/images/logo.svg"
                alt="Application Logo"
                className="h-12 w-auto [&>path]:fill-orange-500 dark:[&>path]:fill-orange-400"
            />
        </div>
    );
}
