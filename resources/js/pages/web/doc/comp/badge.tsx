import { Head } from '@inertiajs/react';
import { DocsLayout } from '@/layouts/docs-layout';
import { DocParagraph, DocSection } from '@/components/web/docBuilder';
import { CodeBlock } from '@/components/codeBlock/code-block';
import { motion } from 'framer-motion';
import { Badge } from 'lebify-ui';


export default function BadgeDoc() {
    return (
        <DocsLayout tocItems={[
            { title: "Introduction", url: "#introduction", level: 1 },
            { title: "Basic Variants", url: "#basic-variants", level: 1 },
            { title: "Status Badges", url: "#status-badges", level: 1 },
            { title: "Lebanese Collections", url: "#lebanese-collections", level: 1 },
            { title: "Sizes", url: "#sizes", level: 1 },
            { title: "Badge Types", url: "#badge-types", level: 1 },
            { title: "Border Radius", url: "#border-radius", level: 1 },
            { title: "With Icons", url: "#with-icons", level: 1 },
            { title: "Interactive Badges", url: "#interactive-badges", level: 1 },
            { title: "API Reference", url: "#api-reference", level: 1 },
        ]}>
            <Head title="Badge - Lebify UI" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12 max-w-3xl"
            >
                <div className="space-y-4">
                    <h1 id="introduction" className="scroll-m-20 text-5xl pb-3 font-bold tracking-tight main-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Badge
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A versatile badge component with Lebanese-inspired variants, multiple styles, and customization options.
                    </p>

                    <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-muted">
                        <p className="text-sm text-muted-foreground">
                            <span className="font-semibold">Did you know?</span> The Lebify Badge component offers virtually infinite color possibilities through the magic <code>propColor</code> prop, along with 30+ predefined color variants, 4 sizes, 3 types, and 5 border radius options. Combined with icons and dismissable functionality, you can create limitless unique badge styles to perfectly match any design requirement.
                        </p>
                    </div>
                </div>

                <div className="space-y-10">
                    <DocSection id="basic-variants" title="Basic Variants" size="3xl">
                        <DocParagraph>
                            Lebify UI provides a set of basic badge color variants to cover common use cases.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Badge color="primary">Primary</Badge>
                            <Badge color="secondary">Secondary</Badge>
                            <Badge color="basic">Basic</Badge>
                            <Badge color="normal">Normal</Badge>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`import { Badge } from 'lebify-ui';

// Basic color variants
<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="basic">Basic</Badge>
<Badge color="normal">Normal</Badge>`}
                        />
                    </DocSection>

                    <DocSection id="status-badges" title="Status Badges" size="3xl">
                        <DocParagraph>
                            Status badges are useful for indicating different states or conditions in your UI.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Badge color="success">Success</Badge>
                            <Badge color="warning">Warning</Badge>
                            <Badge color="info">Info</Badge>
                            <Badge color="error">Error</Badge>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Status badges
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="info">Info</Badge>
<Badge color="error">Error</Badge>`}
                        />
                    </DocSection>

                    <DocSection id="lebanese-collections" title="Lebanese-Inspired Collections" size="3xl">
                        <DocParagraph>
                            Lebify UI features unique badge collections inspired by Lebanese culture, landscapes, and heritage.
                        </DocParagraph>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-medium mb-3">Cedar Collection</h3>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Badge color="cedar">Cedar</Badge>
                                    <Badge color="cedar-light">Cedar Light</Badge>
                                    <Badge color="cedar-dark">Cedar Dark</Badge>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Mediterranean Collection</h3>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Badge color="sea">Sea</Badge>
                                    <Badge color="coast">Coast</Badge>
                                    <Badge color="azure">Azure</Badge>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Mountain Collection</h3>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Badge color="stone">Stone</Badge>
                                    <Badge color="earth">Earth</Badge>
                                    <Badge color="terracotta">Terracotta</Badge>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Beirut Collection</h3>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Badge color="urban">Urban</Badge>
                                    <Badge color="concrete">Concrete</Badge>
                                    <Badge color="steel">Steel</Badge>
                                </div>
                            </div>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Cedar Collection
<Badge color="cedar">Cedar</Badge>
<Badge color="cedar-light">Cedar Light</Badge>
<Badge color="cedar-dark">Cedar Dark</Badge>

// Mediterranean Collection
<Badge color="sea">Sea</Badge>
<Badge color="coast">Coast</Badge>
<Badge color="azure">Azure</Badge>

// Mountain Collection
<Badge color="stone">Stone</Badge>
<Badge color="earth">Earth</Badge>
<Badge color="terracotta">Terracotta</Badge>

// Beirut Collection
<Badge color="urban">Urban</Badge>
<Badge color="concrete">Concrete</Badge>
<Badge color="steel">Steel</Badge>

// Additional Collections
// Culinary Collection
<Badge color="olive">Olive</Badge>
<Badge color="saffron">Saffron</Badge>
<Badge color="grape">Grape</Badge>

// Festival Collection
<Badge color="festive">Festive</Badge>
<Badge color="celebration">Celebration</Badge>
<Badge color="heritage">Heritage</Badge>

// Craft Collection
<Badge color="copper">Copper</Badge>
<Badge color="silver">Silver</Badge>
<Badge color="ceramic">Ceramic</Badge>

// Modern Collection
<Badge color="tech">Tech</Badge>
<Badge color="digital">Digital</Badge>
<Badge color="startup">Startup</Badge>`}
                        />
                    </DocSection>

                    <DocSection id="sizes" title="Sizes" size="3xl">
                        <DocParagraph>
                            Badges come in four different sizes to fit various UI contexts.
                        </DocParagraph>

                        <div className="flex items-center gap-4 my-6">
                            <Badge size="small">Small</Badge>
                            <Badge size="medium">Medium</Badge>
                            <Badge size="large">Large</Badge>
                            <Badge size="huge">Huge</Badge>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`<Badge size="small">Small</Badge>
<Badge size="medium">Medium</Badge> {/* Default */}
<Badge size="large">Large</Badge>
<Badge size="huge">Huge</Badge>`}
                        />
                    </DocSection>

                    <DocSection id="badge-types" title="Badge Types" size="3xl">
                        <DocParagraph>
                            Lebify UI supports different badge variants to match your design needs.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Badge variant="normal">Normal</Badge>
                            <Badge variant="outlined">Outlined</Badge>
                            <Badge variant="light">Light</Badge>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`<Badge variant="normal">Normal Badge</Badge> {/* Default */}
<Badge variant="outlined">Outlined Badge</Badge>
<Badge variant="light">Light Badge</Badge>`}
                        />

                        <DocParagraph>
                            You can customize outlined badges with specific colors:
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Badge
                                variant="outlined"
                                outlineColor="#ff6b6b"
                                outlineTextColor="#ff6b6b"
                            >
                                Custom Outline
                            </Badge>
                            <Badge
                                variant="light"
                                propColor="#4361ee"
                            >
                                Custom Light
                            </Badge>
                        </div>

                        <DocParagraph>
                            The <code>propColor</code> prop is like magic - it automatically generates the perfect background and text colors
                            for your badge. Just provide a base color, and the component intelligently creates a lighter background with
                            appropriate contrast for the text. This is especially useful with the "light" variant.
                        </DocParagraph>

                        <h3 className="text-lg font-medium mt-8 mb-3">Status Colors with Light Variant</h3>
                        <div className="flex flex-wrap gap-4 my-6">
                            <Badge variant="light" color="success">Success</Badge>
                            <Badge variant="light" color="warning">Warning</Badge>
                            <Badge variant="light" color="info">Info</Badge>
                            <Badge variant="light" color="error">Error</Badge>
                        </div>

                        <h3 className="text-lg font-medium mt-8 mb-3">Custom Colors with Light Variant</h3>
                        <div className="flex flex-wrap gap-3 my-6">
                            <Badge variant="light" propColor="#FF5733">Coral</Badge>
                            <Badge variant="light" propColor="#33FF57">Mint</Badge>
                            <Badge variant="light" propColor="#3357FF">Cobalt</Badge>
                            <Badge variant="light" propColor="#FF33A8">Magenta</Badge>
                            <Badge variant="light" propColor="#33FFF5">Aqua</Badge>
                            <Badge variant="light" propColor="#F033FF">Purple</Badge>
                            <Badge variant="light" propColor="#FF8C33">Orange</Badge>
                            <Badge variant="light" propColor="#8C33FF">Violet</Badge>
                            <Badge variant="light" propColor="#33FFAA">Jade</Badge>
                            <Badge variant="light" propColor="#FF3355">Ruby</Badge>
                            <Badge variant="light" propColor="#FFDD33">Gold</Badge>
                            <Badge variant="light" propColor="#33AAFF">Sky</Badge>
                        </div>

                        <h3 className="text-lg font-medium mt-8 mb-3">Borderless Light Badges</h3>
                        <div className="flex flex-wrap gap-3 my-6">
                            <Badge variant="light" propColor="#FF5733" isBordered={false}>Coral</Badge>
                            <Badge variant="light" propColor="#33FF57" isBordered={false}>Mint</Badge>
                            <Badge variant="light" propColor="#3357FF" isBordered={false}>Cobalt</Badge>
                            <Badge variant="light" propColor="#FF33A8" isBordered={false}>Magenta</Badge>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Custom outlined badge
