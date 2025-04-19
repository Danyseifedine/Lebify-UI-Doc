import { Head } from '@inertiajs/react';
import { DocsLayout } from '@/layouts/docs-layout';
import { CodeBlock } from '@/components/codeBlock/code-block';
import { DocSection, DocParagraph } from '@/components/web/docBuilder';
import { motion } from 'framer-motion';
import { Button } from 'lebify-ui';
import {
    Check,
    Download,
    Mail,
} from 'lucide-react';

export default function ButtonDoc() {
    return (
        <DocsLayout tocItems={[
            { title: "Introduction", url: "#introduction", level: 1 },
            { title: "Basic Variants", url: "#basic-variants", level: 1 },
            { title: "Lebanese Collections", url: "#lebanese-collections", level: 1 },
            { title: "Sizes", url: "#sizes", level: 1 },
            { title: "Button Types", url: "#button-types", level: 1 },
            { title: "With Icons", url: "#with-icons", level: 1 },
            { title: "Loading State", url: "#loading-state", level: 1 },
            { title: "Hover Effects", url: "#hover-effects", level: 1 },
            { title: "API Reference", url: "#api-reference", level: 1 },
        ]}>
            <Head title="Button - Lebify UI" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12 max-w-3xl"
            >
                <div className="space-y-4">
                    <h1 id="introduction" className="scroll-m-20 text-5xl pb-3 font-bold tracking-tight main-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Button
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A versatile button component with Lebanese-inspired variants, multiple styles, and interactive features.
                    </p>

                    <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-muted">
                        <p className="text-sm text-muted-foreground">
                            <span className="font-semibold">Did you know?</span> With all possible combinations of variants, types, sizes, and effects,
                            the Lebify Button component can create <span className="font-bold text-primary">699,904</span> unique button styles!
                            This makes it one of the most versatile button libraries available.
                        </p>
                    </div>
                </div>

                <div className="space-y-10">
                    <DocSection id="basic-variants" title="Basic Variants" size="3xl">
                        <DocParagraph>
                            Lebify UI provides a set of basic button variants to cover common use cases.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="tertiary">Tertiary</Button>
                            <Button variant="basic">Basic</Button>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`import { Button } from 'lebify-ui';

// Basic variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="basic">Basic</Button>`}
                        />
                    </DocSection>

                    <DocSection id="lebanese-collections" title="Lebanese-Inspired Collections" size="3xl">
                        <DocParagraph>
                            Lebify UI features unique button collections inspired by Lebanese culture, landscapes, and heritage.
                        </DocParagraph>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-medium mb-3">Cedar Collection</h3>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Button variant="cedar">Cedar</Button>
                                    <Button variant="cedar-light">Cedar Light</Button>
                                    <Button variant="cedar-dark">Cedar Dark</Button>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Mediterranean Collection</h3>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Button variant="sea">Sea</Button>
                                    <Button variant="coast">Coast</Button>
                                    <Button variant="azure">Azure</Button>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Mountain Collection</h3>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Button variant="stone">Stone</Button>
                                    <Button variant="earth">Earth</Button>
                                    <Button variant="terracotta">Terracotta</Button>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Beirut Collection</h3>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Button variant="urban">Urban</Button>
                                    <Button variant="concrete">Concrete</Button>
                                    <Button variant="steel">Steel</Button>
                                </div>
                            </div>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Cedar Collection
<Button variant="cedar">Cedar</Button>
<Button variant="cedar-light">Cedar Light</Button>
<Button variant="cedar-dark">Cedar Dark</Button>

// Mediterranean Collection
<Button variant="sea">Sea</Button>
<Button variant="coast">Coast</Button>
<Button variant="azure">Azure</Button>

// Mountain Collection
<Button variant="stone">Stone</Button>
<Button variant="earth">Earth</Button>
<Button variant="terracotta">Terracotta</Button>

// Beirut Collection
<Button variant="urban">Urban</Button>
<Button variant="concrete">Concrete</Button>
<Button variant="steel">Steel</Button>

// Additional Collections
// Culinary Collection
<Button variant="olive">Olive</Button>
<Button variant="saffron">Saffron</Button>
<Button variant="grape">Grape</Button>

// Festival Collection
<Button variant="festive">Festive</Button>
<Button variant="celebration">Celebration</Button>
<Button variant="heritage">Heritage</Button>

// Craft Collection
<Button variant="copper">Copper</Button>
<Button variant="silver">Silver</Button>
<Button variant="ceramic">Ceramic</Button>

// Modern Collection
<Button variant="tech">Tech</Button>
<Button variant="digital">Digital</Button>
<Button variant="startup">Startup</Button>`}
                        />
                    </DocSection>

                    <DocSection id="sizes" title="Sizes" size="3xl">
                        <DocParagraph>
                            Buttons come in three different sizes to fit various UI contexts.
                        </DocParagraph>

                        <div className="flex items-center gap-4 my-6">
                            <Button size="small">Small</Button>
                            <Button size="medium">Medium</Button>
                            <Button size="large">Large</Button>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`}
                        />
                    </DocSection>

                    <DocSection id="button-types" title="Button Types" size="3xl">
                        <DocParagraph>
                            Lebify UI supports different button types to match your design needs.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Button buttonType="filled">Filled</Button>
                            <Button buttonType="outlined">Outlined</Button>
                            <Button buttonType="ghost">Ghost</Button>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`<Button buttonType="filled">Filled Button</Button>
<Button buttonType="outlined">Outlined Button</Button>
<Button buttonType="ghost">Ghost Button</Button>`}
                        />
                    </DocSection>

                    <DocSection id="with-icons" title="With Icons" size="3xl">
                        <DocParagraph>
                            Buttons can include icons to enhance visual communication. Icons can be positioned on either side of the text.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Button icon={<Mail className="h-4 w-4" />} iconPosition="left">
                                Login with Email
                            </Button>
                            <Button icon={<Download className="h-4 w-4" />} iconPosition="right">
                                Download
                            </Button>
                            <Button icon={<Check className="h-4 w-4" />} iconOnly aria-label="Confirm">
                            </Button>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Icon on the left
