import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import PageLoader from './components/PageLoader';
import { usePageLoader } from './hooks/use-page-loader';
import React, { ComponentType } from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

interface AppWithLoaderProps {
    Component: ComponentType;
    props: Record<string, unknown>;
}

// Wrap the app component to include the PageLoader
const AppWithLoader: React.FC<AppWithLoaderProps> = ({ Component, props }) => {
    const { isLoading } = usePageLoader();

    return (
        <>
            <PageLoader isLoading={isLoading} />
            <Component {...props} />
        </>
    );
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <App
                {...props}
            >
                {({ Component, key, props }) => (
                    <AppWithLoader key={key} Component={Component} props={props} />
                )}
            </App>
        );
    },
    // Disable the default progress indicator
    progress: false,
});

// This will set light / dark mode on load...
initializeTheme();