<Badge
  variant="outlined"
  outlineColor="#ff6b6b"
  outlineTextColor="#ff6b6b"
>
  Custom Outline
</Badge>

// Status colors with light variant
<Badge variant="light" color="success">Success</Badge>
<Badge variant="light" color="warning">Warning</Badge>
<Badge variant="light" color="info">Info</Badge>
<Badge variant="light" color="error">Error</Badge>

// Custom light badge with automatic color generation
<Badge
  variant="light"
  propColor="#4361ee"
>
  Custom Light
</Badge>

// Borderless light badges
<Badge variant="light" propColor="#FF5733" isBordered={false}>Coral</Badge>
<Badge variant="light" propColor="#33FF57" isBordered={false}>Mint</Badge>

// The propColor automatically:
// 1. Creates a lighter background based on your color
// 2. Sets appropriate text color for contrast
// 3. Handles hover states and accessibility

// You can use any valid CSS color with propColor
<Badge variant="light" propColor="#FF5733">Coral</Badge>
<Badge variant="light" propColor="#33FF57">Mint</Badge>
// ... and many more`}
                        />
                    </DocSection>

                    <DocSection id="border-radius" title="Border Radius" size="3xl">
                        <DocParagraph>
                            Customize the border radius of your badges to match your UI design.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Badge radius="none">No Radius</Badge>
                            <Badge radius="small">Small Radius</Badge>
                            <Badge radius="medium">Medium Radius</Badge>
                            <Badge radius="large">Large Radius</Badge>
                            <Badge radius="pill">Pill Radius</Badge>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`<Badge radius="none">No Radius</Badge>
<Badge radius="small">Small Radius</Badge>
<Badge radius="medium">Medium Radius</Badge>
<Badge radius="large">Large Radius</Badge>
<Badge radius="pill">Pill Radius</Badge> {/* Default */}`}
                        />
                    </DocSection>

                    <DocSection id="with-icons" title="With Icons" size="3xl">
                        <DocParagraph>
                            Badges can include icons to enhance visual communication. Icons can be positioned on either side of the text.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Badge
                                icon={<span className="mr-1">🔔</span>}
                                iconPosition="start"
                            >
                                Notifications
                            </Badge>
                            <Badge
                                icon={<span className="ml-1">✓</span>}
                                iconPosition="end"
                            >
                                Verified
                            </Badge>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Icon at the start
