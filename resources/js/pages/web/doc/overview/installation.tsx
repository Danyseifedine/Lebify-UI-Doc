// import { Button, useTheme } from 'lebify-ui'
import { DocsLayout } from '@/layouts/docs-layout'
import { Head } from '@inertiajs/react'
import { CodeBlock } from '@/components/codeBlock/code-block'
import { DocSection, DocParagraph } from '@/components/web/docBuilder'
import { motion } from 'framer-motion'
import { useTheme, Button } from 'lebify-ui'

function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            onClick={toggleTheme}
            variant="primary"
            className="transition-all hover:scale-105"
        >
            <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-current" />
                Current Theme: {theme}
            </span>
        </Button>
    )
}

export default function Installation() {
    return (
        <DocsLayout tocItems={[
            { title: "NPM Installation", url: "#npm-installation", level: 1 },
            { title: "Configuration", url: "#configuration", level: 1 },
            { title: "Usage", url: "#usage", level: 1 }
        ]}>
            <Head title="Installation - Lebify UI" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12 max-w-3xl"
            >
                <div className="space-y-4">
                    <h1 className="scroll-m-20 text-5xl pb-3 font-bold tracking-tight main-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Installation
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        How to install and set up Lebify UI in your project
                    </p>
                    <div className="pt-12">
                        <p className="text-lg text-justify text-muted-foreground">
                            Lebify UI is a modern, lightweight React component library designed for building beautiful and accessible user interfaces. With a focus on customization and developer experience, it provides a comprehensive set of pre-built components that follow best practices in web development. The package is available through NPM and can be installed using your preferred package manager.
                        </p>
                    </div>
                </div>
                <div className="space-y-10">
                    <DocSection id="npm-installation" title="NPM Installation" size="3xl">
                        <DocParagraph>Install Lebify UI using your preferred package manager:</DocParagraph>
                        <div className="relative">
                            <CodeBlock
                                language="bash"
                                code="npm install lebify-ui"
                            />
                        </div>
                        <DocParagraph>Or using yarn:</DocParagraph>
                        <CodeBlock
                            language="bash"
                            code="yarn add lebify-ui"
                        />
                    </DocSection>

                    <DocSection id="configuration" size="3xl" title="Configuration">
                        <DocParagraph>
                            To use Lebify UI in your application, you need to wrap your application with the
                            ThemeProvider component. This provider manages the theme state across your application.
                        </DocParagraph>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <CodeBlock
                                language="typescript"
                                code={`import { ThemeProvider } from 'lebify-ui';

function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      themes={["light", "dark", "dim", "earth"]}
    >
      <YourApp />
    </ThemeProvider>
  );
}`}
                            />
                        </motion.div>
                    </DocSection>

                    <DocSection id="usage" size="3xl" title="Usage">
                        <DocParagraph>
                            After installation, you can import and use any component from Lebify UI in your application:
                        </DocParagraph>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <CodeBlock
                                language="typescript"
                                code={`import { Button, useTheme } from 'lebify-ui';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Current theme: {theme}</h1>
      <Button onClick={toggleTheme} variant="primary">
        Toggle Theme
      </Button>
    </div>
  );
}`}
                            />
                        </motion.div>

                        <DocParagraph>
                            Lebify UI provides a wide range of components and hooks to help you build your application.
                            Check out the documentation for more details on available components and their usage.
                        </DocParagraph>
                    </DocSection>
                </div>
            </motion.div>

            <ThemeToggleButton />
        </DocsLayout>
    )
}
