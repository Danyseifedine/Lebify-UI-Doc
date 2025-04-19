import { DocsLayout } from '@/layouts/docs-layout';
import { Head } from '@inertiajs/react';
import { Pattern } from 'lebify-ui';
import { CodeBlock } from '@/components/codeBlock/code-block';
import { DocSection, DocParagraph } from '@/components/web/docBuilder';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PatternDoc() {
    const [selectedColor, setSelectedColor] = useState({
        background: "#e5e5f7",
        foreground: "#444cf7"
    });

    return (
        <DocsLayout tocItems={[
            { title: "Introduction", url: "#introduction", level: 1 },
            { title: "Pattern Variants", url: "#pattern-variants", level: 1 },
            { title: "Sizes", url: "#sizes", level: 1 },
            { title: "Border Radius", url: "#border-radius", level: 1 },
            { title: "Animations", url: "#animations", level: 1 },
            { title: "Customization", url: "#customization", level: 1 },
            { title: "API Reference", url: "#api-reference", level: 1 },
        ]}>
            <Head title="Pattern - Lebify UI" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12 max-w-3xl"
            >
                <div className="space-y-4">
                    <h1 id="introduction" className="scroll-m-20 text-5xl pb-3 font-bold tracking-tight main-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Pattern
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Beautiful decorative patterns with customizable styles, animations, and colors.
                    </p>
                </div>

                <div className="space-y-10">
                    <DocSection id="pattern-variants" title="Pattern Variants" size="3xl">
                        <DocParagraph>
                            The Pattern component comes with several built-in variants to add visual interest to your UI.
                        </DocParagraph>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="dots" />
                                </div>
                                <p className="text-sm font-medium text-center">Dots</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="waves" />
                                </div>
                                <p className="text-sm font-medium text-center">Waves</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="stripes" />
                                </div>
                                <p className="text-sm font-medium text-center">Stripes</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="grid" />
                                </div>
                                <p className="text-sm font-medium text-center">Grid</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="stars" />
                                </div>
                                <p className="text-sm font-medium text-center">Stars</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="sunburst" />
                                </div>
                                <p className="text-sm font-medium text-center">Sunburst</p>
                            </div>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`import { Pattern } from 'lebify-ui';

// Basic usage with different variants
<Pattern variant="dots" />
<Pattern variant="waves" />
<Pattern variant="stripes" />
<Pattern variant="grid" />
<Pattern variant="stars" />
<Pattern variant="sunburst" />`}
                        />
                    </DocSection>

                    <DocSection id="sizes" title="Sizes" size="3xl">
                        <DocParagraph>
                            Patterns can be rendered in different sizes to fit your design needs.
                        </DocParagraph>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="dots" size="small" />
                                </div>
                                <p className="text-sm font-medium text-center">Small</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="dots" size="medium" />
                                </div>
                                <p className="text-sm font-medium text-center">Medium (default)</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="dots" size="large" />
                                </div>
                                <p className="text-sm font-medium text-center">Large</p>
                            </div>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Different pattern sizes
<Pattern variant="dots" size="small" />
<Pattern variant="dots" size="medium" /> {/* Default */}
<Pattern variant="dots" size="large" />`}
                        />
                    </DocSection>

                    <DocSection id="border-radius" title="Border Radius" size="3xl">
                        <DocParagraph>
                            Customize the border radius of your patterns to match your UI design.
                        </DocParagraph>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 my-6">
                            <div className="space-y-2">
                                <div className="h-40 overflow-hidden">
                                    <Pattern variant="waves" borderRadius="none" />
                                </div>
                                <p className="text-sm font-medium text-center">None</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 overflow-hidden">
                                    <Pattern variant="waves" borderRadius="small" />
                                </div>
                                <p className="text-sm font-medium text-center">Small</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 overflow-hidden">
                                    <Pattern variant="waves" borderRadius="medium" />
                                </div>
                                <p className="text-sm font-medium text-center">Medium</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 overflow-hidden">
                                    <Pattern variant="waves" borderRadius="large" />
                                </div>
                                <p className="text-sm font-medium text-center">Large</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 overflow-hidden">
                                    <Pattern variant="waves" borderRadius="full" />
                                </div>
                                <p className="text-sm font-medium text-center">Full</p>
                            </div>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Different border radius options
<Pattern variant="waves" borderRadius="none" />
<Pattern variant="waves" borderRadius="small" />
<Pattern variant="waves" borderRadius="medium" />
<Pattern variant="waves" borderRadius="large" />
<Pattern variant="waves" borderRadius="full" />`}
                        />
                    </DocSection>

                    <DocSection id="animations" title="Animations" size="3xl">
                        <DocParagraph>
                            Add life to your patterns with built-in animations.
                        </DocParagraph>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="dots" animation="pulse" />
                                </div>
                                <p className="text-sm font-medium text-center">Pulse</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="grid" animation="spin" />
                                </div>
                                <p className="text-sm font-medium text-center">Spin</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="stars" animation="bounce" />
                                </div>
                                <p className="text-sm font-medium text-center">Bounce</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="stripes" animation="fade" />
                                </div>
                                <p className="text-sm font-medium text-center">Fade</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-40 rounded-lg overflow-hidden">
                                    <Pattern variant="waves" animation="none" />
                                </div>
                                <p className="text-sm font-medium text-center">None (default)</p>
                            </div>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Animated patterns
