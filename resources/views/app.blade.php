<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="google" content="notranslate">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#FFFFFF" />
    <meta name="author" content="Lebify Learning">
    <meta name="robots" content="index, follow">

    <meta name="keywords"
        content="Lebify Learning, online courses, web development, programming, full stack, Laravel, PHP, JavaScript, HTML, CSS, database, SQL, React, Vue.js, Node.js, API development, responsive design, version control, Git, Agile methodology, software engineering, coding bootcamp, tech education, career development, IT skills, web applications, mobile development, cloud computing, cybersecurity, data structures, algorithms, user experience, UI/UX design, DevOps, continuous integration, software architecture, test-driven development, scalability, performance optimization, front-end development, back-end development, quizzes, interactive learning">
    <meta name="description"
        content="Lebify Learning: Your premier destination for mastering development skills. Dive into our comprehensive courses, engaging quizzes, and interactive learning experiences. From web development to mobile apps, we offer cutting-edge curriculum to boost your tech career. Join Lebify Learning today and transform your coding journey!">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('core/vendor/img/favicons/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32"
        href="{{ asset('core/vendor/img/favicons/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16"
        href="{{ asset('core/vendor/img/favicons/favicon-16x16.png') }}">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('core/vendor/img/favicons/favicon.ico') }}">
    <link rel="canonical" href="{{ url()->current() }}">
    <meta name="msapplication-TileColor" content="#008382">
    <meta name="msapplication-TileImage" content="{{ asset('vendor/img/favicons/mstile-150x150.png') }}">
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="Lebify Learning - Your Gateway to Development Mastery">
    <meta property="og:description"
        content="Elevate your coding skills with Lebify Learning. Explore our diverse range of development courses, interactive quizzes, and hands-on projects. Start your journey to becoming a proficient developer today!">
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ url()->current() }}">
    <meta property="twitter:title" content="Lebify Learning - Your Gateway to Development Mastery">
    <meta property="twitter:description"
        content="Elevate your coding skills with Lebify Learning. Explore our diverse range of development courses, interactive quizzes, and hands-on projects. Start your journey to becoming a proficient developer today!">
    <!-- ===============================================-->
    <!--    Package-->
    <!-- ===============================================-->

    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? 'system' }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead

    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "EducationalOrganization",
            "name": "Lebify UI - Your Gateway to Development Mastery",
            "url": "https://ui.lebify.online",
            "logo": "{{ asset('core/vendor/img/favicons/favicon.ico') }}",
            }
        </script>
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>