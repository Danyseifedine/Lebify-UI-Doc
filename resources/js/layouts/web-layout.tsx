import React from 'react';
import { Navbar } from '../components/web/navbar';
import { Footer } from '../components/web/footer';
import { Head } from '@inertiajs/react';

interface WebLayoutProps {
children: React.ReactNode;
title?: string;
description?: string;
}

export const WebLayout: React.FC<WebLayoutProps> = ({
    children,
    title = 'Lebify - Modern UI Components',
    description = 'A modern UI component library for building beautiful web applications'
    }) => {
    return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-300">

        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
            {children}
        </main>

        {/* Footer */}
        <Footer />
    </div>
    );
    };

    export default WebLayout;
