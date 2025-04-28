import { Head } from '@inertiajs/react';
import { DocsLayout } from '@/layouts/docs-layout';
import { DocParagraph, DocSection } from '@/components/web/docBuilder';
import { CodeBlock } from '@/components/codeBlock/code-block';
import { motion } from 'framer-motion';
import { Avatar } from 'lebify-ui';

export default function AvatarDoc() {
    return (
        <DocsLayout tocItems={[
            { title: "Introduction", url: "#introduction", level: 1 },
            { title: "Basic Usage", url: "#basic-usage", level: 1 },
            { title: "Sizes", url: "#sizes", level: 1 },
            { title: "Shapes", url: "#shapes", level: 1 },
            { title: "Variants", url: "#variants", level: 1 },
            { title: "Lebanese Collections", url: "#lebanese-collections", level: 1 },
            { title: "Fallback Initials", url: "#fallback-initials", level: 1 },
            { title: "Custom Styling", url: "#custom-styling", level: 1 },
            { title: "Interactive Avatars", url: "#interactive-avatars", level: 1 },
            { title: "API Reference", url: "#api-reference", level: 1 },
        ]}>
            <Head title="Avatar - Lebify UI" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12 max-w-3xl"
            >
                <div className="space-y-4">
                    <h1 id="introduction" className="scroll-m-20 text-5xl pb-3 font-bold tracking-tight main-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Avatar
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A versatile avatar component with Lebanese-inspired variants, multiple shapes, and customization options.
                    </p>

                    <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-muted">
                        <p className="text-sm text-muted-foreground">
                            <span className="font-semibold">Did you know?</span> The Lebify Avatar component offers virtually infinite styling possibilities through custom colors, along with 30+ predefined variants, 4 sizes, and 3 shapes. It automatically generates initials when no image is available, creating a seamless user experience in any context.
                        </p>
                    </div>
                </div>

                <div className="space-y-10">
                    <DocSection id="basic-usage" title="Basic Usage" size="3xl">
                        <DocParagraph>
                            The Avatar component can display user images or fallback to initials when no image is available.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6 items-center">
                            <Avatar
                                src="https://i.pravatar.cc/150?img=1"
                                alt="User Avatar"
                            />
                            <Avatar
                                name="John Doe"
                            />
                            <Avatar
                                name="Sarah Connor"
                                variant="primary"
                            />
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`import { Avatar } from 'lebify-ui';

// With image
<Avatar
  src="https://i.pravatar.cc/150?img=1"
  alt="User Avatar"
/>

// With fallback initials
<Avatar
  name="John Doe"
/>

// With variant
<Avatar
  name="Sarah Connor"
  variant="primary"
/>`}
                        />
                    </DocSection>

                    <DocSection id="sizes" title="Sizes" size="3xl">
                        <DocParagraph>
                            Avatars come in four different sizes to fit various UI contexts.
                        </DocParagraph>

                        <div className="flex items-center gap-4 my-6">
                            <Avatar size="small" name="Small" />
                            <Avatar size="medium" name="Medium" />
                            <Avatar size="large" name="Large" />
                            <Avatar size="xlarge" name="XLarge" />
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`<Avatar size="small" name="Small" />
<Avatar size="medium" name="Medium" /> {/* Default */}
<Avatar size="large" name="Large" />
<Avatar size="xlarge" name="XLarge" />`}
                        />
                    </DocSection>

                    <DocSection id="shapes" title="Shapes" size="3xl">
                        <DocParagraph>
                            Avatars can have different shapes to match your design system.
                        </DocParagraph>

                        <div className="flex items-center gap-4 my-6">
                            {/* <Avatar shape="circle" name="Circle" variant="primary" /> */}
                            <Avatar shape="square" name="Square" variant="secondary" />
                            <Avatar shape="rounded" name="Rounded" variant="tertiary" />
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`<Avatar shape="circle" name="Circle" variant="primary" /> {/* Default */}
<Avatar shape="square" name="Square" variant="secondary" />
<Avatar shape="rounded" name="Rounded" variant="tertiary" />`}
                        />
                    </DocSection>

                    <DocSection id="lebanese-collections" title="Lebanese-Inspired Collections" size="3xl">
                        <DocParagraph>
                            Lebify UI features unique avatar variants inspired by Lebanese culture, landscapes, and heritage.
                        </DocParagraph>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-medium mb-3">Cedar Collection</h3>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Avatar variant="cedar" name="Cedar" />
                                    <Avatar variant="cedar-light" name="Cedar Light" />
                                    <Avatar variant="cedar-dark" name="Cedar Dark" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Mediterranean Collection</h3>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Avatar variant="sea" name="Sea" />
                                    <Avatar variant="coast" name="Coast" />
                                    <Avatar variant="azure" name="Azure" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Mountain Collection</h3>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Avatar variant="stone" name="Stone" />
                                    <Avatar variant="earth" name="Earth" />
                                    <Avatar variant="terracotta" name="Terracotta" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Beirut Collection</h3>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Avatar variant="urban" name="Urban" />
                                    <Avatar variant="concrete" name="Concrete" />
                                    <Avatar variant="steel" name="Steel" />
                                </div>
                            </div>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Cedar Collection
