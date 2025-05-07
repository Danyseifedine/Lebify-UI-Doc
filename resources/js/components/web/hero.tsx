import { Link } from '@inertiajs/react';
import React from 'react';

export const Hero = () => {
return (

    <main className="flex items-center justify-center min-h-screen animate-background dark:bg-black" style={{
        backgroundImage: 'url(assets/images/bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
        <div className="">
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        A beautiful UI component library for React
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
                    </p>
                    <div className="space-x-4">
                        <Link
                            href={route('doc.installation')}
                            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="https://github.com/your-repo"
                            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    </main>
);
};

export default Hero;
