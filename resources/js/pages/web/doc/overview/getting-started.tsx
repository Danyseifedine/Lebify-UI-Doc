import { Head } from '@inertiajs/react';
import { DocsLayout } from '@/layouts/docs-layout';

export default function GettingStarted() {
    return (
        <DocsLayout tocItems={[

        ]}
        >
            <Head title="Getting Started - Lebify UI">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="space-y-8 max-w-3xl">
                <div className="space-y-2">
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                        Getting Started
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Get started with Lebify UI
                    </p>
                </div>

            </div>
        </DocsLayout>
    );
}
