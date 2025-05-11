import React from 'react';
import WebLayout from '../../../layouts/web-layout';
import { CodeThemeProvider } from '@/components/codeBlock/contexts/code-theme-context';
import { CodeBlock } from '@/components/codeBlock/code-block';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

const BackendArticle = () => {
return (
<CodeThemeProvider>
    <WebLayout title="Backend Development: Building Robust Server-Side Applications"
        description="Learn about modern backend development technologies, architectures, and best practices for creating scalable and secure server-side applications.">

        {/* Hero Section with Centered Image */}
        <section className="pt-32 pb-8 md:pb-16 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    {/* Centered Image */}
                    <div className="w-full max-w-4xl">
                        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-square relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            <img src="/assets/images/backend-blog.png" alt="Backend Development" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Article Content - Enhanced spacing and typography */}
        <section className="bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">

                    {/* Introduction - Enhanced typography and spacing */}
                    <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none pb-12 md:pb-20">
                        <h1
                            className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6 md:pb-8 text-gray-900 dark:text-white relative text-left md:text-left">
                            Introduction to <span className="text-orange-500">Backend Development</span>
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed mb-6">
                            Backend development is the foundation of modern web applications, powering everything from simple websites to complex enterprise systems.
                            While frontend development focuses on what users see and interact with, backend development deals with server-side logic, databases,
                            APIs, and the infrastructure that makes applications work behind the scenes.
                        </p>
                        <br />
                        <p className="text-lg md:text-xl leading-relaxed">
                            This article explores the core technologies, architectures, and best practices that drive backend development in today's digital landscape.
                            Whether you're a beginner looking to understand the server side of web development or an experienced developer wanting to expand your knowledge,
                            this guide will provide valuable insights into building robust, scalable, and secure backend systems.
                        </p>
                    </div>

                    {/* Core Technologies - Enhanced with icons and better spacing */}
                    <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none mb-12 md:mb-20">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6 md:pb-8 text-gray-900 dark:text-white relative text-left md:text-left">
                            Core Backend <span className="text-orange-500">Technologies</span>
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed pb-6 md:pb-10">
                            Backend development relies on several key technologies and languages:
                        </p>

                        {/* Server-Side Languages Section with icon */}
                        <div className="mb-8 md:mb-12 bg-transparent border-2 p-4 md:p-8 rounded-2xl">
                            <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                                <div
                                    className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-blue-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left">
                                    Server-Side Languages
                                </h3>
                            </div>
                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                Backend development can be done in various programming languages, each with its own strengths and ecosystems:
                            </p>
                            <br />
                            <ul className="list-disc pl-6 space-y-2 text-lg md:text-xl leading-relaxed mb-6">
                                <li><strong>Node.js (JavaScript)</strong> - Event-driven, non-blocking I/O model that's perfect for real-time applications</li>
                                <li><strong>Python</strong> - Known for readability and extensive libraries, popular for data-heavy applications</li>
                                <li><strong>Java</strong> - Enterprise-grade language with strong typing and robust performance</li>
                                <li><strong>PHP</strong> - Powers a large portion of the web, including WordPress and Facebook</li>
                                <li><strong>Ruby</strong> - Emphasizes simplicity and productivity with the Rails framework</li>
                                <li><strong>Go</strong> - Designed for performance and concurrency, popular for microservices</li>
                                <li><strong>C#/.NET</strong> - Microsoft's ecosystem for building enterprise applications</li>
                            </ul>
                            <div className="mt-8 shadow-lg rounded-xl overflow-hidden">
                                <CodeBlock language="javascript" code={`// Example of a simple Node.js server
const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Define a route
app.get('/api/users', (req, res) => {
  // In a real app, this would fetch from a database
  const users = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Davis' }
  ];

  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`} />
                            </div>
                        </div>

                        {/* Databases Section with icon */}
                        <div className="mb-8 md:mb-12 bg-transparent border-2 p-4 md:p-8 rounded-2xl">
                            <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                                <div
                                    className="w-12 h-12 md:w-16 md:h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-green-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left">
                                    Databases
                                </h3>
                            </div>
                            <p className="text-lg md:text-xl leading-relaxed pb-6">
                                Databases store and manage application data. They come in two main types:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-transparent border-2 p-6 rounded-xl shadow-md">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white pb-3">Relational Databases (SQL)</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                        <li>MySQL</li>
                                        <li>PostgreSQL</li>
                                        <li>SQLite</li>
                                        <li>Microsoft SQL Server</li>
                                        <li>Oracle Database</li>
                                    </ul>
                                    <p className="pt-3 text-gray-700 dark:text-gray-300">
                                        Best for structured data with complex relationships and transactions.
                                    </p>
                            </div>
                                <div className="bg-transparent border-2 p-6 rounded-xl shadow-md">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white pb-3">NoSQL Databases</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                        <li>MongoDB (Document)</li>
                                        <li>Redis (Key-Value)</li>
                                        <li>Cassandra (Column)</li>
                                        <li>Neo4j (Graph)</li>
                                        <li>Firebase (Real-time)</li>
                                    </ul>
                                    <p className="pt-3 text-gray-700 dark:text-gray-300">
                                        Ideal for unstructured data, high scalability, and flexible schemas.
                                    </p>
                        </div>
                                </div>
                            <div className="mt-8 shadow-lg rounded-xl overflow-hidden">
                                <CodeBlock language="javascript" code={`-- SQL example: Creating a users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL
);

-- Inserting a user
INSERT INTO users (username, email, password_hash)
VALUES ('johndoe', 'john@example.com', '$2a$12$HKveMsPlst15O0cOhi.CkOiS.V6r0pMmr76WNpBp4jJeO7nVFCiNi');

-- Querying users
SELECT id, username, email, created_at
FROM users
WHERE created_at > '2023-01-01'
ORDER BY created_at DESC
LIMIT 10;`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Modern Frameworks - Enhanced with cards and visual elements */}
        <section className="bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white pb-8">
                            Modern Backend <span className="text-orange-500">Frameworks</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto pb-8">
                            While the core technologies provide the foundation, modern backend frameworks and libraries
                            help developers build complex, interactive applications more efficiently. These tools offer
                            structured approaches to common challenges, reusable components, and optimized rendering.
                        </p>
                    </div>

                    {/* Framework cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {/* Express Card */}
                        <div
                            className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-6 rounded-xl shadow-md border border-yellow-200 dark:border-yellow-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-yellow-500 mr-3"
                                    fill="currentColor">
                                    <path
                                        d="M24 18.588a1.529 1.529 0 01-1.543 1.5c-1.527 0-2.77-.945-2.77-2.6V11.94h-1.97v-1.9h2V7.15l1.979-1.533v4.45h2.495v1.9h-2.495v5.446c0 .75.362 1.2.906 1.2.254 0 .494-.14.734-.4a1.506 1.506 0 011.664 1.275zm-5.25-3.006a3.375 3.375 0 01-3.375 3.375c-1.855 0-3.375-1.52-3.375-3.375s1.52-3.375 3.375-3.375c1.855-.001 3.375 1.52 3.375 3.375zm-1.5 0c0-1.036-.84-1.875-1.875-1.875s-1.875.84-1.875 1.875.84 1.875 1.875 1.875 1.875-.84 1.875-1.875zM12 20.25a3.375 3.375 0 01-3.375-3.375c0-1.855 1.52-3.375 3.375-3.375s3.375 1.52 3.375 3.375-1.52 3.375-3.375 3.375zm0-1.5c1.036 0 1.875-.84 1.875-1.875s-.84-1.875-1.875-1.875-1.875.84-1.875 1.875.84 1.875 1.875 1.875zm-4.125-1.875a3.375 3.375 0 01-3.375 3.375c-1.855 0-3.375-1.52-3.375-3.375s1.52-3.375 3.375-3.375c1.855-.001 3.375 1.52 3.375 3.375zm-1.5 0c0-1.036-.84-1.875-1.875-1.875s-1.875.84-1.875 1.875.84 1.875 1.875 1.875 1.875-.84 1.875-1.875zM0 18.375c0-1.855 1.52-3.375 3.375-3.375s3.375 1.52 3.375 3.375-1.52 3.375-3.375 3.375c-1.855 0-3.375-1.52-3.375-3.375zm1.5 0c0 1.036.84 1.875 1.875 1.875s1.875-.84 1.875-1.875-.84-1.875-1.875-1.875-1.875.84-1.875 1.875z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Express.js</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
                            </p>
                        </div>

                        {/* Laravel Card */}
                        <div
                            className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl shadow-md border border-red-200 dark:border-red-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-red-500 mr-3" fill="currentColor">
                                    <path
                                        d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Laravel</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A PHP framework with expressive, elegant syntax that makes web development enjoyable and creative
                            </p>
                        </div>

                        {/* Spring Card */}
                        <div
                            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl shadow-md border border-blue-200 dark:border-blue-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500 mr-3" fill="currentColor">
                                    <path
                                        d="M11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.058 18.297h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.648 7.057 15.648z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Spring</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A Java framework for building enterprise applications, providing a comprehensive programming and configuration model
                            </p>
                        </div>

                        {/* Ruby on Rails Card */}
                        <div
                            className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl shadow-md border border-red-200 dark:border-red-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-red-500 mr-3" fill="currentColor">
                                    <path
                                        d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h-.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089v.026-.029.003zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ruby on Rails</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A web application framework that includes everything needed to create database-backed web applications
                            </p>
                        </div>

                        {/* ASP.NET Core Card */}
                        <div
                            className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl shadow-md border border-purple-200 dark:border-purple-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-500 mr-3"
                                    fill="currentColor">
                                    <path
                                        d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.868 0 0 1-.869.867.868.868 0 0 1-.868-.867.867.867 0 0 1 .868-.864.867.867 0 0 1 .869.864" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">ASP.NET Core</h3>
                        </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A cross-platform, high-performance framework for building modern, cloud-based, Internet-connected applications
                            </p>
                    </div>

                        {/* Django Card */}
                        <div
                            className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl shadow-md border border-green-200 dark:border-green-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-500 mr-3"
                                    fill="currentColor">
                                    <path
                                        d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Django</h3>
                        </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A high-level Python web framework that encourages rapid development and clean, pragmatic design
                            </p>
                        </div>
                    </div>

                    {/* Framework Example */}
                    <div className="bg-transparent border-2 p-6 rounded-xl shadow-md mb-10">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white pb-4">Express.js Example</h3>
                        <p className="text-gray-700 dark:text-gray-300 pb-6">
                            Here's a simple REST API built with Express.js that demonstrates routing, middleware, and error handling:
                        </p>
                        <div className="shadow-lg rounded-xl overflow-hidden">
                            <CodeBlock language="javascript" code={`// app.js - A simple Express.js REST API
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.path} - \${new Date().toISOString()}\`);
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().select('-__v');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-__v');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* APIs and RESTful Services Section */}
        <section className="bg-white dark:bg-black py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none mb-12 md:mb-20">
                        <div className="flex items-center mb-8">
                            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white relative m-0">
                                APIs and <span className="text-orange-500">RESTful Services</span>
                        </h2>
                        </div>

                        <div className="bg-gradient-to-r from-orange-50 to-transparent dark:from-orange-900/10 dark:to-transparent p-6 rounded-xl border-l-4 border-orange-500 mb-10">
                            <p className="text-lg md:text-xl leading-relaxed m-0">
                                APIs (Application Programming Interfaces) are the backbone of modern web applications, allowing different systems to communicate with each other.
                                RESTful APIs are a popular architectural style for designing networked applications.
                        </p>
                    </div>

                        {/* REST API Methods Table */}
                        <div className="overflow-x-auto mb-10 shadow-xl rounded-xl">
                            <table className="min-w-full bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                <thead className="bg-orange-100 dark:bg-orange-900/30">
                                    <tr>
                                        <th className="py-4 px-6 text-left text-gray-900 dark:text-white font-bold">HTTP Method</th>
                                        <th className="py-4 px-6 text-left text-gray-900 dark:text-white font-bold">CRUD Operation</th>
                                        <th className="py-4 px-6 text-left text-gray-900 dark:text-white font-bold">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200 font-medium">GET</td>
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Read</td>
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Retrieve a resource or collection of resources</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200 font-medium">POST</td>
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Create</td>
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Create a new resource</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200 font-medium">PUT</td>
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Update</td>
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Replace an existing resource</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200 font-medium">PATCH</td>
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Update</td>
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Partially update an existing resource</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200 font-medium">DELETE</td>
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Delete</td>
                                        <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Remove a resource</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>

                        {/* API Example */}
                        <div className="bg-gradient-to-br from-orange-50 to-white dark:from-gray-800/50 dark:to-black p-8 rounded-xl shadow-lg border border-orange-200 dark:border-orange-900/30">
                            <div className="flex items-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white m-0">RESTful API Example</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 pb-6">
                                Here's an example of RESTful API endpoints for a blog application:
                            </p>
                            <div className="overflow-x-auto shadow-lg rounded-xl">
                                <table className="min-w-full bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                    <thead className="bg-orange-100 dark:bg-orange-900/30">
                                        <tr>
                                            <th className="py-4 px-6 text-left text-gray-900 dark:text-white font-bold">Endpoint</th>
                                            <th className="py-4 px-6 text-left text-gray-900 dark:text-white font-bold">Method</th>
                                            <th className="py-4 px-6 text-left text-gray-900 dark:text-white font-bold">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200 font-mono">/api/posts</td>
                                            <td className="py-4 px-6 text-green-600 dark:text-green-400 font-medium">GET</td>
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Get all blog posts</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200 font-mono">/api/posts/:id</td>
                                            <td className="py-4 px-6 text-green-600 dark:text-green-400 font-medium">GET</td>
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Get a specific blog post</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200 font-mono">/api/posts</td>
                                            <td className="py-4 px-6 text-blue-600 dark:text-blue-400 font-medium">POST</td>
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Create a new blog post</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200 font-mono">/api/posts/:id</td>
                                            <td className="py-4 px-6 text-yellow-600 dark:text-yellow-400 font-medium">PUT</td>
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Update a blog post</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200 font-mono">/api/posts/:id</td>
                                            <td className="py-4 px-6 text-red-600 dark:text-red-400 font-medium">DELETE</td>
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Delete a blog post</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200 font-mono">/api/posts/:id/comments</td>
                                            <td className="py-4 px-6 text-green-600 dark:text-green-400 font-medium">GET</td>
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Get all comments for a post</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200 font-mono">/api/posts/:id/comments</td>
                                            <td className="py-4 px-6 text-blue-600 dark:text-blue-400 font-medium">POST</td>
                                            <td className="py-4 px-6 text-gray-800 dark:text-gray-200">Add a comment to a post</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            </div>
                </div>
            </div>
        </section>

        {/* Performance Optimization - Enhanced with visual elements */}
        <section className=" bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white pb-8">
                            Performance <span className="text-orange-500">Optimization</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Website performance directly impacts user experience and conversion rates. Backend developers
                            need to optimize their code and assets to ensure fast loading times and smooth interactions.
                        </p>
                    </div>

                    {/* Performance metrics visualization */}
                    <div className="my-10 bg-transparent border-2 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white pb-6">Key Performance <span
                                className="text-orange-500">Metrics</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-transparent border-2 p-6 rounded-xl shadow-md">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">First Contentful
                                        Paint</h4>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Measures how long it takes for the first content to appear on screen
                                </p>
                            </div>
                            <div className="bg-transparent border-2 p-6 rounded-xl shadow-md">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Time to
                                        Interactive</h4>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Measures when the page becomes fully interactive for the user
                                </p>
                            </div>
                            <div className="bg-transparent border-2 p-6 rounded-xl shadow-md">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Cumulative
                                        Layout Shift</h4>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Measures visual stability and unexpected layout shifts
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="text-xl leading-relaxed pb-10">
                        Key performance optimization techniques include:
                    </p>

                    <ul className="space-y-4 mb-10">
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Minimizing and compressing server-side code</span>
                        </li>
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Optimizing database queries and indexing</span>
                        </li>
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Implementing caching strategies</span>
                        </li>
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Leveraging CDNs for content delivery</span>
                        </li>
                    </ul>

                    <div
                        className="bg-transparent border-2 p-6 rounded-xl shadow-md border border-blue-500 mb-8">
                        <div className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Pro Tip</h4>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                            Tools like New Relic, Datadog, and Prometheus can help monitor and optimize backend performance
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* RESTful API Design - Enhanced with visual elements and better styling */}
        <section className="py-10 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white pb-8">
                            RESTful <span className="text-orange-500">API Design</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            RESTful APIs are the backbone of modern web applications, enabling seamless communication between
                            frontend and backend systems. Designing APIs with REST principles ensures scalability, maintainability,
                            and interoperability across different platforms and technologies.
                        </p>
                    </div>

                    <div
                        className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-2xl mb-24 border border-purple-100 dark:border-purple-800/30 shadow-md">
                        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-400 pb-4">Why
                                    RESTful APIs Matter</h3>
                                <p className="text-purple-700 dark:text-purple-300 text-lg">
                                    RESTful APIs provide a standardized way for web services to communicate, making them essential
                                    for building scalable, distributed systems. They enable seamless integration between different
                                    services and applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white pb-8">Key <span
                            className="text-orange-500">REST Principles</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <div
                            className="bg-transparent  p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start mb-4">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-600 dark:text-green-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Statelessness
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Each request contains all information needed to complete it, no client context stored on server
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-transparent  p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start mb-4">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Client-Server
                                        Architecture</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Separation of concerns between client and server improves portability and scalability
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-transparent  p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start mb-4">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-amber-600 dark:text-amber-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Cacheable
                                        Responses</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Responses must define themselves as cacheable or non-cacheable to improve performance
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-transparent  p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start mb-4">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-600 dark:text-red-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Uniform Interface
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Standardized way to communicate between client and server using HTTP methods
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-transparent  p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start mb-4">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Layered System</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Client cannot tell whether it's connected directly to the end server or an intermediary
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-transparent  p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start mb-4">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-pink-600 dark:text-pink-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Resource-Based
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Resources are identified in requests and transferred in responses using representations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-transparent border-2 p-6 rounded-xl shadow-md border-l-4 border-purple-500 mb-8">
                        <div className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-2" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">API Best Practices</h4>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                            Use consistent naming conventions, implement proper error handling, version your APIs, and provide
                            comprehensive documentation. Consider using tools like Swagger or OpenAPI to document your endpoints.
                        </p>
                    </div>
                </div>
            </div>
        </section>

         {/* Backend Architectures Section */}
        <section className="bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none mb-12 md:mb-20">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6 md:pb-8 text-gray-900 dark:text-white relative text-left md:text-left">
                            Backend <span className="text-orange-500">Architectures</span>
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed pb-6 md:pb-10">
                            Modern backend systems can be built using various architectural patterns, each with its own advantages and trade-offs.
                            The choice of architecture significantly impacts scalability, maintainability, and performance.
                        </p>

                        {/* Monolithic Architecture */}
                        <div className="mb-10 bg-transparent border-2 p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 shadow-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Monolithic Architecture</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 pb-4 text-lg">
                                In a monolithic architecture, all components of the application (routing, middleware, business logic, database interactions)
                                are packaged together as a single unit.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white dark:bg-gray-800/50 border border-blue-200 dark:border-blue-800/30 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h4 className="font-bold text-blue-700 dark:text-blue-300 pb-2 flex items-center">
                                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Advantages
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>Simpler development process</li>
                                        <li>Easier to test end-to-end</li>
                                        <li>Less operational complexity</li>
                                        <li>Better performance for small applications</li>
                                    </ul>
                        </div>
                                <div className="bg-white dark:bg-gray-800/50 border border-red-200 dark:border-red-800/30 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h4 className="font-bold text-red-600 dark:text-red-400 pb-2 flex items-center">
                                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Disadvantages
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>Harder to scale specific components</li>
                                        <li>Longer build and deployment times</li>
                                        <li>Technology stack is fixed for the entire application</li>
                                        <li>More difficult for large teams to collaborate</li>
                                    </ul>
                    </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="text-gray-700 dark:text-gray-300 text-lg">
                                    Monolithic architectures are well-suited for smaller applications or startups that need to move quickly
                                    and don't yet need the complexity of distributed systems.
                                </p>
                            </div>
                        </div>

                        {/* Microservices Architecture */}
                        <div className="mb-10 bg-transparent border-2 p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 shadow-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Microservices Architecture</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 pb-4 text-lg">
                                Microservices architecture breaks an application into a collection of loosely coupled services, each responsible
                                for a specific business capability and able to be deployed independently.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white dark:bg-gray-800/50 border border-green-200 dark:border-green-800/30 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h4 className="font-bold text-green-700 dark:text-green-300 pb-2 flex items-center">
                                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Advantages
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>Independent scaling of services</li>
                                        <li>Technology diversity (use the right tool for each service)</li>
                                        <li>Faster deployment cycles</li>
                                        <li>Better fault isolation</li>
                                        <li>Easier for large teams to collaborate</li>
                                    </ul>
                        </div>
                                <div className="bg-white dark:bg-gray-800/50 border border-red-200 dark:border-red-800/30 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h4 className="font-bold text-red-600 dark:text-red-400 pb-2 flex items-center">
                                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Disadvantages
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>Increased operational complexity</li>
                                        <li>Network latency between services</li>
                                        <li>Distributed system challenges (transactions, data consistency)</li>
                                        <li>More complex testing</li>
                                        <li>Requires strong DevOps practices</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mb-6">
                                <p className="text-gray-700 dark:text-gray-300 text-lg">
                                    Microservices are ideal for large, complex applications that need to scale different components independently
                                    and benefit from team autonomy and technology flexibility.
                                </p>
                            </div>
                            <div className="mt-6 shadow-lg rounded-xl overflow-hidden">
                                <CodeBlock language="javascript" code={`// Example of a microservice architecture with Node.js

// User Service (users-service/index.js)
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// User database operations
app.get('/api/users', (req, res) => {
  // Get users from database
  res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

app.listen(port, () => {
  console.log(\`User service running on port \${port}\`);
});

// Order Service (orders-service/index.js)
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002;

app.use(express.json());

// Order database operations
app.post('/api/orders', async (req, res) => {
  const { userId, products } = req.body;

  // Validate user exists by calling User Service
  try {
    await axios.get(\`http://user-service:3001/api/users/\${userId}\`);

    // Create order in database
    const order = { id: 123, userId, products, status: 'pending' };
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: 'Invalid user' });
  }
});

app.listen(port, () => {
  console.log(\`Order service running on port \${port}\`);
});

// API Gateway (gateway/index.js)
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;

// Route to User Service
app.use('/api/users', createProxyMiddleware({
  target: 'http://user-service:3001',
  changeOrigin: true
}));

// Route to Order Service
app.use('/api/orders', createProxyMiddleware({
  target: 'http://order-service:3002',
  changeOrigin: true
}));

app.listen(port, () => {
  console.log(\`API Gateway running on port \${port}\`);
});`} />
                            </div>
                        </div>

                        {/* Serverless Architecture */}
                        <div className="mb-10 bg-transparent border-2 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4 shadow-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Serverless Architecture</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 pb-5 text-lg">
                                Serverless architecture allows developers to build and run applications without managing servers.
                                Code runs in stateless compute containers that are event-triggered and fully managed by a cloud provider.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white dark:bg-gray-800/50 border border-purple-200 dark:border-purple-800/30 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h4 className="font-bold text-purple-700 dark:text-purple-300 pb-2 flex items-center">
                                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Advantages
                            </h4>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>No server management</li>
                                        <li>Pay-per-execution pricing</li>
                                        <li>Auto-scaling</li>
                                        <li>Reduced operational costs</li>
                                        <li>Faster time to market</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800/50 border border-red-200 dark:border-red-800/30 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h4 className="font-bold text-red-600 dark:text-red-400 pb-2 flex items-center">
                                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Disadvantages
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>Cold start latency</li>
                                        <li>Limited execution duration</li>
                                        <li>Vendor lock-in</li>
                                        <li>Complex debugging and monitoring</li>
                                        <li>Statelessness can be challenging</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6 shadow-lg rounded-xl overflow-hidden border border-purple-100 dark:border-purple-900/30">
                                <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-purple-100 dark:border-purple-900/30">
                                    <div className="flex items-center">
                                        <div className="flex space-x-2 mr-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">AWS Lambda function example (Node.js)</span>
                                    </div>
                                </div>
                                <CodeBlock language="javascript" code={`// AWS Lambda function example (Node.js)

// handler.js
module.exports.createUser = async (event) => {
  try {
    // Parse the incoming request body from the API Gateway event
    const body = JSON.parse(event.body);

    // Validate input
    if (!body.email || !body.name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email and name are required' })
      };
    }

    // In a real app, you would store the user in a database like DynamoDB
    // For this example, we'll just return the created user
    const user = {
      id: Date.now().toString(),
      email: body.email,
      name: body.name,
      createdAt: new Date().toISOString()
    };

    return {
      statusCode: 201,
      body: JSON.stringify(user)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not create user' })
    };
  }
};

// serverless.yml configuration
/*
service: user-service

provider:
  name: aws
  runtime: nodejs14.x
  stage: dev
  region: us-east-1

functions:
  createUser:
    handler: handler.createUser
    events:
      - http:
          path: users
          method: post
          cors: true
*/`} />
                            </div>
                        </div>
                    </div>

                    {/* Security Best Practices Section */}
                    <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none mb-8 md:mb-16">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold pb-4 md:pb-6 text-gray-800 dark:text-white relative text-left">
                            Security <span className="text-orange-400">Best Practices</span>
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed pb-4 md:pb-8">
                            Security is a critical aspect of backend development. Implementing robust security measures protects
                            your application, user data, and business reputation.
                        </p>

                        {/* Security Checklist */}
                        <div className="bg-transparent border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8 rounded-lg shadow-sm mb-8 hover:shadow-md transition-all duration-300">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 pb-10 ">Essential Security Checklist</h3>

                            <div className="space-y-4 md:space-y-6">
                                {/* Authentication & Authorization */}
                                <div className="flex flex-col sm:flex-row bg-blue-50/70 dark:bg-blue-900/10 p-4 rounded-lg border-l-2 border-blue-400 transform hover:-translate-y-0.5 transition-all duration-300">
                                    <div className="flex-shrink-0 mb-3 sm:mb-0">
                                        <div className="w-10 h-10 bg-blue-100/80 dark:bg-blue-800/30 rounded-full flex items-center justify-center shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="sm:ml-4">
                                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300">Authentication & Authorization</h4>
                                        <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Implement strong password policies</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Use secure authentication methods (OAuth, JWT)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Implement multi-factor authentication (MFA)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Apply the principle of least privilege</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Implement proper session management</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Data Protection */}
                                <div className="flex flex-col sm:flex-row bg-green-50/70 dark:bg-green-900/10 p-4 rounded-lg border-l-2 border-green-400 transform hover:-translate-y-0.5 transition-all duration-300">
                                    <div className="flex-shrink-0 mb-3 sm:mb-0">
                                        <div className="w-10 h-10 bg-green-100/80 dark:bg-green-800/30 rounded-full flex items-center justify-center shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="sm:ml-4">
                                        <h4 className="text-lg font-semibold text-green-600 dark:text-green-300">Data Protection</h4>
                                        <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Encrypt sensitive data at rest and in transit (HTTPS, TLS)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Implement proper data backup and recovery procedures</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Use parameterized queries to prevent SQL injection</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Apply data minimization principles</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Implement proper data validation</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Input Validation */}
                                <div className="flex flex-col sm:flex-row bg-yellow-50/70 dark:bg-yellow-900/10 p-4 rounded-lg border-l-2 border-yellow-400 transform hover:-translate-y-0.5 transition-all duration-300">
                                    <div className="flex-shrink-0 mb-3 sm:mb-0">
                                        <div className="w-10 h-10 bg-yellow-100/80 dark:bg-yellow-800/30 rounded-full flex items-center justify-center shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 dark:text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="sm:ml-4">
                                        <h4 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">Input Validation & Sanitization</h4>
                                        <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Validate all input on the server side</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Sanitize user input to prevent XSS attacks</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Use content security policy (CSP) headers</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Implement rate limiting to prevent brute force attacks</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Use CSRF tokens to prevent cross-site request forgery</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Dependency Management */}
                                <div className="flex flex-col sm:flex-row bg-red-50/70 dark:bg-red-900/10 p-4 rounded-lg border-l-2 border-red-400 transform hover:-translate-y-0.5 transition-all duration-300">
                                    <div className="flex-shrink-0 mb-3 sm:mb-0">
                                        <div className="w-10 h-10 bg-red-100/80 dark:bg-red-800/30 rounded-full flex items-center justify-center shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="sm:ml-4">
                                        <h4 className="text-lg font-semibold text-red-600 dark:text-red-300">Dependency Management</h4>
                                        <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-red-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Regularly update dependencies to patch security vulnerabilities</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-red-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Use dependency scanning tools (npm audit, Snyk, etc.)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-red-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Implement a security policy for third-party libraries</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-red-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Use lockfiles to ensure consistent dependency versions</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-3 h-3 bg-red-400 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                                <span>Consider using a private package registry</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Security Code Example */}
                        <div className="bg-transparent border border-gray-200 dark:border-gray-700 p-4 sm:p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-3">Security Implementation Example</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                                Here's an example of implementing authentication, input validation, and security headers in an Express.js application:
                            </p>
                            <div className="shadow-md rounded-lg overflow-hidden">
                                <CodeBlock language="javascript" code={`// Secure Express.js API example
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(express.json({ limit: '10kb' })); // Limit request body size
app.use(helmet()); // Set security headers

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later'
});
app.use('/api', limiter);

// JWT Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// User registration with input validation
app.post(
  '/api/register',
  [
    // Input validation
    body('email').isEmail().normalizeEmail().withMessage('Enter a valid email'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters')
      .matches(/[A-Z]/).withMessage('Password must contain an uppercase letter')
      .matches(/[a-z]/).withMessage('Password must contain a lowercase letter')
      .matches(/[0-9]/).withMessage('Password must contain a number')
      .matches(/[^A-Za-z0-9]/).withMessage('Password must contain a special character'),
    body('name').trim().notEmpty().withMessage('Name is required')
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password, name } = req.body;

      // Check if user already exists
      // In a real app, you would query your database
      // const existingUser = await User.findOne({ email });
      // if (existingUser) {
      //   return res.status(409).json({ error: 'User already exists' });
      // }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user (in a real app, save to database)
      // const user = new User({ email, password: hashedPassword, name });
      // await user.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Protected route example
app.get('/api/profile', authenticateToken, (req, res) => {
  // In a real app, you would fetch user data from database
  res.json({ user: req.user });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Conclusion Section */}
        <section className="bg-white dark:bg-black py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6 md:pb-8 text-gray-900 dark:text-white relative text-left md:text-left">
                            <span className="text-orange-500">Conclusion:</span> The Future of Backend Development
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed pb-6">
                            Backend development continues to evolve rapidly, with new technologies and approaches emerging regularly.
                            As we look to the future, several trends are shaping the landscape:
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-8">
                            <ul className="space-y-4">
                                <li className="flex">
                                    <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <div>
                                        <strong className="text-blue-900 dark:text-blue-300 font-medium">Serverless Computing</strong>
                                        <p className="text-gray-700 dark:text-gray-300 pt-1">
                                            The continued rise of serverless architectures allows developers to focus on code without
                                            managing infrastructure, with platforms like AWS Lambda, Azure Functions, and Google Cloud Functions
                                            leading the way.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <div>
                                        <strong className="text-blue-900 dark:text-blue-300 font-medium">Edge Computing</strong>
                                        <p className="text-gray-700 dark:text-gray-300 pt-1">
                                            Moving computation closer to the data source reduces latency and improves performance,
                                            with services like Cloudflare Workers and AWS Lambda@Edge enabling code execution at the network edge.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                    </svg>
                                    <div>
                                        <strong className="text-blue-900 dark:text-blue-300 font-medium">GraphQL and New API Paradigms</strong>
                                        <p className="text-gray-700 dark:text-gray-300 pt-1">
                                            GraphQL continues to gain adoption as an alternative to REST, offering more efficient data fetching
                                            and a stronger contract between client and server.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                    <div>
                                        <strong className="text-blue-900 dark:text-blue-300 font-medium">AI and Machine Learning Integration</strong>
                                        <p className="text-gray-700 dark:text-gray-300 pt-1">
                                            Backend systems increasingly incorporate AI capabilities, from recommendation engines to
                                            natural language processing, with tools like TensorFlow Serving and PyTorch making deployment easier.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <p className="text-lg md:text-xl leading-relaxed mb-6">
                            Regardless of the technologies and architectures you choose, successful backend development requires a solid
                            understanding of fundamentals: data structures, algorithms, system design, and security principles.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed">
                            By mastering these core concepts and staying current with emerging trends, you'll be well-equipped to build
                            robust, scalable, and secure backend systems that power the next generation of web applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>


        {/* Call to Action - Enhanced with better responsiveness */}
        <section className="bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-orange-500 p-6 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-white/10 rounded-full -mr-10 md:-mr-20 -mt-10 md:-mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-24 md:w-40 h-24 md:h-40 bg-white/10 rounded-full -ml-6 md:-ml-10 -mb-6 md:-mb-10"></div>

                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white pb-4">Ready to Start Building?</h3>
                            <p className="text-white/90 text-lg pb-6 md:pb-8 max-w-2xl">
                                Take your backend development skills to the next level with our comprehensive resources,
                                tutorials, and community support.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/blog"
                                    className="inline-flex items-center justify-center px-4 md:px-6 py-3 bg-white text-orange-500 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md text-sm md:text-base">
                                    Explore More Articles
                                    <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3">
                                        </path>
                                    </svg>
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       {/* Related Videos Section - Redesigned to match blog layout */}
    <section className="py-12 md:py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero-style header with image on left, text on right */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-12">
                        {/* Image on the left */}
                        <div className="w-full md:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="rounded-xl overflow-hidden max-w-md mx-auto"
                            >
                                <img
                                    src="/assets/images/leb-backend.png"
                                    alt="YouTube Videos"
                                    className="w-full h-auto object-contain"
                                    onError={(e) => {
                                        // Fallback if the YouTube icon is not available
                                        const target = e.target as HTMLImageElement;
                                        target.src = "/assets/images/leb-icon.png";
                                    }}
                                />
                            </motion.div>
                        </div>

                        {/* Text on the right */}
                        <div className="w-full md:w-1/2">
                            <motion.h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white text-left md:text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Learn with <span className="text-red-600 dark:text-orange-500">Video</span> Tutorials
                            </motion.h2>

                            <motion.p
                                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 pt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Enhance your backend development skills with these hand-picked video tutorials
                                covering essential concepts and techniques.
                            </motion.p>
                        </div>
                    </div>

                    {/* Video Grid - Updated with backend development videos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {/* Video 1: Node.js Crash Course */}
                        <motion.div
                            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out group"
                            whileHover={{ borderColor: "orange" }}
                        >
                            <div className="absolute inset-0 z-0">
                                <iframe
                                    src="https://www.youtube.com/embed/fBNz5xF-Kx4"
                                    title="Node.js Crash Course"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Video 2: SQL Database Tutorial */}
                        <motion.div
                            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out group"
                            whileHover={{ borderColor: "orange" }}
                        >
                            <div className="absolute inset-0 z-0">
                                <iframe
                                    src="https://www.youtube.com/embed/HXV3zeQKqGY"
                                    title="SQL Tutorial for Beginners"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Video 3: RESTful APIs */}
                        <motion.div
                            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out group"
                            whileHover={{ borderColor: "orange" }}
                        >
                            <div className="absolute inset-0 z-0">
                                <iframe
                                    src="https://www.youtube.com/embed/lsMQRaeKNDk"
                                    title="RESTful API Tutorial"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Video 4: Microservices */}
                        <motion.div
                            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out group"
                            whileHover={{ borderColor: "orange" }}
                        >
                            <div className="absolute inset-0 z-0">
                                <iframe
                                    src="https://www.youtube.com/embed/y8IQb4ofjDo"
                                    title="Microservices Explained"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>

                    {/* Additional CTA for videos */}
                    <div className="mt-12 text-center">
                        <a
                            href="https://www.youtube.com/results?search_query=backend+development+tutorial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                            Explore More YouTube Tutorials
                        </a>
                    </div>
                </div>
            </div>
        </section>


    </WebLayout>
</CodeThemeProvider>
);
};

export default BackendArticle;
