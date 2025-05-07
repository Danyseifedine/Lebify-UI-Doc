import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/web/navbar';
import { CodeThemeProvider } from '@/components/codeBlock/contexts/code-theme-context';
import Contact from '@/components/web/contact';
import Footer from '@/components/web/footer';
import WhyLebify from '@/components/web/WhyLebify';
import ComponentsShowcase from '@/components/web/ComponentsShowcase';
import Hero from '@/components/web/hero';
import { Community } from '@/components/web/community';
export default function Welcome() {

    return (
        <CodeThemeProvider>

            <Head title="Welcome - Lebify UI">
                <link rel="preconnect" href="https://fonts.bunny.net" as="font" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" as="style" rel="stylesheet" />
            </Head>


            <Navbar />

            <Hero />

            <ComponentsShowcase />

            <WhyLebify />

            <Community />

            <Contact />

            <Footer />

        </CodeThemeProvider>
    );
}

