import React from 'react';
import WebLayout from '../../../layouts/web-layout';
import { CodeThemeProvider } from '@/components/codeBlock/contexts/code-theme-context';
import { CodeBlock } from '@/components/codeBlock/code-block';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

const LaravelArticle = () => {
return (
<CodeThemeProvider>
    <WebLayout title="Laravel: The PHP Framework for Web Artisans"
        description="Discover Laravel, the elegant PHP framework that makes web development a breeze with its expressive syntax, robust features, and vibrant ecosystem.">

        {/* Hero Section with Centered Image */}
        <section className="pt-32 pb-8 md:pb-16 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    {/* Centered Image */}
                    <div className="w-full max-w-4xl">
                        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-square relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            <img src="/assets/images/blog-4.png" alt="Laravel Development" className="w-full h-full object-cover" />
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
                            Introduction to <span className="text-orange-500">Laravel</span>
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed mb-6">
                            Laravel is a free, open-source PHP web framework designed for building modern web applications
                            following the model–view–controller (MVC) architectural pattern. Created by Taylor Otwell in 2011,
                            Laravel has grown to become the most popular PHP framework, beloved by developers for its elegant
                            syntax, powerful features, and developer-friendly ecosystem.
                        </p>
                        <br />
                        <p className="text-lg md:text-xl leading-relaxed">
                            With its expressive, beautiful syntax and focus on developer happiness, Laravel has revolutionized
                            PHP development by providing tools that simplify common tasks used in most web projects, such as
                            authentication, routing, sessions, and caching. This article explores Laravel's core features,
                            ecosystem, and why it has become the framework of choice for PHP developers worldwide.
                        </p>
                    </div>

                    {/* Core Features - Enhanced with icons and better spacing */}
                    <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none mb-12 md:mb-20">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6 md:pb-8 text-gray-900 dark:text-white relative text-left md:text-left">
                            Core <span className="text-orange-500">Features</span>
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed pb-6 md:pb-10">
                            Laravel offers a rich set of features that make web development faster, more secure, and more enjoyable:
                        </p>

                        {/* Elegant Routing Section with icon */}
                        <div className="mb-8 md:mb-12 bg-transparent border-2 p-4 md:p-8 rounded-2xl">
                            <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                                <div
                                    className="w-12 h-12 md:w-16 md:h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-red-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left">
                                    Elegant Routing
                                </h3>
                            </div>
                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                Laravel provides a simple, expressive routing system that makes it easy to define application routes and map them to controllers or closures.
                            </p>
                            <div className="mt-8 shadow-lg rounded-xl overflow-hidden">
                                <CodeBlock language="javascript" code={`// routes/web.php
use App\\Http\\Controllers\\UserController;

// Basic route with closure
Route::get('/', function () {
    return view('welcome');
});

// Route with controller
Route::get('/users', [UserController::class, 'index']);

// Route with parameters
Route::get('/users/{id}', [UserController::class, 'show']);

// Route groups with middleware
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    });

    Route::resource('posts', PostController::class);
});

// Named routes
Route::get('/profile', function () {
    return view('profile');
})->name('profile');

// Accessing named routes
// <a href="{{ route('profile') }}">Profile</a>`} />
                            </div>
                        </div>

                        {/* Blade Templating Engine Section with icon */}
                        <div className="mb-8 md:mb-12 bg-transparent border-2 p-4 md:p-8 rounded-2xl">
                            <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                                <div
                                    className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-blue-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left">
                                    Blade Templating Engine
                                </h3>
                            </div>
                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                Blade is Laravel's powerful templating engine that combines the simplicity of PHP with elegant syntax for common tasks like conditionals, loops, and layouts.
                            </p>
                            <div className="mt-8 shadow-lg rounded-xl overflow-hidden">
                                <CodeBlock language="javascript" code={`<!-- resources/views/welcome.blade.php -->
@extends('layouts.app')

@section('title', 'Welcome to My App')

@section('content')
    <div class="container">
        <h1>Welcome, {{ $user->name }}</h1>

        @if($notifications->count() > 0)
            <div class="alert alert-info">
                You have {{ $notifications->count() }} unread notifications.
            </div>
        @endif

        <h2>Your Posts</h2>

        @forelse($posts as $post)
            <div class="card mb-3">
                <div class="card-body">
                    <h3>{{ $post->title }}</h3>
                    <p>{{ $post->excerpt }}</p>
                    <a href="{{ route('posts.show', $post) }}">Read more</a>
                </div>
            </div>
        @empty
            <p>You haven't created any posts yet.</p>
        @endforelse
    </div>
@endsection`} />
                            </div>
                        </div>

                        {/* Authentication & Authorization Section with icon */}
                        <div className="mb-8 md:mb-12 bg-transparent border-2 p-4 md:p-8 rounded-2xl">
                            <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                                <div
                                    className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-yellow-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left">
                                    Authentication & Authorization
                                </h3>
                            </div>
                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                Laravel provides a complete authentication system out of the box, along with a powerful authorization system using Gates and Policies.
                            </p>
                            <div className="mt-8 shadow-lg rounded-xl overflow-hidden">
                                <CodeBlock language="javascript" code={`// Authentication scaffolding
php artisan make:auth

// In a controller
public function update(Request $request, Post $post)
{
    // Check if user can update this post
    if ($request->user()->cannot('update', $post)) {
        abort(403);
    }

    // Update post...
}

// Creating a policy
php artisan make:policy PostPolicy --model=Post

// In PostPolicy.php
public function update(User $user, Post $post)
{
    return $user->id === $post->user_id;
}

// Using Gates
Gate::define('update-post', function (User $user, Post $post) {
    return $user->id === $post->user_id;
});

// In Blade templates
@can('update', $post)
    <a href="{{ route('posts.edit', $post) }}">Edit Post</a>
@endcan`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Laravel Ecosystem  */}
        <section className="bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white pb-8">
                            Laravel <span className="text-orange-500">Ecosystem</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto pb-8">
                            Laravel's ecosystem is vibrant and full of complementary tools and libraries that address various aspects of application development.
                        </p>
                    </div>

                    {/* Ecosystem cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {/* Laravel Homestead Card */}
                        <div
                            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl shadow-md border border-blue-200 dark:border-blue-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500 mr-3" fill="currentColor">
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0-8h2v2z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Laravel Homestead</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A local development environment that provides a consistent and efficient way to develop Laravel applications.
                            </p>
                        </div>

                        {/* Laravel Cashier Card */}
                        <div
                            className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl shadow-md border border-purple-200 dark:border-purple-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-500 mr-3"
                                    fill="currentColor">
                                    <path
                                        d="M16.63 16.63c.59-.59.59-1.54 0-2.12-1.12-1.12-2.68-1.55-4.12-1.32l2.59-2.59c.89.36 1.89.25 2.59-.45.59-.59.59-1.54 0-2.12-.59-.59-1.54-.59-2.12 0-.7.7-.82 1.7-.45 2.59L12.32 13c-.22-1.44.2-3 1.32-4.12.59-.59.59-1.54 0-2.12-.59-.59-1.54-.59-2.12 0-.59.59-.59 1.54 0 2.12 1.12 1.12 2.68 1.55 4.12 1.32l-2.59 2.59c-.89-.36-1.89-.25-2.59.45-.59.59-.59 1.54 0 2.12.59.59 1.54.59 2.12 0z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Laravel Cashier</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A library for managing subscriptions and payments in Laravel applications.
                            </p>
                        </div>

                        {/* Laravel Dusk Card */}
                        <div
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-800 dark:text-gray-200 mr-3" fill="currentColor">
                                    <path
                                        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.5-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Laravel Dusk</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A browser automation and testing library for Laravel applications.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {/* Laravel Scout Card */}
                        <div
                            className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl shadow-md border border-red-200 dark:border-red-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-red-500 mr-3" fill="currentColor">
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Laravel Scout</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A package for adding full-text search capabilities to your Laravel applications.
                            </p>
                        </div>

                        {/* Laravel Socialite Card */}
                        <div
                            className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl shadow-md border border-green-200 dark:border-green-800">
                            <div className="flex items-center mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-500 mr-3"
                                    fill="currentColor">
                                    <path
                                        d="M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .328 2.335-1.165 2.351-1.506 2.351-1.567 2.351-1.914 0-.317.033-.328-2.335-1.506-1.271-.657-2.351-1.185-2.381-1.196-.064-.01-.127-.01-.19 0zm-10.294.21c-.053 0-.127.01-.18.03L7.426 11.2l2.266 1.3v-.01l.016-.03c.021-.06.021-.11-.032-.19-.302-.42-.486-.676-.547-.77-.128-.2.021-.24.021-.24l1.385-.828c.074-.042.117-.127.117-.222 0-.19-.117-.254-.117-.254l-1.909-1.09c-.07-.04-.117-.06-.18-.06zm13.568.763c.063 0 .127.01.18.030l.148.096c.032.02.042.053.042.085 0 .053-.01.085-.053.117l-2.308 1.334c-.106.063-.148.053-.211 0l-.106-.074 2.308-1.344c.053-.03.096-.042.148-.053l-.055-.19zm-13.057 1.713c.01 0 .127.074.074.16-.064.097-.16.137-.266.137h-.053c-.053 0-.117-.053-.16-.107v-.032l.106-.158c.032-.042.096-.074.16-.074.042 0 .085.01.127.032l.012.042zm12.646.18c.064 0 .127.01.18.030l.149.096c.032.02.042.054.042.086 0 .053-.01.085-.053.117l-2.308 1.334c-.106.063-.148.053-.211 0l-.106-.074 2.308-1.344c.053-.03.095-.042.148-.053l-.148-.19zm-10.666.36c.148 0 .19.222.19.222l.338 1.418c.021.084 0 .148-.053.212-.064.074-.127.11-.212.11h-.032c-.085 0-.16-.079-.19-.159l-.35-1.407c-.01-.084.01-.169.063-.222.042-.042.095-.063.148-.063h.098v-.11zm-1.195 1.385c.063 0 .127.01.18.030l.148.106c.032.02.042.053.042.085 0 .053-.01.085-.053.117l-2.308 1.334c-.106.063-.148.053-.211 0l-.106-.074 2.308-1.344c.053-.03.106-.042.148-.053l-.148-.2zm10.56.095c.064 0 .127.01.18.030l.148.095c.033.02.042.054.042.086 0 .053-.01.085-.053.117l-2.308 1.334c-.106.063-.148.053-.211 0l-.106-.074 2.308-1.344c.053-.03.106-.042.148-.053l-.148-.19zm-8.031 1.164c.054 0 .117.0.17.031l.148.096c.032.02.042.053.042.085 0 .053-.01.085-.053.117l-2.308 1.334c-.106.063-.148.053-.211 0l-.106-.074 2.308-1.344c.053-.03.106-.042.148-.053l-.138-.19zm5.386.222c.063 0 .127.01.18.030l.148.096c.032.02.042.053.042.085 0 .053-.01.085-.053.117l-2.308 1.334c-.106.063-.148.053-.211 0l-.106-.074 2.308-1.344c.053-.03.106-.042.148-.053l-.148-.19z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Laravel Socialite</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A package for authenticating users through third-party services like Facebook, Twitter, and GitHub.
                            </p>
                        </div>
                    </div>

                    {/* Laravel Performance Optimization */}
                    <div className="mt-10 shadow-lg rounded-xl overflow-hidden">
                        <div
                            className="bg-blue-100 dark:bg-blue-900/30 px-6 py-3 border-b border-blue-200 dark:border-blue-800">
                            <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300">Laravel Performance Optimization</h4>
                        </div>
                        <CodeBlock language="javascript" code={`// Optimizing Laravel performance
use Illuminate\\Support\\Facades\\Cache;

function getCachedData() {
    return Cache::remember('cached_data', 60, function() {
        return fetchDataFromDatabase();
    });
}

function fetchDataFromDatabase() {
    // Implementation of fetching data from the database
}

// Usage
$data = getCachedData();`} />
                    </div>
                </div>
            </div>
        </section>

        {/* Learn With Laracasts - Enhanced Section */}
        <section className="bg-white dark:bg-black py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                <div className="text-left">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white pb-8">
                            Learn With <span className="text-orange-500">Laracasts</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto pb-8">
                            Laracasts is a platform that offers thousands of high-quality video lessons for Laravel developers.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl overflow-hidden shadow-xl border border-orange-100 dark:border-orange-800">
                        <div className="grid md:grid-cols-2 gap-6 p-8">
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                    </svg>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">5,000+ Video Tutorials</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 pl-11 pb-4">
                                    From Laravel basics to advanced techniques, Laracasts offers thousands of high-quality video lessons.
                                </p>

                                <div className="flex items-center">
                                    <svg className="w-8 h-8 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                    </svg>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Expert Instructors</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 pl-11 pb-4">
                                    Learn directly from industry professionals with years of real-world Laravel experience.
                                </p>

                                <div className="flex items-center">
                                    <svg className="w-8 h-8 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                    </svg>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Active Community</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 pl-11">
                                    Join thousands of developers in discussions, code reviews, and collaborative learning.
                                </p>
                            </div>

                            <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-auto">
                                <a href="https://laracasts.com" target="_blank" rel="noopener noreferrer">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/90 to-amber-600/90 flex items-center justify-center">
                                    <div className="text-center p-6">
                                        <svg className="w-16 h-16 text-white mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"></path>
                                        </svg>
                                        <h4 className="text-xl font-bold text-white mb-2">Start Learning Today</h4>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>

                        <div className="bg-orange-600 dark:bg-orange-700 p-6 text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="flex items-center mb-4 md:mb-0">
                                    <svg className="w-8 h-8 text-white/80 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                    </svg>
                                    <p className="text-lg font-medium">
                                        "The Netflix for your career as a Laravel developer."
                                    </p>
                                </div>
                                <a href="https://laracasts.com/series/laravel-8-from-scratch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2 bg-white text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition-colors duration-300 shadow-md">
                                    Try Laravel From Scratch
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Conclusion - Enhanced with better styling */}
        <section className="bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none py-16 md:py-24">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6 md:pb-8 text-gray-900 dark:text-white">
                            The Future of <span className="text-orange-500">Laravel</span>
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed mb-6">
                            Laravel continues to evolve with new features and improvements. The Laravel team at Laravel is focused on making Laravel more efficient,
                            easier to use, and better integrated with modern web capabilities. Some exciting developments include:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 pb-3">Laravel Server-Side Rendering</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    A new architecture that allows components to render on the server, reducing bundle size and improving performance
                                    by keeping some components entirely on the server.
                                </p>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                                <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 pb-3">Laravel Livewire</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    A framework for building server-rendered, reactive, and real-time applications with Laravel.
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 pb-3">Laravel Octane</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    A high-performance HTTP server for Laravel applications, providing a significant performance boost.
                                </p>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                                <h3 className="text-xl font-bold text-orange-800 dark:text-orange-300 pb-3">Laravel Vapor</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    A serverless deployment platform for Laravel applications, allowing for scalable and cost-effective deployments.
                                </p>
                            </div>
                        </div>

                        <p className="text-lg md:text-xl leading-relaxed mb-6">
                            Laravel's focus on developer happiness and its powerful features have made it the framework of choice for PHP developers worldwide.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed">
                            Whether you're building a simple interactive widget or a complex enterprise application, Laravel provides
                            the tools and patterns needed to create maintainable, performant user interfaces. By understanding its
                            core concepts and best practices, you'll be well-equipped to leverage Laravel's power in your projects.
                        </p>
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
                                Take your Laravel development skills to the next level with our comprehensive resources,
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
                                    src="/assets/images/leb-icon.png"
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
                                Enhance your Laravel development skills with these hand-picked video tutorials
                                covering essential concepts and techniques.
                            </motion.p>
                        </div>
                    </div>

                    {/* Video Grid - Laravel-specific videos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {/* Video 1: Laravel Crash Course */}
                        <motion.div
                            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 dark:border-gray-800 transition-colors duration-300 ease-in-out group"
                            whileHover={{ borderColor: "orange" }}
                        >
                            {/* Video Embed */}
                            <div className="absolute inset-0 z-0">
                                <iframe
                                    src="https://www.youtube.com/embed/MFh0Fd7BsjE"
                                    title="Laravel Crash Course"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Video 2: Laravel Tutorial */}
                        <motion.div
                            className="relative aspect-video rounded-xl overflow-hidden border-2 cursor-pointer transition-colors duration-300 ease-in-out group"
                            whileHover={{ borderColor: "orange" }}
                        >
                            <div className="absolute inset-0 z-0">
                                <iframe
                                    src="https://www.youtube.com/embed/rIfdg_Ot-LI"
                                    title="Laravel Tutorial"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Video 3: Laravel Development Guide */}
                        <motion.div
                            className="relative aspect-video rounded-xl overflow-hidden border-2 cursor-pointer transition-colors duration-300 ease-in-out group"
                            whileHover={{ borderColor: "orange" }}
                        >
                            <div className="absolute inset-0 z-0">
                                <iframe
                                    src="https://www.youtube.com/embed/SqTdHCTWqks"
                                    title="Laravel Development Guide"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Video 4: Laravel Best Practices */}
                        <motion.div
                            className="relative aspect-video rounded-xl overflow-hidden border-2 cursor-pointer transition-colors duration-300 ease-in-out group"
                            whileHover={{ borderColor: "orange" }}
                        >
                            <div className="absolute inset-0 z-0">
                                <iframe
                                    src="https://www.youtube.com/embed/e7z6KJkGhmg"
                                    title="Laravel Best Practices"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>

                    {/* Additional CTA for Laravel videos */}
                    <div className="mt-12 text-center">
                        <a
                            href="https://www.youtube.com/results?search_query=laravel+tutorial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                            Explore More Laravel Tutorials
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </WebLayout>
</CodeThemeProvider>
);
};

export default LaravelArticle;