<Pattern variant="dots" animation="pulse" />
<Pattern variant="grid" animation="spin" />
<Pattern variant="stars" animation="bounce" />
<Pattern variant="stripes" animation="fade" />
<Pattern variant="waves" animation="none" /> {/* Default */}

// Control animation duration (in seconds)
<Pattern variant="dots" animation="pulse" animationDuration={3} />`}
                        />
                    </DocSection>

                    <DocSection id="customization" title="Customization" size="3xl">
                        <DocParagraph>
                            Customize your patterns with different colors, opacity, and blur effects.
                        </DocParagraph>

                        <div className="space-y-6 my-6">
                            <div>
                                <h3 className="text-lg font-medium mb-3">Custom Colors</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <div className="h-40 rounded-lg overflow-hidden">
                                            <Pattern
                                                variant="dots"
                                                color={{ background: "#1a1a2e", foreground: "#e94560" }}
                                            />
                                        </div>
                                        <p className="text-sm font-medium text-center">Dark with Red</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-40 rounded-lg overflow-hidden">
                                            <Pattern
                                                variant="waves"
                                                color={{ background: "#f0f8ff", foreground: "#0077b6" }}
                                            />
                                        </div>
                                        <p className="text-sm font-medium text-center">Light with Blue</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Opacity & Blur</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <div className="h-40 rounded-lg overflow-hidden">
                                            <Pattern variant="stripes" opacity={0.3} />
                                        </div>
                                        <p className="text-sm font-medium text-center">Low Opacity (0.3)</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-40 rounded-lg overflow-hidden">
                                            <Pattern variant="grid" blur={5} />
                                        </div>
                                        <p className="text-sm font-medium text-center">Blur Effect (5px)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Custom colors
<Pattern
  variant="dots"
  color={{ background: "#1a1a2e", foreground: "#e94560" }}
/>

// Opacity control (0-1)
<Pattern variant="stripes" opacity={0.3} />

// Blur effect (in pixels)
<Pattern variant="grid" blur={5} />

// Combining multiple customizations
<Pattern
  variant="waves"
  color={{ background: "#f0f8ff", foreground: "#0077b6" }}
  opacity={0.7}
  blur={2}
  animation="pulse"
  animationDuration={4}
  borderRadius="large"
/>`}
                        />
                    </DocSection>

                    <DocSection id="api-reference" title="API Reference" size="3xl">
                        <DocParagraph>
                            The Pattern component accepts the following props:
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
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">PatternVariant</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"dots"</td>
                                            <td className="p-3">Pattern style variant</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">color</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">PatternColor</span>
                                            </td>
                                            {/* <td className="p-3 font-mono text-xs">{background: "#e5e5f7", foreground: "#444cf7" }</td> */}
                                            <td className="p-3">Background and foreground colors</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">size</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">"small" | "medium" | "large"</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"medium"</td>
                                            <td className="p-3">Size of the pattern</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">borderRadius</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">BorderRadiusType</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"none"</td>
                                            <td className="p-3">Border radius of the pattern</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">opacity</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">number</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">1</td>
                                            <td className="p-3">Pattern opacity (0-1)</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">animation</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">AnimationType</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"none"</td>
                                            <td className="p-3">Animation type</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">animationDuration</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">number</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">2</td>
                                            <td className="p-3">Animation duration in seconds</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">blur</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">number</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">0</td>
                                            <td className="p-3">Pattern blur amount in pixels</td>
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
                            The Pattern component also exposes several constants for use in your application:
                        </DocParagraph>

                        <CodeBlock
                            language="typescript"
                            code={`// Access pattern constants
import { Pattern } from 'lebify-ui';

// Available variants
console.log(Pattern.VARIANTS.DOTS);       // 'dots'
console.log(Pattern.VARIANTS.WAVES);      // 'waves'
console.log(Pattern.VARIANTS.STRIPES);    // 'stripes'
console.log(Pattern.VARIANTS.GRID);       // 'grid'
console.log(Pattern.VARIANTS.STARS);      // 'stars'
console.log(Pattern.VARIANTS.SUNBURST);   // 'sunburst'

// Available sizes
console.log(Pattern.SIZES.SMALL);         // 'small'
console.log(Pattern.SIZES.MEDIUM);        // 'medium'
console.log(Pattern.SIZES.LARGE);         // 'large'

// Border radius options
console.log(Pattern.BORDER_RADIUS.NONE);  // 'none'
console.log(Pattern.BORDER_RADIUS.SMALL); // 'small'
console.log(Pattern.BORDER_RADIUS.MEDIUM); // 'medium'
console.log(Pattern.BORDER_RADIUS.LARGE); // 'large'
console.log(Pattern.BORDER_RADIUS.FULL);  // 'full'

// Animation types
console.log(Pattern.ANIMATIONS.NONE);     // 'none'
console.log(Pattern.ANIMATIONS.PULSE);    // 'pulse'
console.log(Pattern.ANIMATIONS.SPIN);     // 'spin'
console.log(Pattern.ANIMATIONS.BOUNCE);   // 'bounce'
console.log(Pattern.ANIMATIONS.FADE);     // 'fade'`}
                        />
                    </DocSection>
                </div>
            </motion.div>
        </DocsLayout>
    );
}
