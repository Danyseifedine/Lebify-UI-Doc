import React, { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';

// Define interfaces for form data and errors
interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    [key: string]: string | undefined;
}

export const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const formRef = useRef<HTMLDivElement>(null);
    const successRef = useRef<HTMLDivElement>(null);

    // Scroll to success message when it appears
    useEffect(() => {
        if (success && successRef.current) {
            successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [success]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        // Store current scroll position
        const scrollPosition = window.scrollY;

        router.post('/messages', formData as unknown as Record<string, string | number>, {
            preserveScroll: true, // Preserve scroll position
            onSuccess: () => {
                setSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setIsSubmitting(false);

                // Restore scroll position
                window.scrollTo(0, scrollPosition);

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            },
            onError: (errors) => {
                setErrors(errors as FormErrors);
                setIsSubmitting(false);

                // Restore scroll position
                window.scrollTo(0, scrollPosition);
            }
        });
    };

    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-black">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16">
                    <div className="w-16 h-1 bg-orange-500 mb-6 rounded-full"></div>
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white pb-6">
                        Get in <span className="text-orange-500">Touch</span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl text-center">
                        Have questions or feedback? We'd love to hear from you.
                    </p>
                </div>

                {/* Two-column layout for form and contact cards */}
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Contact Form Card - Left Column */}
                        <div className="w-full lg:w-7/12" ref={formRef}>
                            <div className="bg-white dark:bg-transparent rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 transform transition-all duration-500 hover:shadow-2xl h-full">
                                <div className="p-8 md:p-10">
                                    {/* Enhanced Success Message with Animation */}
                                    <AnimatePresence>
                                        {success && (
                                            <motion.div
                                                ref={successRef}
                                                className="mb-6 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-lg"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 bg-white dark:bg-gray-800 rounded-full p-2 mr-3">
                                                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-lg">Message Sent Successfully!</p>
                                                        <p className="text-white text-opacity-90">We'll get back to you as soon as possible.</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        {/* Name Input */}
                                        <div className="group">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Your Name
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`block w-full pl-10 pr-3 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-lg bg-white dark:bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            {errors.name && <p className="pt-1 text-sm text-red-500">{errors.name}</p>}
                                        </div>

                                        {/* Email Input */}
                                        <div className="group">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`block w-full pl-10 pr-3 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-lg bg-white dark:bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                                                    placeholder="you@example.com"
                                                />
                                            </div>
                                            {errors.email && <p className="pt-1 text-sm text-red-500">{errors.email}</p>}

                                        </div>

                                        {/* Subject Select */}
                                        <div className="group">
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Subject
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                    </svg>
                                                </div>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className={`block w-full pl-10 pr-10 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 appearance-none`}
                                                >
                                                    <option value="" disabled>Select a subject</option>
                                                    <option value="general">General Inquiry</option>
                                                    <option value="support">Technical Support</option>
                                                    <option value="feedback">Feedback</option>
                                                    <option value="partnership">Partnership Opportunity</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            {errors.subject && <p className="pt-1 text-sm text-red-500">{errors.subject}</p>}
                                        </div>

                                        {/* Message Textarea */}
                                        <div className="group">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Your Message
                                            </label>
                                            <div className="relative">
                                                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                                                    <svg className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                                    </svg>
                                                </div>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={5}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className={`block w-full pl-10 pr-3 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-lg bg-white dark:bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                                                    placeholder="How can we help you?"
                                                ></textarea>
                                            </div>
                                            {errors.message && <p className="pt-1 text-sm text-red-500">{errors.message}</p>}
                                        </div>

                                        {/* Submit Button with enhanced animation */}
                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Send Message</span>
                                                        <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Cards - Right Column - Enhanced */}
                        <div className="w-full lg:w-5/12 flex flex-col gap-8">
                            {/* Email Card */}
                            <div
                                className="bg-white dark:bg-transparent rounded-2xl p-8 shadow-md border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg flex-1 group">
                                <div className="flex items-center mb-6">
                                    <div
                                        className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-xl flex items-center justify-center mr-6 group-hover:scale-105 transition-transform duration-300">
                                        <svg className="w-8 h-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white pb-1">Email Support</h3>
                                        <p className="text-gray-600 dark:text-gray-400">We respond within 24 hours</p>
                                    </div>
                                </div>
                                <div className="pl-0 mt-4 border-t border-gray-100 dark:border-gray-800 pt-5">
                                    <a href="mailto:Lebify@gmail.com"
                                        className="inline-flex items-center text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors duration-200">
                                        Lebify@gmail.com
                                        <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 duration-200"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div
                                className="bg-white dark:bg-transparent rounded-2xl p-8 shadow-md border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg flex-1 group">
                                <div className="flex items-center mb-6">
                                    <div
                                        className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl flex items-center justify-center mr-6 group-hover:scale-105 transition-transform duration-300">
                                        <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white pb-1">Phone Contact</h3>
                                        <p className="text-gray-600 dark:text-gray-400">Available weekdays 8am-6pm</p>
                                    </div>
                                </div>
                                <div className="pl-0 mt-4 border-t border-gray-100 dark:border-gray-800 pt-5">
                                    <a href="tel:+9613009938"
                                        className="inline-flex items-center text-lg font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200">
                                        +961 3009938
                                        <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 duration-200"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div
                                className="bg-white dark:bg-transparent rounded-2xl p-8 shadow-md border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg flex-1 group">
                                <div className="flex items-center mb-6">
                                    <div
                                        className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl flex items-center justify-center mr-6 group-hover:scale-105 transition-transform duration-300">
                                        <svg className="w-8 h-8 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Visit Our Office
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">Come say hello in person</p>
                                    </div>
                                </div>
                                <div className="pl-0 mt-4 border-t border-gray-100 dark:border-gray-800 pt-5">
                                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center text-lg font-medium text-purple-500 hover:text-purple-600 transition-colors duration-200">
                                        Barja, Hakroun
                                        <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 duration-200"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
