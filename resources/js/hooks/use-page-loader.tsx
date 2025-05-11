import { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';

export function usePageLoader() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        function handleStart() {
            setIsLoading(true);
        }

        function handleFinish() {
            setIsLoading(false);
        }

        // Add event listeners for Inertia page transitions
        const startCallback = router.on('start', handleStart);
        const finishCallback = router.on('finish', handleFinish);

        // Clean up event listeners
        return () => {
            // The router.on() method returns a callback that can be called to remove the listener
            startCallback();
            finishCallback();
        };
    }, []);

    return { isLoading };
}
