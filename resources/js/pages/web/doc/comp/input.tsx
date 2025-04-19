import { Head } from '@inertiajs/react';
import { DocsLayout } from '@/layouts/docs-layout';
import { CodeBlock } from '@/components/codeBlock/code-block';
import { DocSection, DocParagraph } from '@/components/web/docBuilder';
import { motion } from 'framer-motion';
import { Input } from 'lebify-ui';
import { Mail, Lock, Search, Eye, EyeOff, User } from 'lucide-react';
import { useState } from 'react';

export default function InputDoc() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    return (
        <DocsLayout tocItems={[
            { title: "Introduction", url: "#introduction", level: 1 },
            { title: "Basic Variants", url: "#basic-variants", level: 1 },
            { title: "Lebanese Collections", url: "#lebanese-collections", level: 1 },
            { title: "Additional Variants", url: "#additional-variants", level: 1 },
            { title: "Input Types", url: "#input-types", level: 1 },
            { title: "Sizes", url: "#sizes", level: 1 },
            { title: "With Icons", url: "#with-icons", level: 1 },
            { title: "States", url: "#states", level: 1 },
            { title: "API Reference", url: "#api-reference", level: 1 },
        ]}>
            <Head title="Input - Lebify UI" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12 max-w-3xl"
            >
                <div className="space-y-4">
                    <h1 id="introduction" className="scroll-m-20 text-5xl pb-3 font-bold tracking-tight main-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Input
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A versatile input component with Lebanese-inspired variants, multiple styles, and interactive features.
                    </p>
                </div>

                <div className="space-y-10">
                    <DocSection id="basic-variants" title="Basic Variants" size="3xl">
                        <DocParagraph>
                            Lebify UI provides a set of basic input variants to cover common use cases.
                        </DocParagraph>

                        <div className="flex flex-col gap-4 my-6">
                            <Input variant="primary" label="Primary Input" placeholder="Enter text here" />
                            <Input variant="secondary" label="Secondary Input" placeholder="Enter text here" />
                            <Input variant="tertiary" label="Tertiary Input" placeholder="Enter text here" />
                            <Input variant="basic" label="Basic Input" placeholder="Enter text here" />
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`import { Input } from 'lebify-ui';

// Basic variants
<Input variant="primary" label="Primary Input" placeholder="Enter text here" />
<Input variant="secondary" label="Secondary Input" placeholder="Enter text here" />
<Input variant="tertiary" label="Tertiary Input" placeholder="Enter text here" />
<Input variant="basic" label="Basic Input" placeholder="Enter text here" />`}
                        />
                    </DocSection>

                    <DocSection id="lebanese-collections" title="Lebanese-Inspired Collections" size="3xl">
                        <DocParagraph>
                            Lebify UI features unique input collections inspired by Lebanese culture, landscapes, and heritage.
                        </DocParagraph>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-medium mb-3">Cedar Collection</h3>
                                <div className="flex flex-col gap-4 mb-4">
                                    <Input variant="cedar" label="Cedar Input" placeholder="Enter text here" />
                                    <Input variant="cedar-light" label="Cedar Light Input" placeholder="Enter text here" />
                                    <Input variant="cedar-dark" label="Cedar Dark Input" placeholder="Enter text here" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Mediterranean Collection</h3>
                                <div className="flex flex-col gap-4 mb-4">
                                    <Input variant="sea" label="Sea Input" placeholder="Enter text here" />
                                    <Input variant="coast" label="Coast Input" placeholder="Enter text here" />
                                    <Input variant="azure" label="Azure Input" placeholder="Enter text here" />
                                </div>
                            </div>
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`// Cedar Collection
<Input variant="cedar" label="Cedar Input" placeholder="Enter text here" />
<Input variant="cedar-light" label="Cedar Light Input" placeholder="Enter text here" />
<Input variant="cedar-dark" label="Cedar Dark Input" placeholder="Enter text here" />

// Mediterranean Collection
<Input variant="sea" label="Sea Input" placeholder="Enter text here" />
<Input variant="coast" label="Coast Input" placeholder="Enter text here" />
<Input variant="azure" label="Azure Input" placeholder="Enter text here" />

// Additional Collections Available
// Mountain Collection, Beirut Collection, Culinary Collection, etc.`}
                        />
                    </DocSection>

                    <DocSection id="additional-variants" title="Additional Variants" size="3xl">
                        <DocParagraph>
                            Lebify UI offers a range of stylistic variants to match different design aesthetics.
                        </DocParagraph>

                        <div className="flex flex-col gap-4 my-6">
                            <Input
                                label="Glass Input"
                                placeholder="Glassmorphism effect"
                                variant="glass"
                            />
                            <Input
                                label="Neomorphic Input"
                                placeholder="Soft UI effect"
                                variant="neomorphic"
                            />
                            <Input
                                label="Gradient Input"
                                placeholder="Gradient effect"
                                variant="gradient"
                            />
                            <Input
                                label="Minimal Input"
                                placeholder="Clean minimal design"
                                variant="minimal"
                            />
                            <Input
                                label="Dark Input"
                                placeholder="Dark mode design"
                                variant="dark"
                            />
                            <Input
                                label="Pill Input"
                                placeholder="Rounded pill design"
                                variant="pill"
                            />
                            <Input
                                label="Flat Input"
                                placeholder="Modern flat design"
                                variant="flat"
                            />
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`import { Input } from 'lebify-ui';

// Stylistic variants
<Input
  label="Glass Input"
  placeholder="Glassmorphism effect"
  variant="glass"
/>

<Input
  label="Neomorphic Input"
  placeholder="Soft UI effect"
  variant="neomorphic"
/>

<Input
  label="Gradient Input"
  placeholder="Gradient effect"
  variant="gradient"
/>

<Input
  label="Minimal Input"
  placeholder="Clean minimal design"
  variant="minimal"
/>

<Input
  label="Dark Input"
  placeholder="Dark mode design"
  variant="dark"
/>

<Input
  label="Pill Input"
  placeholder="Rounded pill design"
  variant="pill"
/>

<Input
  label="Flat Input"
  placeholder="Modern flat design"
  variant="flat"
/>`}
                        />
                    </DocSection>

                    <DocSection id="input-types" title="Input Types" size="3xl">
                        <DocParagraph>
                            The Input component supports various input types to handle different data formats.
                        </DocParagraph>

                        <div className="flex flex-col gap-4 my-6">
                            <Input type="text" label="Text Input" placeholder="Enter text" />
                            <Input
                                type="password"
                                label="Password Input"
                                placeholder="Enter password"
                                rightIcon={
                                    <button onClick={() => setPasswordVisible(!passwordVisible)} type="button">
                                        {passwordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                }
                            />
                            <Input type="email" label="Email Input" placeholder="example@email.com" />
                            <Input type="number" label="Number Input" placeholder="Enter a number" min={0} max={100} />
                            <Input type="date" label="Date Input" />
                            <Input type="time" label="Time Input" />
                            <Input type="textarea" label="Textarea" placeholder="Enter multiple lines of text" rows={3} />
                            <Input
                                type="select"
                                label="Select Input"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' }
                                ]}
                            />
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`import { Input } from 'lebify-ui';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

function InputTypes() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <>
            <Input type="text" label="Text Input" placeholder="Enter text" />

            <Input
                type="password"
                label="Password Input"
                placeholder="Enter password"
                rightIcon={
                    <button onClick={() => setPasswordVisible(!passwordVisible)} type="button">
                        {passwordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                }
            />

            <Input type="email" label="Email Input" placeholder="example@email.com" />
            <Input type="number" label="Number Input" placeholder="Enter a number" min={0} max={100} />
            <Input type="date" label="Date Input" />
            <Input type="time" label="Time Input" />
            <Input type="textarea" label="Textarea" placeholder="Enter multiple lines of text" rows={3} />

            <Input
                type="select"
                label="Select Input"
                options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' }
                ]}
            />
        </>
    );
}`}
                        />
                    </DocSection>

                    <DocSection id="sizes" title="Sizes" size="3xl">
                        <DocParagraph>
                            The Input component comes in four different sizes to fit various UI requirements.
                        </DocParagraph>

                        <div className="flex flex-col gap-4 my-6">
                            <Input
                                label="Small Input"
                                placeholder="Small size"
                                size="small"
                                variant="basic"
                            />
                            <Input
                                label="Compact Input"
                                placeholder="Compact size"
                                size="compact"
                                variant="basic"
                            />
                            <Input
                                label="Medium Input"
                                placeholder="Medium size (default)"
                                size="medium"
                            />
                            <Input
                                label="Large Input"
                                placeholder="Large size"
                                size="large"
                            />
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`import { Input } from 'lebify-ui';

// Size variants
<Input
  label="Small Input"
  placeholder="Small size"
  size="small"
  variant="basic"
/>

<Input
  label="Compact Input"
  placeholder="Compact size"
  size="compact"
  variant="basic"
/>

<Input
  label="Medium Input"
  placeholder="Medium size (default)"
  size="medium"
/>

<Input
  label="Large Input"
  placeholder="Large size"
  size="large"
/>`}
                        />
                    </DocSection>

                    <DocSection id="with-icons" title="With Icons" size="3xl">
                        <DocParagraph>
                            Inputs can include icons on either side to provide visual cues or additional functionality.
                        </DocParagraph>

                        <div className="flex flex-col gap-4 my-6">
                            <Input
                                label="Email Input"
                                placeholder="Enter your email"
                                type="email"
                                leftIcon={<Mail className="h-4 w-4" />}
                            />
                            <Input
                                label="Password Input"
                                placeholder="Enter your password"
                                type="password"
                                leftIcon={<Lock className="h-4 w-4" />}
                                rightIcon={
                                    <button onClick={() => setPasswordVisible(!passwordVisible)} type="button">
                                        {passwordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                }
                            />
                            <Input
                                label="Search Input"
                                placeholder="Search..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                leftIcon={<Search className="h-4 w-4" />}
                                rightIcon={
                                    searchValue ? (
                                        <button onClick={() => setSearchValue('')} type="button" className="text-muted-foreground hover:text-foreground">
                                            ×
                                        </button>
                                    ) : null
                                }
                            />
                            <Input
                                label="Username Input"
                                placeholder="Enter username"
                                leftIcon={<User className="h-4 w-4" />}
                            />
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`import { Input } from 'lebify-ui';
import { Mail, Lock, Search, Eye, EyeOff, User } from 'lucide-react';
import { useState } from 'react';

function InputsWithIcons() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    return (
        <>
            <Input
                label="Email Input"
                placeholder="Enter your email"
                type="email"
                leftIcon={<Mail className="h-4 w-4" />}
            />

            <Input
                label="Password Input"
                placeholder="Enter your password"
                type="password"
                leftIcon={<Lock className="h-4 w-4" />}
                rightIcon={
                    <button onClick={() => setPasswordVisible(!passwordVisible)} type="button">
                        {passwordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                }
            />

            <Input
                label="Search Input"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                leftIcon={<Search className="h-4 w-4" />}
                rightIcon={
                    searchValue ? (
                        <button onClick={() => setSearchValue('')} type="button" className="text-muted-foreground hover:text-foreground">
                            ×
                        </button>
                    ) : null
                }
            />

            <Input
                label="Username Input"
                placeholder="Enter username"
                leftIcon={<User className="h-4 w-4" />}
            />
        </>
    );
}`}
                        />
                    </DocSection>

                    <DocSection id="states" title="States" size="3xl">
                        <DocParagraph>
                            Inputs can be displayed in various states to communicate different conditions to users.
                        </DocParagraph>

                        <div className="flex flex-col gap-4 my-6">
                            <Input
                                label="Disabled Input"
                                placeholder="This input is disabled"
                                disabled
                            />
                            <Input
                                label="Read-only Input"
                                value="This input is read-only"
                                readOnly
                            />
                            <Input
                                label="Error State"
                                placeholder="Invalid input"
                                error
                                helperText="This field contains an error"
                            />
                            <Input
                                label="Success State"
                                placeholder="Valid input"
                                success
                                helperText="This field is valid"
                            />
                            <Input
                                label="Required Field"
                                placeholder="This field is required"
                                required
                            />
                            <Input
                                label="With Helper Text"
                                placeholder="Enter text here"
                                helperText="This is some helpful information about the field"
                            />
                            <Input
                                label="With Character Count"
                                placeholder="Limited to 50 characters"
                                maxLength={50}
                                showCharacterCount
                            />
                        </div>

                        <CodeBlock
                            language="typescript"
                            code={`import { Input } from 'lebify-ui';

// Input states
<Input
    label="Disabled Input"
    placeholder="This input is disabled"
    disabled
/>

<Input
    label="Read-only Input"
    value="This input is read-only"
    readOnly
/>

<Input
    label="Error State"
    placeholder="Invalid input"
    error
    helperText="This field contains an error"
/>

<Input
    label="Success State"
    placeholder="Valid input"
    success
    helperText="This field is valid"
/>

<Input
    label="Required Field"
    placeholder="This field is required"
    required
/>

<Input
    label="With Helper Text"
    placeholder="Enter text here"
    helperText="This is some helpful information about the field"
/>

<Input
    label="With Character Count"
    placeholder="Limited to 50 characters"
    maxLength={50}
    showCharacterCount
/>`}
                        />
                    </DocSection>

                    <DocSection id="api-reference" title="API Reference" size="3xl">
                        <DocParagraph>
                            The Input component accepts the following props:
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
                                            <td className="p-3 font-medium text-primary">id</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Input id attribute</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">name</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Input name attribute</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">type</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">InputType</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"text"</td>
                                            <td className="p-3">Input type (text, password, email, etc.)</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">value</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">any</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Input value (controlled component)</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">placeholder</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">string</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Input placeholder text</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">label</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">ReactNode</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Input label</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">helperText</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">ReactNode</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Helper text displayed below the input</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">variant</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">InputVariant</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"primary"</td>
                                            <td className="p-3">Input visual style variant</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">size</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">"small" | "compact" | "medium" | "large"</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">"medium"</td>
                                            <td className="p-3">Input size</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">leftIcon</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">ReactNode</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Icon displayed at the left side of the input</td>
                                        </tr>
                                        <tr className="bg-card hover:bg-muted/50 transition-colors">
                                            <td className="p-3 font-medium text-primary">rightIcon</td>
                                            <td className="p-3 font-mono text-xs">
                                                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">ReactNode</span>
                                            </td>
                                            <td className="p-3 font-mono text-xs">-</td>
                                            <td className="p-3">Icon displayed at the right side of the input</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <DocParagraph>
                            The Input component also exposes several constants for use in your application:
                        </DocParagraph>

                        <CodeBlock
                            language="typescript"
                            code={`// Access input constants
import { Input } from 'lebify-ui';

// Available variants grouped by collection
console.log(Input.VARIANTS.BASIC);       // ['primary', 'secondary', 'tertiary', 'basic']
console.log(Input.VARIANTS.CEDAR);       // ['cedar', 'cedar-light', 'cedar-dark']
console.log(Input.VARIANTS.MEDITERRANEAN); // ['sea', 'coast', 'azure']
// ... and more collections

// Input types
console.log(Input.TYPES.TEXT);           // 'text'
console.log(Input.TYPES.PASSWORD);       // 'password'
console.log(Input.TYPES.EMAIL);          // 'email'
console.log(Input.TYPES.NUMBER);         // 'number'
// ... and more types

// Border radius options
console.log(Input.BORDER_RADIUS.NONE);   // 'none'
console.log(Input.BORDER_RADIUS.SMALL);  // 'small'
console.log(Input.BORDER_RADIUS.MEDIUM); // 'medium'
console.log(Input.BORDER_RADIUS.LARGE);  // 'large'
console.log(Input.BORDER_RADIUS.PILL);   // 'pill'`}
                        />
                    </DocSection>
                </div>
            </motion.div>
        </DocsLayout>
    );
}
