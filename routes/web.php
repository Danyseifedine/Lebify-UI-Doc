<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('web/welcome');
})->name('home');

Route::prefix('docs')->name('doc.')->group(function () {
    // Overview
    Route::get('/installation', function () {
        return Inertia::render('web/doc/overview/installation');
    })->name('installation');

    Route::get('/getting-started', function () {
        return Inertia::render('web/doc/overview/getting-started');
    })->name('getting-started');

    Route::get('/components', function () {
        return Inertia::render('web/doc/components');
    })->name('components');

    Route::get('/theming', function () {
        return Inertia::render('web/doc/theming');
    })->name('theming');

    Route::get('/cli', function () {
        return Inertia::render('web/doc/cli');
    })->name('cli');

    // Components
    Route::prefix('components')->name('components.')->group(function () {
        Route::get('/button', function () {
            return Inertia::render('web/doc/comp/button');
        })->name('button');

        Route::get('/card', function () {
            return Inertia::render('web/doc/components/card');
        })->name('card');

        Route::get('/pattern', function () {
            return Inertia::render('web/doc/comp/pattern');
        })->name('pattern');

        Route::get('/input', function () {
            return Inertia::render('web/doc/comp/input');
        })->name('input');

        Route::get('/select', function () {
            return Inertia::render('web/doc/components/select');
        })->name('select');
    });

    // Frameworks
    Route::prefix('customization')->name('customization.')->group(function () {
        Route::get('/button', function () {
            return Inertia::render('web/doc/customization/buttonStyling');
        })->name('button');

        Route::get('/input', function () {
            return Inertia::render('web/doc/customization/inputStyling');
        })->name('input');

        Route::get('/pattern', function () {
            return Inertia::render('web/doc/customization/patternStyling');
        })->name('pattern');

        // Route::get('/vite', function () {
        //     return Inertia::render('web/doc/frameworks/vite');
        // })->name('vite');

        // Route::get('/remix', function () {
        //     return Inertia::render('web/doc/frameworks/remix');
        // })->name('remix');
    });
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard/index');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