<Button
  icon={<Mail className="h-4 w-4" />}
  iconPosition="left"
>
  Login with Email
</Button>

// Icon on the right
<Button
  icon={<Download className="h-4 w-4" />}
  iconPosition="right"
>
  Download
</Button>

// Icon-only button
<Button
  icon={<Check className="h-4 w-4" />}
  iconOnly
  aria-label="Confirm"
/>

// You can also use children for icons
<Button>
  <Mail className="mr-2 h-4 w-4" /> Login with Email
</Button>`}
                        />
                    </DocSection>

                    <DocSection id="loading-state" title="Loading State" size="3xl">
                        <DocParagraph>
                            Buttons can display a loading state to indicate an ongoing operation. You can customize the loading spinner and text.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Button loading loadingText="Please wait">
                                Submit
                            </Button>
                            <Button
                                variant="secondary"
                                loading
                                loadingSpinner="dots"
                                loadingPosition="right"
                            >
                                Processing
                            </Button>
                            <Button
                                variant="cedar"
                                loading
                                loadingSpinner="pulse"
                                hideTextWhenLoading
                            >
                                Save
                            </Button>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Basic loading button
<Button loading loadingText="Please wait">
  Submit
</Button>

// Custom loading spinner with right position
<Button
  variant="secondary"
  loading
  loadingSpinner="dots"
  loadingPosition="right"
>
  Processing
</Button>

// Hide text when loading
<Button
  variant="cedar"
  loading
  loadingSpinner="pulse"
  hideTextWhenLoading
>
  Save
</Button>

// Available loading spinner types:
// - "dots" - Three dots bouncing
// - "circle" - Circular spinner (default)
// - "pulse" - Pulsing circle
// - "bars" - Loading bars
// - "ellipsis" - Text ellipsis (...)`}
                        />
                    </DocSection>

                    <DocSection id="hover-effects" title="Hover Effects" size="3xl">
                        <DocParagraph>
                            Enhance user interaction with various hover effects. Lebify UI provides a range of built-in hover animations.
                        </DocParagraph>

                        <div className="flex flex-wrap gap-4 my-6">
                            <Button hoverEffect="expand">Expand</Button>
                            <Button variant="cedar" hoverEffect="3d-rotate">3D Rotate</Button>
                            <Button variant="sea" hoverEffect="sheen">Sheen</Button>
                            <Button variant="stone" hoverEffect="bounce">Bounce</Button>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Using hoverEffect prop
<Button hoverEffect="expand">Expand</Button>
<Button variant="cedar" hoverEffect="3d-rotate">3D Rotate</Button>
<Button variant="sea" hoverEffect="sheen">Sheen</Button>
<Button variant="stone" hoverEffect="bounce">Bounce</Button>

