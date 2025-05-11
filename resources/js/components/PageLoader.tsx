import React, { useEffect, useState } from 'react';

interface PageLoaderProps {
    isLoading: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
    const [visible, setVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Manage visibility with a delay for entrance and exit animations
    useEffect(() => {
        if (isLoading && !mounted) {
            // First mount the component
            setMounted(true);
            // Then trigger the entrance animation after a small delay
            setTimeout(() => {
                setVisible(true);
            }, 50);
        } else if (!isLoading && mounted) {
            // Trigger exit animation
            setVisible(false);
            // Remove from DOM after animation completes
            const timeout = setTimeout(() => {
                setMounted(false);
            }, 800); // Longer timeout to ensure animation completes
            return () => clearTimeout(timeout);
        }
    }, [isLoading, mounted]);

    if (!mounted) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ease-in-out ${visible ? 'bg-black/50 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-none'
                }`}
            style={{
                pointerEvents: visible ? 'auto' : 'none'
            }}
        >
            <div
                className={`flex flex-col items-center transform transition-all duration-700 ease-in-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
            >
                <div className="h-16 w-16 mb-3 animate-spin rounded-full border-b-3 border-t-3 border-[#F67E15]"></div>
                <p className="mt-5 text-muted-foreground font-medium text-sm">Please wait...</p>
            </div>
        </div>
    );
};

export default PageLoader;
