import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import WebLayout from '../../layouts/web-layout';
import { CodeThemeProvider } from '@/components/codeBlock/contexts/code-theme-context';
import { motion } from 'framer-motion';

// Sample blog data with real images and routes
const blogPosts = [
  { id: 1, date: "May 15, 2023", image: "/assets/images/blog-1.png", href: route('blog.frontend') },
  { id: 2, date: "April 28, 2023", image: "/assets/images/blog-2.png", href: route('blog.frontend') },
  { id: 3, date: "April 15, 2023", image: "/assets/images/blog-3.png", href: route('blog.frontend') },
  { id: 4, date: "April 3, 2023", image: "/assets/images/blog-4.png", href: route('blog.react') },
  { id: 5, date: "March 22, 2023", image: "/assets/images/blog-5.png", href: route('blog.other-libraries') },
  { id: 6, date: "March 10, 2023", image: "/assets/images/blog-6.png", href: route('blog.frontend') },
  { id: 7, date: "February 28, 2023", image: "/assets/images/blog-1.png", href: route('blog.frontend') },
  { id: 8, date: "February 15, 2023", image: "/assets/images/blog-2.png", href: route('blog.frontend') },
];

const Blog = () => {
const [hoveredPost, setHoveredPost] = useState<number | null>(null);

    return (
    <CodeThemeProvider>
        <WebLayout title="Lebify - Blog" description="Insights, tutorials, and updates from the Lebify team">
            {/* Hero Section */}
            <section className="bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden pt-24">
                <div className="container mx-auto px-6 relative z-20 py-16 md:py-24">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Image on the left */}
                        <div className="w-full md:w-1/2">
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }} className="rounded-xl overflow-hidden max-w-md mx-auto">
                                <img src="/assets/images/Leb-icon.png" alt="Blog Hero"
                                    className="w-full h-auto object-contain" />
                            </motion.div>
                        </div>

                        {/* Text on the right */}
                        <div className="w-full md:w-1/2">
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}>
                                Insights for Modern{" "}
                                <span className="text-orange-600 dark:text-orange-400">
                                    Developers
                                </span>
                            </motion.h1>

                            <motion.p className="text-xl text-gray-700 dark:text-gray-300 pt-4"
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}>
                                Discover the latest articles, tutorials, and updates to help
                                you build better web experiences with Lebify.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Articles Grid */}
            <section className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white pb-20">
                <div className="container mx-auto px-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {blogPosts.slice(2).map((post, index) => (
                        <Link key={post.id} href={post.href} className="group block">
                        <motion.div
                            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 0.98 }}
                            onMouseEnter={()=> setHoveredPost(post.id)}
                            onMouseLeave={() => setHoveredPost(null)}
                            style={{
                                borderColor: hoveredPost === post.id ? 'rgb(234, 88, 12)' : ''
                            }}
                            >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img src={post.image} alt={`Blog post ${post.id}`}
                                    className="w-full h-full object-contain object-center transition-transform duration-700 ease-out"
                                    style={{
                                        transform:
                                            hoveredPost === post.id ? "scale(1.05)" : "scale(1)",
                                    }} />
                            </div>
                        </motion.div>
                        </Link>
                        ))}
                    </div>
                </div>
            </section>
        </WebLayout>
    </CodeThemeProvider>
    );
    };

    export default Blog;
