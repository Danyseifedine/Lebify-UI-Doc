import React from 'react';
import WebLayout from '../../../layouts/web-layout';
import { CodeThemeProvider } from '@/components/codeBlock/contexts/code-theme-context';
import { CodeBlock } from '@/components/codeBlock/code-block';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

const MobileArticle = () => {
return (
<CodeThemeProvider>
    <WebLayout title="Mobile Development: Building Apps for iOS and Android"
        description="Explore the world of mobile app development, from native frameworks to cross-platform solutions, and learn how to build engaging mobile experiences for iOS and Android.">

        {/* Hero Section with Centered Image */}
        <section className="pt-32 pb-8 md:pb-16 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    {/* Centered Image */}
                    <div className="w-full max-w-4xl">
                        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-square relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            <img src="/assets/images/blog-mobile.png" alt="Mobile App Development" className="w-full h-full object-cover" />
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
                            className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6 md:pb-8 text-gray-900 dark:text-white relative">
                            Introduction to <span className="text-orange-500">Mobile Development</span>
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed mb-6">
                            Mobile development is the process of creating applications that run on mobile devices such as smartphones and tablets. With over 6.8 billion smartphone users worldwide, mobile apps have become an essential part of our daily lives, transforming how we communicate, shop, work, and entertain ourselves.
                        </p>
                        <br />
                        <p className="text-lg md:text-xl leading-relaxed">
                            This article explores the mobile development landscape, including native, cross-platform, and hybrid approaches, essential tools and frameworks, and best practices for creating successful mobile applications. Whether you're a beginner looking to start your journey in mobile development or an experienced developer wanting to expand your knowledge, this guide will provide valuable insights into building engaging mobile experiences.
                        </p>
                    </div>

                    {/* Core Technologies - Enhanced with icons and better spacing */}
                    <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none mb-12 md:mb-20">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6 md:pb-8 text-gray-900 dark:text-white relative">
                            Mobile Development <span className="text-orange-500">Approaches</span>
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed pb-6 md:pb-10">
                            There are three main approaches to mobile app development, each with its own advantages and trade-offs:
                        </p>

                        {/* Native Development Section with icon */}
                        <div className="mb-8 md:mb-12 bg-transparent border-2 p-4 md:p-8 rounded-2xl">
                            <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                                <div
                                    className="w-12 h-12 md:w-16 md:h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-red-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left">
                                    Native Development
                                </h3>
                            </div>
                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                Native mobile development involves building apps specifically for a single platform using the platform's core programming language and APIs. This approach offers the best performance and access to all device features.
                            </p>
                            <div className="mt-8 shadow-lg rounded-xl overflow-hidden">
                                <CodeBlock language="javascript" code={`// iOS - Swift example
import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
    }

    private func setupUI() {
        // Create a button
        let button = UIButton(type: .system)
        button.setTitle("Tap Me", for: .normal)
        button.addTarget(self, action: #selector(buttonTapped), for: .touchUpInside)

        // Add button to view
        button.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(button)

        // Set constraints
        NSLayoutConstraint.activate([
            button.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            button.centerYAnchor.constraint(equalTo: view.centerYAnchor)
        ])
    }

    @objc private func buttonTapped() {
        print("Button was tapped!")
    }
}`} />
                            </div>

                            <div className="mt-8 shadow-lg rounded-xl overflow-hidden">
                            <CodeBlock language="javascript" code={`// Android - Kotlin example
package com.example.myapp

import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val button = findViewById<Button>(R.id.button)
        button.setOnClickListener {
            Toast.makeText(this, "Button was clicked!", Toast.LENGTH_SHORT).show()
        }
    }
}`} />
                            </div>
                        </div>

                        {/* Cross-Platform Development Section with icon */}
                        <div className="mb-8 md:mb-12 bg-transparent border-2 p-4 md:p-8 rounded-2xl">
                            <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                                <div
                                    className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-yellow-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left">
                                    Cross-Platform Development
                                </h3>
                            </div>
                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                Cross-platform development involves building apps using frameworks that allow code reuse across multiple platforms. This approach can save time and resources but may have limitations in terms of performance and feature access.
                            </p>
                            <div className="mt-8 shadow-lg rounded-xl overflow-hidden">
                                <CodeBlock language="javascript" code={`// React Native example
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function App() {
    const [count, setCount] = useState(0);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Counter: {count}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
            <Button title="Decrement" onPress={() => setCount(count - 1)} />
        </View>
    );
}

export default App;`} />
                            </div>
                        </div>

                        {/* Hybrid Development Section with icon */}
                        <div className="mb-8 md:mb-12 bg-transparent border-2 p-4 md:p-8 rounded-2xl">
                            <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                                <div
                                    className="w-12 h-12 md:w-16 md:h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-green-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left">
                                    Hybrid Development
                                </h3>
                            </div>
                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                Hybrid development involves building apps using web technologies and frameworks, which can then be deployed to multiple platforms. This approach offers flexibility but may have limitations in terms of performance and feature access.
                            </p>
                            <div className="mt-8 shadow-lg rounded-xl overflow-hidden">
                                <CodeBlock language="html" code={`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>

<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <main>
        <p>This is a paragraph of text.</p>
        <img src="image.jpg" alt="Description">
    </main>
    <footer>
        <p>&copy; 2023 My Website</p>
    </footer>
</body>

</html>`} />
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
                            Modern Mobile <span className="text-orange-500">Frameworks</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto pb-8">
                            While the core technologies provide the foundation, modern mobile frameworks and libraries
                            help developers build complex, interactive applications more efficiently. These tools offer
                            structured approaches to common challenges, reusable components, and optimized rendering.
                        </p>
                    </div>

                    {/* Framework cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {/* React Native Card */}
                        <div
                            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl shadow-md border border-blue-200 dark:border-blue-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500 mr-3" fill="currentColor">
                                    <path
                                        d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">React Native</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A framework for building native apps for iOS and Android using React.
                            </p>
                        </div>

                        {/* Flutter Card */}
                        <div
                            className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl shadow-md border border-green-200 dark:border-green-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-500 mr-3"
                                    fill="currentColor">
                                    <path
                                        d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Flutter</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A framework for building high-performance, high-fidelity apps for mobile, web, and desktop from a single codebase.
                            </p>
                        </div>

                        {/* SwiftUI Card */}
                        <div
                            className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl shadow-md border border-red-200 dark:border-red-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-red-500 mr-3" fill="currentColor">
                                    <path
                                        d="M9.93 12.645h4.134L11.996 7.74M11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.058 18.297h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.648 7.057 15.648z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">SwiftUI</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A framework for building user interfaces with a declarative syntax and reactive programming.
                            </p>
                        </div>
                    </div>

                    {/* React Code Example */}
                    <div className="mt-10 shadow-lg rounded-xl overflow-hidden">
                        <div
                            className="bg-blue-100 dark:bg-blue-900/30 px-6 py-3 border-b border-blue-200 dark:border-blue-800">
                            <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300">React Native Component
                                Example</h4>
                        </div>
                        <CodeBlock language="jsx" code={`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;`} />
                    </div>
                </div>
            </div>
        </section>

        {/* Responsive Design - Enhanced with visual elements */}
        <section className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white pb-8">
                            Responsive <span className="text-orange-500">Design & Mobile-First</span> Development
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            With the diversity of mobile devices in the market, responsive design is crucial for mobile apps.
                            A mobile-first approach means designing for smaller screens first, then adapting the experience
                            for tablets and larger devices.
                        </p>
                    </div>

                    {/* Responsive design illustration */}
                    <div
                        className="my-10 flex flex-col md:flex-row items-center justify-center gap-6 bg-transparent border-2 p-8 rounded-2xl">
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div
                                className="w-20 h-40 border-4 border-gray-300 dark:border-gray-700 rounded-xl relative">
                                <div
                                    className="absolute inset-1 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                    <span className="text-xs text-blue-800 dark:text-blue-300">Phone</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div
                                className="w-32 h-40 border-4 border-gray-300 dark:border-gray-700 rounded-xl relative">
                                <div
                                    className="absolute inset-1 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                    <span className="text-xs text-green-800 dark:text-green-300">Tablet</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div
                                className="w-48 h-40 border-4 border-gray-300 dark:border-gray-700 rounded-xl relative">
                                <div
                                    className="absolute inset-1 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                    <span className="text-xs text-purple-800 dark:text-purple-300">Foldable</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-xl leading-relaxed pb-6">
                        Key principles of responsive mobile design include:
                    </p>

                    <ul className="space-y-4 mb-10">
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Adaptive layouts that respond to different screen sizes</span>
                        </li>
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Flexible images and media that scale appropriately</span>
                        </li>
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Orientation changes handling (portrait vs landscape)</span>
                        </li>
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Touch-friendly interfaces with appropriate tap targets</span>
                        </li>
                    </ul>

                    <p className="text-xl leading-relaxed">
                        Modern mobile frameworks like React Native, Flutter, and SwiftUI provide tools and components
                        to implement responsive designs efficiently across different device sizes.
                    </p>
                </div>
            </div>
        </section>

        {/* Performance Optimization - Enhanced with visual elements */}
        <section className="py-10 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white pb-8">
                            Mobile App <span className="text-orange-500">Performance</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Mobile app performance directly impacts user experience, retention rates, and app store ratings.
                            Developers need to optimize their code and assets to ensure fast loading times, smooth animations,
                            and efficient battery usage.
                        </p>
                    </div>

                    {/* Performance metrics visualization */}
                    <div className="my-10 bg-transparent border-2 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white pb-6">Key Mobile <span
                                className="text-orange-500">Performance Metrics</span>
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
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">App Launch Time</h4>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Measures how quickly your app starts up and becomes interactive
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
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Frame Rate</h4>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Measures the smoothness of animations and scrolling (aim for 60 FPS)
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
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Battery
                                        Consumption</h4>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Measures how efficiently your app uses device battery
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="text-xl leading-relaxed pb-10">
                        Key mobile performance optimization techniques include:
                    </p>

                    <ul className="space-y-4 mb-10">
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Optimizing image assets and using proper formats</span>
                        </li>
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Implementing efficient memory management</span>
                        </li>
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Using lazy loading for screens and components</span>
                        </li>
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Optimizing network requests and implementing caching</span>
                        </li>
                        <li className="flex items-start">
                            <div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mt-1 mr-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-xl">Reducing app size with code splitting and tree shaking</span>
                        </li>
                    </ul>

                    <div
                        className="bg-transparent border-2 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-2" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Pro Tip</h4>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                            Tools like Android Profiler, Xcode Instruments, and React Native Flipper can help identify
                            performance bottlenecks in your mobile apps. Regular performance testing on actual devices
                            should be part of your development workflow.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Mobile Accessibility - Enhanced with visual elements and better styling */}
        <section className="py-10 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white pb-8">
                            Mobile <span className="text-orange-500">Accessibility</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Creating accessible mobile apps means designing and developing with all users in mind, regardless
                            of their abilities or disabilities. This inclusive approach not only helps people with permanent
                            disabilities but also benefits those with temporary limitations or situational constraints.
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
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-400 pb-4">Why
                                    Accessibility Matters</h3>
                                <p className="text-purple-700 dark:text-purple-300 text-lg">
                                    Mobile accessibility ensures that apps are usable by people with
                                    disabilities. It's not just a moral imperative but also a legal requirement in many jurisdictions
                                    and a requirement for app store approval.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white pb-8">Key <span
                            className="text-orange-500">Accessibility Considerations</span>
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
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white pb-1">Screen Reader Support
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Ensure your app works with VoiceOver (iOS) and TalkBack (Android)
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
                                            d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white pb-1">Touch Target Size</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Make interactive elements at least 44x44 points for easy tapping
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
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white pb-1">Content Descriptions</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Provide descriptive labels for all UI elements and images
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
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white pb-1">Color Contrast
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Ensure sufficient contrast between text and background colors
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
                                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white pb-1">Alternative Input Methods</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Support voice control, switch control, and external keyboards
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
                                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white pb-1">Dynamic Text Sizing
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Support system font size settings for users with visual impairments
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
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white pb-1">Platform Guidelines</h4>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                            Both Apple and Google provide detailed accessibility guidelines for mobile apps. Follow the Human Interface Guidelines (iOS) and Material Design Guidelines (Android) for platform-specific accessibility best practices.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Conclusion - Enhanced with better styling */}
        <section className="bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white pb-8">
                            Conclusion
                        </h1>
                        <div
                            className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl mb-8 border border-orange-100 dark:border-orange-800/30 shadow-md">
                            <p className="text-xl leading-relaxed mb-6 text-orange-900 dark:text-orange-200">
                                Mobile development is a dynamic and evolving field that combines technical skills with
                                creativity and user empathy. By mastering the core technologies, embracing modern
                                frameworks,
                                and following best practices for performance and accessibility, you can create engaging,
                                interactive mobile applications that provide exceptional user experiences.
                            </p>
                            <p className="text-xl leading-relaxed text-orange-900 dark:text-orange-200">
                                As you continue your mobile development journey, remember that the learning never stops.
                                Stay
                                curious, keep experimenting, and always consider the end user in your design and development
                                decisions.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        <div
                            className="flex-1 bg-transparent p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Keep Learning</h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                The mobile development landscape evolves rapidly. Stay updated with the latest trends, tools, and
                                best practices.
                            </p>
                        </div>

                        <div
                            className="flex-1 bg-transparent p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Build Projects</h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                Apply what you've learned by building real projects. Practical experience is invaluable.
                            </p>
                        </div>

                        <div
                            className="flex-1 bg-transparent p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Join Communities
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                Connect with other developers through forums, social media, and local meetups.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Call to Action - Enhanced with better responsiveness */}
        <section className="bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600 p-6 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-white/10 rounded-full -mr-10 md:-mr-20 -mt-10 md:-mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-24 md:w-40 h-24 md:h-40 bg-white/10 rounded-full -ml-6 md:-ml-10 -mb-6 md:-mb-10"></div>

                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white pb-4">Ready to Start Building?</h3>
                            <p className="text-base md:text-lg lg:text-xl text-white/90 pb-6 md:pb-8 max-w-2xl">
                                Take your mobile development skills to the next level with our comprehensive resources,
                                tutorials, and community support.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/blog"
                                    className="inline-flex items-center justify-center px-4 md:px-6 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition-colors duration-300 shadow-md text-sm md:text-base">
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
                                    src="/assets/images/leb-mobile.png"
                                    alt="YouTube Videos"
                                    className="w-full h-auto object-contain"
                                    onError={(e) => {
                                        // Fallback if the YouTube icon is not available
                                        const target = e.target as HTMLImageElement;
                                        target.src = "/assets/images/Leb-icon.png";
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
                                Enhance your mobile development skills with these hand-picked video tutorials
                                covering essential concepts and techniques.
                            </motion.p>
                        </div>
                    </div>

                    {/* Video Grid - Mobile Development Videos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {/* Video 1: Flutter Tutorial */}
                        <motion.div
                            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out group"
                            whileHover={{ borderColor: "orange" }}
                        >
                            {/* Video Embed */}
                            <div className="absolute inset-0 z-0">
                                <iframe
                                    src="https://www.youtube.com/embed/1ukSR1GRtMU"
                                    title="Flutter Tutorial for Beginners"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Video 2: React Native Tutorial */}
                        <motion.div
                            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out group"
                            whileHover={{ borderColor: "orange" }}
                        >
                            <div className="absolute inset-0 z-0">
                                <iframe
                                    src="https://www.youtube.com/embed/0-S5a0eXPoc"
                                    title="React Native Tutorial for Beginners"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Video 3: Swift Tutorial */}
                        <motion.div
                            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out group"
                            whileHover={{ borderColor: "orange" }}
                        >
                            <div className="absolute inset-0 z-0">
                                <iframe
                                    src="https://www.youtube.com/embed/comQ1-x2a1Q"
                                    title="Swift Tutorial for iOS Development"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Video 4: Kotlin Android Tutorial */}
                        <motion.div
                            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out group"
                            whileHover={{ borderColor: "orange" }}
                        >
                            <div className="absolute inset-0 z-0">
                                <iframe
                                    src="https://www.youtube.com/embed/F9UC9DY-vIU"
                                    title="Kotlin Android Development Tutorial"
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
                            href="https://www.youtube.com/results?search_query=mobile+development+tutorial"
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

export default MobileArticle;