<Badge
  icon={<span className="mr-1">🔔</span>}
  iconPosition="start"
>
  Notifications
</Badge>

// Icon at the end
<Badge
  icon={<span className="ml-1">✓</span>}
  iconPosition="end"
>
  Verified
</Badge>

// Using Lucide icons
import { Check, Bell } from 'lucide-react';

<Badge
  icon={<Bell className="h-3 w-3 mr-1" />}
  iconPosition="start"
>
  Notifications
</Badge>

// Custom icon spacing
<Badge
  icon={<Check className="h-3 w-3" />}
  iconPosition="end"
  iconSpacing={10}
>
  Verified
</Badge>`}
                        />
                    </DocSection>

                    <DocSection id="interactive-badges" title="Interactive Badges" size="3xl">
                        <DocParagraph>
                            Badges can be made interactive with click handlers, useful for filtering or toggling functionality.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Badge
                                interactive
                                onClick={() => alert('Badge clicked!')}
                            >
                                Click me
                            </Badge>
                            <Badge
                                interactive
                                color="cedar"
                                onClick={() => alert('Cedar badge clicked!')}
                            >
                                Interactive
                            </Badge>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Interactive badges
<Badge
  interactive
  onClick={() => alert('Badge clicked!')}
>
  Click me
</Badge>

// Interactive with custom color
<Badge
  interactive
  color="cedar"
  onClick={() => alert('Cedar badge clicked!')}
>
  Interactive
</Badge>`}
                        />
                    </DocSection>

                    <DocSection id="api-reference" title="API Reference" size="3xl">
                        <DocParagraph>
                            The Badge component accepts the following props:
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
                                            <td className="p-3 font-medium text-primary">children</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">ReactNode</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Badge content</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">color</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">BadgeColor</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"primary"</td>
                                            <td className="p-3">Badge color variant from Lebanese-inspired collections</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">size</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">"small" | "medium" | "large" | "huge"</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"medium"</td>
                                            <td className="p-3">Badge size</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">radius</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">"none" | "small" | "medium" | "large" | "pill"</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"pill"</td>
                                            <td className="p-3">Badge border radius</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">variant</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">"normal" | "outlined" | "light"</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"normal"</td>
                                            <td className="p-3">Badge visual variant</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">outlineColor</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Outline color for outlined variant</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">outlineTextColor</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Text color for outlined variant</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">propColor</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Magic color that automatically generates background and text colors</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">icon</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">ReactNode</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Icon element to display</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">iconPosition</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">"start" | "end"</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"start"</td>
                                            <td className="p-3">Position of the icon</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">iconSpacing</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">number</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">7</td>
                                            <td className="p-3">Space between icon and text (in pixels)</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">onClick</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">() void</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">onClick handler for clickable badges</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">interactive</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">boolean</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">false</td>
                                            <td className="p-3">Indicates whether the badge is interactive</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">isBordered</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">boolean</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">true</td>
                                            <td className="p-3">Controls whether light variant badges have borders</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">className</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Additional class names</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">style</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">CSSProperties</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Inline styles</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <DocParagraph>
                            The Badge component also exposes several constants for use in your application:
                        </DocParagraph>

                        <CodeBlock
                            language="typescript"
                            code={`// Access badge constants
import { Badge } from 'lebify-ui';

// Available colors grouped by collection
console.log(Badge.COLORS.BASIC);       // ['primary', 'secondary', 'basic', 'normal']
console.log(Badge.COLORS.STATUS);      // ['success', 'warning', 'info', 'error']
console.log(Badge.COLORS.CEDAR);       // ['cedar', 'cedar-light', 'cedar-dark']
console.log(Badge.COLORS.MEDITERRANEAN); // ['sea', 'coast', 'azure']
console.log(Badge.COLORS.MOUNTAIN);    // ['stone', 'earth', 'terracotta']
console.log(Badge.COLORS.BEIRUT);      // ['urban', 'concrete', 'steel']
console.log(Badge.COLORS.CULINARY);    // ['olive', 'saffron', 'grape']
console.log(Badge.COLORS.FESTIVAL);    // ['festive', 'celebration', 'heritage']
console.log(Badge.COLORS.CRAFT);       // ['copper', 'silver', 'ceramic']
console.log(Badge.COLORS.MODERN);      // ['tech', 'digital', 'startup']

// Badge sizes
console.log(Badge.SIZES.SMALL);        // 'small'
console.log(Badge.SIZES.MEDIUM);       // 'medium'
console.log(Badge.SIZES.LARGE);        // 'large'
console.log(Badge.SIZES.HUGE);         // 'huge'

// Border radius options
console.log(Badge.RADIUS.NONE);        // 'none'
console.log(Badge.RADIUS.SMALL);       // 'small'
console.log(Badge.RADIUS.MEDIUM);      // 'medium'
console.log(Badge.RADIUS.LARGE);       // 'large'
console.log(Badge.RADIUS.PILL);        // 'pill'

// Badge variants
console.log(Badge.VARIANTS.NORMAL);    // 'normal'
console.log(Badge.VARIANTS.OUTLINED);  // 'outlined'
console.log(Badge.VARIANTS.LIGHT);     // 'light'`}
                        />
                    </DocSection>
                </div>
            </motion.div>
        </DocsLayout>
    );
}
