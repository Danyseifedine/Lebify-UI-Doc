import React from 'react';
import WebLayout from '../../layouts/web-layout';
import { Hero } from '../../components/web/hero';
import { ComponentsShowcase } from '../../components/web/ComponentsShowcase';
import { Community } from '../../components/web/community';
import { Contact } from '../../components/web/contact';
import { CodeThemeProvider } from '@/components/codeBlock/contexts/code-theme-context';
import WhyLebify from '@/components/web/WhyLebify';

const Welcome = () => {
return (
<CodeThemeProvider>
    <WebLayout title="Lebify - Modern UI Components for React"
        description="Build beautiful, responsive web applications with Lebify's modern UI component library">
        <Hero />
        <ComponentsShowcase />
        <WhyLebify />
        <Community />
        <Contact />
    </WebLayout>
</CodeThemeProvider>
);
};

export default Welcome;