<Avatar variant="cedar" name="Cedar" />
<Avatar variant="cedar-light" name="Cedar Light" />
<Avatar variant="cedar-dark" name="Cedar Dark" />

// Mediterranean Collection
<Avatar variant="sea" name="Sea" />
<Avatar variant="coast" name="Coast" />
<Avatar variant="azure" name="Azure" />

// Mountain Collection
<Avatar variant="stone" name="Stone" />
<Avatar variant="earth" name="Earth" />
<Avatar variant="terracotta" name="Terracotta" />

// Beirut Collection
<Avatar variant="urban" name="Urban" />
<Avatar variant="concrete" name="Concrete" />
<Avatar variant="steel" name="Steel" />

// Additional Collections
// Culinary Collection
<Avatar variant="olive" name="Olive" />
<Avatar variant="saffron" name="Saffron" />
<Avatar variant="grape" name="Grape" />

// Festival Collection
<Avatar variant="festive" name="Festive" />
<Avatar variant="celebration" name="Celebration" />
<Avatar variant="heritage" name="Heritage" />

// Craft Collection
<Avatar variant="copper" name="Copper" />
<Avatar variant="silver" name="Silver" />
<Avatar variant="ceramic" name="Ceramic" />

// Modern Collection
<Avatar variant="tech" name="Tech" />
<Avatar variant="digital" name="Digital" />
<Avatar variant="startup" name="Startup" />`}
                        />
                    </DocSection>

                    <DocSection id="fallback-initials" title="Fallback Initials" size="3xl">
                        <DocParagraph>
                            When no image is provided, the Avatar component automatically displays the user's initials.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Avatar name="John Doe" variant="primary" />
                            <Avatar name="Jane Smith" variant="secondary" />
                            <Avatar name="Alex Johnson" variant="tertiary" />
                            <Avatar name="Sarah Williams" variant="cedar" />
                            <Avatar name="Single Name" variant="sea" />
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Automatically extracts initials from name
<Avatar name="John Doe" variant="primary" /> {/* Shows "JD" */}
<Avatar name="Jane Smith" variant="secondary" /> {/* Shows "JS" */}
<Avatar name="Alex Johnson" variant="tertiary" /> {/* Shows "AJ" */}
<Avatar name="Sarah Williams" variant="cedar" /> {/* Shows "SW" */}
<Avatar name="Single Name" variant="sea" /> {/* Shows "S" */}`}
                        />
                    </DocSection>

                    <DocSection id="custom-styling" title="Custom Styling" size="3xl">
                        <DocParagraph>
                            Avatars can be customized with specific colors and styles.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Avatar
                                name="Custom"
                                backgroundColor="#FF5733"
                                textColor="#FFFFFF"
                            />
                            <Avatar
                                name="Bordered"
                                borderColor="#4361ee"
                                borderWidth="2px"
                            />
                            <Avatar
                                name="Rounded"
                                shape="square"
                                borderRadius="8px"
                                backgroundColor="#33FF57"
                            />
                            <Avatar
                                src="https://i.pravatar.cc/150?img=2"
                                borderColor="#FF33A8"
                                borderWidth="3px"
                            />
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Custom background and text colors
<Avatar
  name="Custom"
  backgroundColor="#FF5733"
  textColor="#FFFFFF"
/>

// Custom border
<Avatar
  name="Bordered"
  borderColor="#4361ee"
  borderWidth="2px"
/>

// Custom shape with border radius
<Avatar
  name="Rounded"
  shape="square"
  borderRadius="8px"
  backgroundColor="#33FF57"
/>

// Custom border for image avatar
<Avatar
  src="https://i.pravatar.cc/150?img=2"
  borderColor="#FF33A8"
  borderWidth="3px"