// Available hover effects:
// - "default" - Standard hover effect
// - "none" - No hover effect
// - "3d-rotate" - 3D rotation effect
// - "magnetic" - Follows cursor movement
// - "sheen" - Glossy shine effect
// - "neon" - Glowing neon effect
// - "reveal" - Reveals background
// - "expand" - Expands on hover
// - "liquid" - Liquid animation
// - "slice" - Slice animation
// - "bounce" - Bounces on hover
// - "glitch" - Glitch effect
// - "border-spin" - Spinning border`}
                        />
                    </DocSection>

                    <DocSection id="api-reference" title="API Reference" size="3xl">
                        <DocParagraph>
                            The Button component accepts the following props:
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
                                            <td className="p-3 font-medium text-primary">variant</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">ButtonVariant</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"primary"</td>
                                            <td className="p-3">Button style variant from Lebanese-inspired collections</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">buttonType</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">"filled" | "outlined" | "ghost"</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"filled"</td>
                                            <td className="p-3">Button appearance type</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">size</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">"small" | "medium" | "large"</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"medium"</td>
                                            <td className="p-3">Button size</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">disabled</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">boolean</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">false</td>
                                            <td className="p-3">Disables the button</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">loading</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">boolean</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">false</td>
                                            <td className="p-3">Shows loading state</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">loadingText</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">null</td>
                                            <td className="p-3">Text to show during loading</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">loadingSpinner</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">LoadingSpinner</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"circle"</td>
                                            <td className="p-3">Type of loading spinner</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">loadingPosition</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">"left" | "right"</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"left"</td>
                                            <td className="p-3">Position of the loading spinner</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">hideTextWhenLoading</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">boolean</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">false</td>
                                            <td className="p-3">Hide button text when loading</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">hoverEffect</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">HoverEffect</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"default"</td>
                                            <td className="p-3">Special hover animation effect</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">icon</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">ReactNode</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">null</td>
                                            <td className="p-3">Icon element to display</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">iconPosition</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">"left" | "right"</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"left"</td>
                                            <td className="p-3">Position of the icon</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">iconOnly</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">boolean</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">false</td>
                                            <td className="p-3">Shows only the icon</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">iconSpacing</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"0.5rem"</td>
                                            <td className="p-3">Space between icon and text</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">borderRadius</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">BorderRadius</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"medium"</td>
                                            <td className="p-3">Button corner radius</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <DocParagraph>
                            The Button component also exposes several constants for use in your application:
                        </DocParagraph>

                        <CodeBlock
                            language="typescript"
                            code={`// Access button constants
import { Button } from 'lebify-ui';

// Available variants grouped by collection
console.log(Button.VARIANTS.BASIC);       // ['primary', 'secondary', 'tertiary', 'basic']
console.log(Button.VARIANTS.CEDAR);       // ['cedar', 'cedar-light', 'cedar-dark']
console.log(Button.VARIANTS.MEDITERRANEAN); // ['sea', 'coast', 'azure']
console.log(Button.VARIANTS.MOUNTAIN);    // ['stone', 'earth', 'terracotta']
console.log(Button.VARIANTS.BEIRUT);      // ['urban', 'concrete', 'steel']
console.log(Button.VARIANTS.CULINARY);    // ['olive', 'saffron', 'grape']
console.log(Button.VARIANTS.FESTIVAL);    // ['festive', 'celebration', 'heritage']
console.log(Button.VARIANTS.CRAFT);       // ['copper', 'silver', 'ceramic']
console.log(Button.VARIANTS.MODERN);      // ['tech', 'digital', 'startup']

// Button types
console.log(Button.TYPES.FILLED);         // 'filled'
console.log(Button.TYPES.OUTLINED);       // 'outlined'
console.log(Button.TYPES.GHOST);          // 'ghost'

// Hover effects
console.log(Button.HOVER_EFFECTS.DEFAULT);      // 'default'
console.log(Button.HOVER_EFFECTS.THREE_D_ROTATE); // '3d-rotate'
console.log(Button.HOVER_EFFECTS.MAGNETIC);     // 'magnetic'
// ... and more

// Icon positions
console.log(Button.ICON_POSITIONS.LEFT);  // 'left'
console.log(Button.ICON_POSITIONS.RIGHT); // 'right'

// Border radius options
console.log(Button.BORDER_RADIUS.NONE);    // 'none'
console.log(Button.BORDER_RADIUS.SMALL);   // 'small'
console.log(Button.BORDER_RADIUS.MEDIUM);  // 'medium'
console.log(Button.BORDER_RADIUS.LARGE);   // 'large'
console.log(Button.BORDER_RADIUS.PILL);    // 'pill'
console.log(Button.BORDER_RADIUS.ROUNDED); // 'rounded'

// Loading spinner types
console.log(Button.LOADING_SPINNER.DOTS);     // 'dots'
console.log(Button.LOADING_SPINNER.CIRCLE);   // 'circle'
console.log(Button.LOADING_SPINNER.PULSE);    // 'pulse'
console.log(Button.LOADING_SPINNER.BARS);     // 'bars'
console.log(Button.LOADING_SPINNER.ELLIPSIS); // 'ellipsis'`}
                        />
                    </DocSection>
                </div>
            </motion.div>
        </DocsLayout>
    );
}
