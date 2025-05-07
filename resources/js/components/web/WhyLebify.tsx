import React from 'react';

export const WhyLebify = () => {
return (

    <section className="py-24 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-white dark:bg-black"></div>

    <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-orange-500 mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white pb-6">
                Why Build with <span className="text-orange-500">Lebify UI</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl text-center">
                A revolutionary component library that transforms how you build modern web applications
            </p>
        </div>

        {/* Feature Cards - Simplified with Cool Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Speed Card */}
            <div className="group bg-white dark:bg-transparent rounded-2xl p-8 shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/20 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-orange-500/10 rounded-full transform group-hover:scale-150 group-hover:rotate-12 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-orange-500/10 rounded-full transform group-hover:scale-150 group-hover:-rotate-12 transition-transform duration-700"></div>

                <div className="relative h-full flex flex-col">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-1 transition-transform duration-300">
                        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 transform group-hover:-translate-y-1 transition-transform duration-300 delay-75">Lightning Fast</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 transform group-hover:-translate-y-1 transition-transform duration-300 delay-100">
                        Optimized for performance with minimal bundle size and efficient rendering. Your applications will load in milliseconds, not seconds.
                    </p>
                </div>
            </div>

{/* Accessibility Card */}
            <div className="group bg-white dark:bg-transparent rounded-2xl p-8 shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/20 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/10 rounded-full transform group-hover:scale-150 group-hover:rotate-12 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/10 rounded-full transform group-hover:scale-150 group-hover:-rotate-12 transition-transform duration-700"></div>

                <div className="relative h-full flex flex-col">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-1 transition-transform duration-300">
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 transform group-hover:-translate-y-1 transition-transform duration-300 delay-75">Fully Accessible</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 transform group-hover:-translate-y-1 transition-transform duration-300 delay-100">
                        Every component is WCAG 2.1 compliant with keyboard navigation, screen reader support, and proper ARIA attributes built-in.
                    </p>
                </div>
            </div>

{/* Customizable Card */}
            <div className="group bg-white dark:bg-transparent rounded-2xl p-8 shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/20 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-500/10 rounded-full transform group-hover:scale-150 group-hover:rotate-12 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500/10 rounded-full transform group-hover:scale-150 group-hover:-rotate-12 transition-transform duration-700"></div>

                <div className="relative h-full flex flex-col">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-1 transition-transform duration-300">
                        <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 transform group-hover:-translate-y-1 transition-transform duration-300 delay-75">Infinitely Customizable</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 transform group-hover:-translate-y-1 transition-transform duration-300 delay-100">
                        Tailor components to match your brand with our powerful theming system. No limitations, no compromises.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
);
};

export default WhyLebify;