/>`}
                        />
                    </DocSection>

                    <DocSection id="interactive-avatars" title="Interactive Avatars" size="3xl">
                        <DocParagraph>
                            Avatars can be made interactive with click handlers.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Avatar
                                name="Click Me"
                                variant="primary"
                                onClick={() => alert('Avatar clicked!')}
                                className="cursor-pointer hover:opacity-80 transition-opacity"
                            />
                            <Avatar
                                src="https://i.pravatar.cc/150?img=3"
                                onClick={() => alert('Image avatar clicked!')}
                                className="cursor-pointer hover:opacity-80 transition-opacity"
                            />
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Interactive avatar with initials
<Avatar
  name="Click Me"
  variant="primary"
  onClick={() => alert('Avatar clicked!')}
  className="cursor-pointer hover:opacity-80 transition-opacity"
/>

// Interactive avatar with image
<Avatar
  src="https://i.pravatar.cc/150?img=3"
  onClick={() => alert('Image avatar clicked!')}
  className="cursor-pointer hover:opacity-80 transition-opacity"
/>`}
                        />
                    </DocSection>

                    <DocSection id="api-reference" title="API Reference" size="3xl">
                        <DocParagraph>
                            The Avatar component accepts the following props:
                        </DocParagraph>

                        <div className="my-6 overflow-hidden rounded-lg border bg-card">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b bg-muted/50">
                                            <th className="p-3 text-left font-medium">Prop</th>
                                            <th className="p-3 text-left font-medium">Type</th>
                                            <th className="p-3 text-left font-medium">Default</th>
                                            <th className="p-3 text-left font-medium">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">src</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Image source URL</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">name</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">User name (used for extracting initials and alt text)</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">alt</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Alternative text for the avatar image</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">size</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">"small" | "medium" | "large" | "xlarge"</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"medium"</td>
                                            <td className="p-3">Avatar size</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">shape</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">"circle" | "square" | "rounded"</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"circle"</td>
                                            <td className="p-3">Avatar shape</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">variant</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">primary' | 'secondary' | 'tertiary' | 'basic'</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"basic"</td>
                                            <td className="p-3">Avatar variant/style</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">className</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Additional CSS classes</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">backgroundColor</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Background color (CSS value)</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">textColor</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Text color for initials (CSS value)</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">borderColor</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Border color (CSS value)</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">borderWidth</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Border width (CSS value with unit)</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">borderRadius</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Border radius (CSS value with unit)</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">onClick</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">MouseEventHandler</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Click handler</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <DocParagraph>
                            The Avatar component also exposes several constants for use in your application:
                        </DocParagraph>

                        <CodeBlock
                            language="typescript"
                            code={`// Access avatar constants
import { Avatar } from 'lebify-ui';

// Available variants grouped by collection
console.log(Avatar.VARIANTS.BASIC);       // ['primary', 'secondary', 'tertiary', 'basic']
console.log(Avatar.VARIANTS.CEDAR);       // ['cedar', 'cedar-light', 'cedar-dark']
console.log(Avatar.VARIANTS.MEDITERRANEAN); // ['sea', 'coast', 'azure']
console.log(Avatar.VARIANTS.MOUNTAIN);    // ['stone', 'earth', 'terracotta']
console.log(Avatar.VARIANTS.BEIRUT);      // ['urban', 'concrete', 'steel']
console.log(Avatar.VARIANTS.CULINARY);    // ['olive', 'saffron', 'grape']
console.log(Avatar.VARIANTS.FESTIVAL);    // ['festive', 'celebration', 'heritage']
console.log(Avatar.VARIANTS.CRAFT);       // ['copper', 'silver', 'ceramic']
console.log(Avatar.VARIANTS.MODERN);      // ['tech', 'digital', 'startup']

// Avatar sizes
console.log(Avatar.SIZES.SMALL);        // 'small'
console.log(Avatar.SIZES.MEDIUM);       // 'medium'
console.log(Avatar.SIZES.LARGE);        // 'large'
console.log(Avatar.SIZES.XLARGE);       // 'xlarge'

// Avatar shapes
console.log(Avatar.SHAPES.CIRCLE);      // 'circle'
console.log(Avatar.SHAPES.SQUARE);      // 'square'
console.log(Avatar.SHAPES.ROUNDED);     // 'rounded'`}
                        />
                    </DocSection>
                </div>
            </motion.div>
        </DocsLayout>
    );
}
