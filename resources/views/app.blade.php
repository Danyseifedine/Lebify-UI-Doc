<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="google" content="notranslate">
    <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#1A1A1A" media="(prefers-color-scheme: dark)">
    <meta name="author" content="Lebify UI">
    <meta name="robots" content="index, follow">

    <meta name="keywords"
        content="Lebify UI, React components, UI library, design system, component library, React UI, frontend development, web components, responsive design, accessible components, UI kit, design tokens, theming, customization, Lebanese-inspired design, modern UI, developer tools">
    <meta name="description"
        content="Lebify UI: A modern React component library with Lebanese-inspired design aesthetics. Build beautiful, accessible, and responsive web applications with ease using our comprehensive collection of customizable UI components.">

    <!-- Preload critical assets -->
    <link rel="preload" href="{{ asset('core/vendor/img/favicons/favicon.ico') }}" as="image" type="image/x-icon">
    <link rel="preload" href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" as="style">

    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('core/vendor/img/favicons/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('core/vendor/img/favicons/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('core/vendor/img/favicons/favicon-16x16.png') }}">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('core/vendor/img/favicons/favicon.ico') }}">
    <link rel="canonical" href="{{ url()->current() }}">
    <meta name="msapplication-TileColor" content="#008382">
    <meta name="msapplication-TileImage" content="{{ asset('vendor/img/favicons/mstile-150x150.png') }}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="Lebify UI - Modern React Component Library">
    <meta property="og:description"
        content="A comprehensive React component library with Lebanese-inspired design aesthetics. Build beautiful, accessible, and responsive web applications with ease.">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ url()->current() }}">
    <meta property="twitter:title" content="Lebify UI - Modern React Component Library">
    <meta property="twitter:description"
        content="A comprehensive React component library with Lebanese-inspired design aesthetics. Build beautiful, accessible, and responsive web applications with ease.">

    <title inertia>{{ config('app.name', 'Lebify UI') }}</title>

    {{-- Inline script to detect system dark mode preference and apply it immediately to prevent flash --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? 'system' }}';
            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
            // Set background color immediately to prevent flash
            document.documentElement.style.backgroundColor = document.documentElement.classList.contains('dark') ? 'oklch(0.145 0 0)' : 'oklch(1 0 0)';
        })();
    </script>

    {{-- Critical CSS inlined to reduce render-blocking --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }
        html.dark {
            background-color: oklch(0.145 0 0);
        }
        body {
            margin: 0;
            font-family: 'Instrument Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        }
    </style>

    <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"></noscript>

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead

    <script type="application/ld+json" defer>
        {
            "@context": "http://schema.org",
            "@type": "SoftwareApplication",
            "name": "Lebify UI",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web",
            "url": "https://ui.lebify.online",
            "logo": "{{ asset('core/vendor/img/favicons/favicon.ico') }}",
            "description": "A modern React component library with Lebanese-inspired design aesthetics",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            }
        }
    </script>
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
