import React, { useState, useEffect, useRef } from 'react';

export const Community = () => {
const [counters, setCounters] = useState({
developers: 0,
projects: 0,
countries: 0,
contributions: 0
});

const [activeTestimonial, setActiveTestimonial] = useState(0);
const testimonialInterval = useRef<NodeJS.Timeout | null>(null);

const finalValues = {
developers: 10000,
projects: 1500,
countries: 120,
contributions: 25000
};

const testimonials = [
{
content: "Lebify has transformed how we build our interfaces. The components are intuitive and the documentation is exceptional. We've reduced our development time by 40% since adopting it.",
author: "Sarah Johnson",
role: "Senior Frontend Developer",
company: "TechVision",
avatar: "https://randomuser.me/api/portraits/women/44.jpg"
},
{
content: "The flexibility and performance of Lebify components have cut our development time in half. It's now our go-to UI library for all new projects. The community support is outstanding.",
author: "Michael Chen",
role: "Lead UI Engineer",
company: "InnovateX",
avatar: "https://randomuser.me/api/portraits/men/32.jpg"
},
{
content: "Clean, consistent, and incredibly well-designed. Lebify has become an essential part of our design system. Our designers and developers finally speak the same language.",
author: "Emma Rodriguez",
role: "UX Designer",
company: "Creative Solutions",
avatar: "https://randomuser.me/api/portraits/women/63.jpg"
}
];

// Animate counters on component mount
useEffect(() => {
const duration = 2000; // ms
const frameDuration = 1000 / 60; // 60fps
const totalFrames = Math.round(duration / frameDuration);
let frame = 0;

const timer = setInterval(() => {
frame++;
const progress = frame / totalFrames;

setCounters({
developers: Math.floor(progress * finalValues.developers),
projects: Math.floor(progress * finalValues.projects),
countries: Math.floor(progress * finalValues.countries),
contributions: Math.floor(progress * finalValues.contributions)
});

if (frame === totalFrames) {
clearInterval(timer);
}
}, frameDuration);

return () => clearInterval(timer);
}, []);

// Auto-rotate testimonials
useEffect(() => {
testimonialInterval.current = setInterval(() => {
setActiveTestimonial(prev => (prev + 1) % testimonials.length);
}, 5000);

return () => {
if (testimonialInterval.current) {
clearInterval(testimonialInterval.current);
}
};
}, [testimonials.length]);

return (
<section className="py-24 bg-white dark:bg-black transition-colors duration-300">
    <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-orange-500 mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white pb-6">
                Join Our <span className="text-orange-500">Community</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl text-center">
                Connect with thousands of developers building exceptional experiences
            </p>
        </div>

        {/* Enhanced Stats Cards with better responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-24 max-w-5xl mx-auto">
            {/* Developers Stat */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-20 group-hover:opacity-70 transition duration-300"></div>
                <div className="relative bg-white dark:bg-black rounded-xl p-5 border border-gray-100 dark:border-gray-800 h-full flex flex-col items-center justify-center group-hover:border-transparent transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {counters.developers.toLocaleString()}+
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Developers</p>
                </div>
            </div>

            {/* Projects Stat */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-70 transition duration-300"></div>
                <div className="relative bg-white dark:bg-black rounded-xl p-5 border border-gray-100 dark:border-gray-800 h-full flex flex-col items-center justify-center group-hover:border-transparent transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {counters.projects.toLocaleString()}+
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Projects</p>
                </div>
            </div>

            {/* Countries Stat */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-xl blur opacity-20 group-hover:opacity-70 transition duration-300"></div>
                <div className="relative bg-white dark:bg-black rounded-xl p-5 border border-gray-100 dark:border-gray-800 h-full flex flex-col items-center justify-center group-hover:border-transparent transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {counters.countries.toLocaleString()}+
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Countries</p>
                </div>
            </div>

            {/* Contributions Stat */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-70 transition duration-300"></div>
                <div className="relative bg-white dark:bg-black rounded-xl p-5 border border-gray-100 dark:border-gray-800 h-full flex flex-col items-center justify-center group-hover:border-transparent transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {counters.contributions.toLocaleString()}+
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Contributions</p>
                </div>
            </div>
        </div>

        {/* Enhanced CTA with Video and Testimonials */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 backdrop-blur-sm"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch relative">
                <div className="p-8 md:p-12 lg:p-16 relative z-10 bg-white/90 dark:bg-black/90 flex flex-col justify-between h-full">
                    <div>
                        <div className="w-12 h-1 bg-orange-500 mb-8 rounded-full"></div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Build with a <span className="text-orange-500">thriving community</span>
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-lg pb-10 leading-relaxed">
                            Join thousands of developers who are creating exceptional user experiences with Lebify. Share
                            your work, get feedback, and collaborate on the next generation of web applications.
                        </p>
                    </div>

                    {/* Refined Testimonials Carousel */}
                    <div className="mb-10">
                        <div className="flex items-center justify-between pb-6">
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                                <span className="w-8 h-8 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 rounded-full mr-3">
                                    <svg className="w-4 h-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </svg>
                                </span>
                                Community Voices
                            </h4>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-500 transition-colors border border-gray-200 dark:border-gray-700 cursor-pointer"
                                    aria-label="Previous testimonial"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-500 transition-colors border border-gray-200 dark:border-gray-700 cursor-pointer"
                                    aria-label="Next testimonial"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Cleaner testimonial card */}
                        <div className="relative overflow-hidden">
                            <div className="relative bg-white dark:bg-black rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                                {/* Testimonial slides with improved animation */}
                                <div className="relative">
                                    <div
                                        className="transition-transform duration-500 ease-out flex"
                                        style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                                    >
                                        {testimonials.map((testimonial, index) => (
                                            <div key={index} className="w-full flex-shrink-0 p-6 md:p-8">
                                                <div className="flex flex-col h-full">
                                                    {/* Quote mark */}
                                                    <div className="mb-4">
                                                        <svg className="w-6 h-6 md:w-8 md:h-8 text-orange-500/30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                                        </svg>
                                                    </div>

                                                    {/* Testimonial content */}
                                                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed pb-8">
                                                        {testimonial.content}
                                                    </p>

                                                    {/* Improved author info with better mobile layout */}
                                                    <div className="mt-auto flex flex-col sm:flex-row sm:items-center">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0">
                                                                <img
                                                                    src={testimonial.avatar}
                                                                    alt={testimonial.author}
                                                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-orange-500 ring-offset-2 dark:ring-offset-black"
                                                                />
                                                            </div>
                                                            <div className="ml-3 md:ml-4">
                                                                <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{testimonial.author}</p>
                                                                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3 sm:mt-0 sm:ml-auto flex">
                                                            {[...Array(5)].map((_, i) => (
                                                                <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Fixed progress indicator */}
                            <div className="mt-8 relative">
                                {/* Interactive dots with connecting line - fixed to not extend beyond dots */}
                                <div className="flex items-center justify-between relative px-1 py-1">
                                    {/* Connecting line - now positioned between first and last dot only */}
                                    <div className="absolute h-0.5 bg-gray-200 dark:bg-gray-700 left-4 right-4 top-1/2 transform -translate-y-1/2 z-0"></div>

                                    {/* Progress line - adjusted to match connecting line */}
                                    <div
                                        className="absolute h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 left-4 top-1/2 transform -translate-y-1/2 z-0 transition-all duration-500 ease-out"
                                        style={{
                                            width: `calc(${(activeTestimonial / (testimonials.length - 1)) * 100}% - 8px)`,
                                        }}
                                    ></div>

                                    {/* Interactive dots - mobile responsive */}
                                    {testimonials.map((_, index) => (
                                        <div
                                            key={index}
                                            className="relative z-10 flex flex-col items-center cursor-pointer group"
                                            onClick={() => setActiveTestimonial(index)}
                                        >
                                            {/* Dot */}
                                            <div
                                                className={`w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center
                                                    ${index <= activeTestimonial
                                                        ? 'bg-orange-500 border-2 border-orange-500'
                                                        : 'bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-600'
                                                    }
                                                    ${index === activeTestimonial ? 'scale-125' : 'group-hover:scale-110'}
                                                `}
                                            >
                                                {index <= activeTestimonial && (
                                                    <span className={`
                                                        ${index === activeTestimonial
                                                            ? 'opacity-100 scale-100'
                                                            : 'opacity-0 scale-0'
                                                        }
                                                        transition-all duration-300 text-white text-[8px] font-bold
                                                    `}>
                                                        ✓
                                                    </span>
                                                )}
                                            </div>

                                            {/* Label - hidden on small screens */}
                                            <div className={`
                                                absolute -bottom-6 whitespace-nowrap text-xs font-medium transition-all duration-300 hidden sm:block
                                                ${index === activeTestimonial
                                                    ? 'opacity-100 text-orange-500'
                                                    : 'opacity-60 text-gray-500 dark:text-gray-400'
                                                }
                                            `}>
                                                {index === 0 ? 'First' : index === testimonials.length - 1 ? 'Last' : `Review ${index + 1}`}
                                            </div>

                                            {/* Pulse effect for active dot */}
                                            {index === activeTestimonial && (
                                                <span className="absolute inset-0 rounded-full animate-ping bg-orange-400 opacity-30"></span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-medium transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
                            </svg>
                            Join Discord
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium border border-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="h-full">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ minHeight: '100%' }}
                    >
                        <source src="/assets/videos/Community.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </div>
</section>
);
};
