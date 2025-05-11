import React, { useRef, useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

export const ComponentsShowcase = () => {


    const firstSliderRef = useRef<HTMLDivElement>(null);
    const secondSliderRef = useRef<HTMLDivElement>(null);
    const [firstScrollInterval, setFirstScrollInterval] = useState<NodeJS.Timeout | null>(null);
    const [secondScrollInterval, setSecondScrollInterval] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Animation for card sliders
        const setupSlider = (
            sliderRef: React.RefObject<HTMLDivElement>,
            setScrollInterval: React.Dispatch<React.SetStateAction<NodeJS.Timeout | null>>,
            direction: number = 1 // 1 for right, -1 for left
        ) => {
        const slider = sliderRef.current;
            if (!slider) return { cleanup: () => {} };

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;
            let isScrolling = false;
            let currentInterval: NodeJS.Timeout | null = null;
            let hasMoved = false; // Track if mouse has moved during click

            // Fixed scroll speed - prevents acceleration on multiple hover events
            const SCROLL_SPEED = 1;

            // Clone the first set of cards and append them to create a seamless loop
            const cloneForInfiniteScroll = () => {
                // Only do this once
                if (slider.dataset.cloned === 'true') return;

                // Clone the first set of cards
                const cards = slider.querySelectorAll('.card-item');
                const cardWidth = cards[0]?.getBoundingClientRect().width || 0;
                const cardMargin = 24; // gap-6 = 1.5rem = 24px

                // Set initial scroll position for reverse direction
                if (direction < 0) {
                    // For reverse direction, start from the middle
                    slider.scrollLeft = (cardWidth + cardMargin) * (cards.length / 2);
                }

                slider.dataset.cloned = 'true';
            };

            // Initialize the slider
            cloneForInfiniteScroll();

        // For automatic scrolling
        const autoScroll = () => {
                if (!slider || isScrolling) return;

                const cardWidth = slider.querySelector('.card-item')?.getBoundingClientRect().width || 0;
                const cardMargin = 24; // gap-6 = 1.5rem = 24px
                const totalCards = slider.querySelectorAll('.card-item').length;
                const itemWidth = cardWidth + cardMargin;

                // Use fixed scroll speed instead of incrementing
                slider.scrollLeft += (direction * SCROLL_SPEED);

                // Check if we need to reset the scroll position for seamless looping
                if (direction > 0 && slider.scrollLeft >= (itemWidth * (totalCards / 2))) {
                    // When scrolling right and reaching the cloned section, jump back to start
                    isScrolling = true;
                    setTimeout(() => {
                slider.scrollLeft = 0;
                        isScrolling = false;
                    }, 0);
                } else if (direction < 0 && slider.scrollLeft <= 0) {
                    // When scrolling left and reaching the start, jump to the cloned section
                    isScrolling = true;
                    setTimeout(() => {
                        slider.scrollLeft = itemWidth * (totalCards / 2);
                        isScrolling = false;
                    }, 0);
                }
            };

            // Helper function to safely create a new interval
            const createNewInterval = () => {
                // Clear any existing interval first
                if (currentInterval) clearInterval(currentInterval);

                // Create a new interval
                currentInterval = setInterval(autoScroll, 20);
                setScrollInterval(currentInterval);
                return currentInterval;
            };

            // Start the initial interval
            currentInterval = createNewInterval();

        // Mouse interactions
        const handleMouseDown = (e: MouseEvent) => {
                // Don't interfere with clicks on links
                if ((e.target as HTMLElement).closest('a')) {
                    return;
                }

            isDown = true;
                hasMoved = false; // Reset move tracking
            slider.classList.add('cursor-grabbing');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
                if (currentInterval) clearInterval(currentInterval);
                currentInterval = null;
        };

        const handleMouseLeave = () => {
            isDown = false;
            slider.classList.remove('cursor-grabbing');
                createNewInterval();
        };

            const handleMouseUp = (e: MouseEvent) => {
            isDown = false;
            slider.classList.remove('cursor-grabbing');

                // If the mouse hasn't moved significantly, this is a click
                // Don't interfere with it
                if (!hasMoved && (e.target as HTMLElement).closest('a')) {
                    return;
                }

                createNewInterval();
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;

                // Mark that the mouse has moved (this is a drag, not a click)
                hasMoved = true;

            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        };

            // Use event delegation to handle clicks on cards
            const handleClick = (e: MouseEvent) => {
                // If we've moved the mouse (dragging), prevent the click
                if (hasMoved) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            };

        slider.addEventListener('mousedown', handleMouseDown);
        slider.addEventListener('mouseleave', handleMouseLeave);
        slider.addEventListener('mouseup', handleMouseUp);
        slider.addEventListener('mousemove', handleMouseMove);
            slider.addEventListener('click', handleClick, true); // Capture phase

            return {
                cleanup: () => {
                    if (currentInterval) clearInterval(currentInterval);
            if (slider) {
                slider.removeEventListener('mousedown', handleMouseDown);
                slider.removeEventListener('mouseleave', handleMouseLeave);
                slider.removeEventListener('mouseup', handleMouseUp);
                slider.removeEventListener('mousemove', handleMouseMove);
                        slider.removeEventListener('click', handleClick, true);
                    }
                }
            };
        };

        // Wait for the DOM to be fully rendered before setting up sliders
        setTimeout(() => {
            const firstSlider = setupSlider(firstSliderRef.current ? { current: firstSliderRef.current } : { current: document.createElement('div') }, setFirstScrollInterval, 1);
            const secondSlider = setupSlider(secondSliderRef.current ? { current: secondSliderRef.current } : { current: document.createElement('div') }, setSecondScrollInterval, -1);

            return () => {
                firstSlider.cleanup();
                secondSlider.cleanup();
            };
        }, 100);
    }, []);

    // Card data for first row
    const firstRowCards = [
        {
            id: 1,
            title: "Button",
            route: route('doc.components.button'),
            content: (
                <>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2">
                            <div className="w-full h-2 bg-orange-500/40 rounded mb-2"></div>
                            <div className="w-2/3 h-2 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full border-3 border-orange-500/40"></div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-3 h-24">
                        <div className="flex justify-between items-end h-full pb-2">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-1/12 ${i % 3 === 0 ? 'bg-orange-500/50' : 'bg-gray-300 dark:bg-gray-700'} rounded-t-sm`}
                                    style={{ height: `${Math.floor(Math.random() * 70) + 20}%` }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </>
            )
        },
        {
            id: 2,
            title: "Patterns",
            route: route('doc.components.pattern'),
            content: (
                <>
                    <div className="flex-1 h-28 bg-gray-100 dark:bg-gray-800 rounded-md p-4 mb-3 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full border-8 border-gray-300 dark:border-gray-700 relative flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border-t-8 border-orange-500 rotate-45"></div>
                            <div className="text-gray-900 dark:text-white text-xl font-bold">76%</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2">
                            <div className="w-full h-2 bg-orange-500/50 rounded mb-1"></div>
                            <div className="w-1/2 h-2 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2">
                            <div className="w-full h-2 bg-purple-500/50 rounded mb-1"></div>
                            <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        </div>
                    </div>
                </>
            )
        },
        {
            id: 3,
            title: "Input",
            route: route('doc.components.input'),
            content: (
                <div className="space-y-3 mt-2">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-3">
                        <div className="w-1/3 h-2 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-full h-6 bg-white dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-700"></div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-3">
                        <div className="w-1/3 h-2 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-full h-6 bg-white dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-700"></div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-3">
                        <div className="w-full h-6 bg-orange-500 rounded text-center flex items-center justify-center">
                            <div className="w-1/3 h-2 bg-white rounded"></div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    // Card data for second row
    const secondRowCards = [
        {
            id: 1,
            title: "Badges",
            route: route('doc.components.badge'),
            content: (
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 h-40">
                    <div className="grid grid-cols-3 gap-1 p-2 bg-gray-200 dark:bg-gray-700 rounded mb-2">
                        <div className="h-2 bg-gray-400 dark:bg-gray-600 rounded"></div>
                        <div className="h-2 bg-gray-400 dark:bg-gray-600 rounded"></div>
                        <div className="h-2 bg-gray-400 dark:bg-gray-600 rounded"></div>
                    </div>
                    <div className="space-y-2">
                        {[1, 2, 3, 4].map((row) => (
                            <div key={row} className="grid grid-cols-3 gap-1 p-2 bg-white dark:bg-gray-900 rounded">
                                <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                <div className="h-2 bg-orange-500/40 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Avatars",
            route: route('doc.components.avatar'),
            content: (
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 h-40 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-60">
                        <div className="absolute left-0 top-10 w-full h-px bg-orange-500/20"></div>
                        <div className="absolute left-0 top-20 w-full h-px bg-orange-500/20"></div>
                        <div className="absolute left-0 top-30 w-full h-px bg-orange-500/20"></div>
                        <div className="absolute left-10 top-0 w-px h-full bg-orange-500/20"></div>
                        <div className="absolute left-20 top-0 w-px h-full bg-orange-500/20"></div>
                        <div className="absolute left-30 top-0 w-px h-full bg-orange-500/20"></div>
                    </div>
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                    <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-orange-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-orange-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                </div>
            )
        },
        {
            id: 3,
            title: "Charts",
            route: "doc.components.charts",
            content: (
                <div className="flex flex-col gap-3 h-40">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-3 flex-1">
                        <div className="h-full flex items-end justify-between gap-2">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-1/8 ${i % 3 === 1 ? 'bg-orange-500/60' : 'bg-gray-300 dark:bg-gray-700'} rounded-t`}
                                    style={{ height: `${Math.floor(Math.random() * 70) + 20}%` }}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-3 h-12">
                        <div className="w-full h-full flex items-center">
                            <div className="w-full bg-gray-300 dark:bg-gray-700 h-px relative">
                                <div className="absolute h-3 w-3 bg-orange-500 rounded-full -top-1 left-1/4"></div>
                                <div className="absolute h-3 w-3 bg-orange-500 rounded-full -top-1 left-1/2"></div>
                                <div className="absolute h-3 w-3 bg-orange-500 rounded-full -top-1 left-3/4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    // Card component for reuse
    const Card = ({ title, children, route = '' }: {
        title: string,
        children: React.ReactNode,
        route?: string
    }) => (
        <Link
            href={route}
            className="flex-shrink-0 w-72 h-56 bg-transparent dark:bg-transparent rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/20 transform transition-all hover:scale-105 dark:hover:scale-105 card-item"
        >
            <div className="h-full p-4">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{title}</span>
                </div>
                {children}
            </div>
        </Link>
    );


return (

    <section className="bg-white dark:bg-black py-20 overflow-hidden">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Text and Categories */}
            <div className="lg:col-span-5 space-y-12">
                {/* Heading */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white pb-6">
                        Every component you need is{" "}
                        <span className="text-orange-500">ready for production</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Build at an accelerated pace without sacrificing flexibility or control.
                    </p>
                </div>

                {/* Component Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Category 1 */}
                    <div className="group p-5 bg-white dark:bg-transparent rounded-xl border border-gray-200 dark:border-gray-800 hover:border-orange-500/40 dark:hover:border-orange-500/40 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-orange-500/10">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </div>
                        <h3 className="text-gray-900 dark:text-white text-lg font-medium pb-2 group-hover:text-orange-500 transition-colors">UI Components</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Foundational components for shipping features faster.</p>
                    </div>

                    {/* Category 2 */}
                    <div className="group p-5 bg-white dark:bg-transparent rounded-xl border border-gray-200 dark:border-gray-800 hover:border-orange-500/40 dark:hover:border-orange-500/40 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-orange-500/10">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                        </div>
                        <h3 className="text-gray-900 dark:text-white text-lg font-medium pb-2 group-hover:text-orange-500 transition-colors">Advanced Components</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Advanced components for complex use cases.</p>
                    </div>

                    {/* Category 3 */}
                    <div className="group p-5 bg-white dark:bg-transparent rounded-xl border border-gray-200 dark:border-gray-800 hover:border-orange-500/40 dark:hover:border-orange-500/40 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-orange-500/10">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                        </div>
                            <h3 className="text-gray-900 dark:text-white text-lg font-medium pb-2 group-hover:text-orange-500 transition-colors">Dashboards</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Components and tools for building dashboards and internal apps.</p>
                    </div>

                    {/* Category 4 */}
                    <div className="group p-5 bg-white dark:bg-transparent rounded-xl border border-gray-200 dark:border-gray-800 hover:border-orange-500/40 dark:hover:border-orange-500/40 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-orange-500/10">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                            </svg>
                        </div>
                        <h3 className="text-gray-900 dark:text-white text-lg font-medium pb-2 group-hover:text-orange-500 transition-colors">Design Kits</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">The core components available on your favorite design tool.</p>
                    </div>
                </div>
            </div>

            {/* Right Column - Component Showcase */}
            <div className="lg:col-span-7 relative">
                <div className="absolute -top-10 -bottom-10 -right-40 left-0 rounded-3xl blur-3xl"></div>

                {/* Two-Row Interactive Card Slider */}
                <div className="space-y-6">
                    {/* First Row */}
            <div className="relative">
                        {/* Add fade effects on edges */}
                        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10"></div>
                        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10"></div>

                <div
                            ref={firstSliderRef}
                            className="flex gap-6 slider-1 overflow-x-auto py-4 px-1 cursor-grab scrollbar-hide"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch',
                                scrollBehavior: 'auto'
                            }}
                        >
                            {/* Render first row cards */}
                            {firstRowCards.map(card => (
                                <Card
                                    key={card.id}
                                    title={card.title}
                                    route={card.route}
                                >
                                    {card.content}
                                </Card>
                            ))}

                            {/* Duplicate cards for infinite loop effect */}
                            {firstRowCards.map(card => (
                                <Card
                                    key={`dup-${card.id}`}
                                    title={card.title}
                                    route={card.route}
                                >
                                    {card.content}
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="relative">
                        {/* Add fade effects on edges */}
                        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10"></div>
                        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10"></div>

                        <div
                            ref={secondSliderRef}
                            className="flex gap-6 slider-2 overflow-x-auto py-4 px-1 cursor-grab scrollbar-hide"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitOverflowScrolling: 'touch',
                                transform: 'translateX(40px)', // Offset the second row for visual interest
                                scrollBehavior: 'auto',
                                maxWidth: 'calc(100% - 40px)' // Prevent overflow by accounting for the translateX
                            }}
                        >
                            {/* Render second row cards */}
                            {secondRowCards.map(card => (
                                <Card
                                    key={card.id}
                                    title={card.title}
                                    route={card.route}
                                >
                                    {card.content}
                                </Card>
                            ))}

                            {/* Duplicate cards for infinite loop effect */}
                            {secondRowCards.map(card => (
                                <Card
                                    key={`dup-${card.id}`}
                                    title={card.title}
                                    route={card.route}
                                >
                                    {card.content}
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);
};

export default ComponentsShowcase;
