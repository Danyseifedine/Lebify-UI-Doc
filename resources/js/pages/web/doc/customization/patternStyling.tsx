import { Head } from '@inertiajs/react';
import { DocsLayout } from '@/layouts/docs-layout';
import { CodeBlock } from '@/components/codeBlock/code-block';
import { DocSection } from '@/components/web/docBuilder';
import { useState, useRef, useEffect } from 'react';
import { Pattern } from 'lebify-ui';
import { Code, Eye, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HexColorPicker } from 'react-colorful';

// Define all available options
const PATTERN_VARIANTS = ['dots', 'waves', 'stripes', 'sunburst', 'grid', 'stars'];
const SIZES = ['small', 'medium', 'large'];
const BORDER_RADIUS = ['none', 'small', 'medium', 'large', 'full'];
const ANIMATIONS = ['none', 'pulse', 'spin', 'bounce', 'fade'];

interface PatternConfig {
    variant: string;
    size: string;
    borderRadius: string;
    opacity: number;
    animation: string;
    animationDuration: number;
    blur: number;
    backgroundColor: string;
    foregroundColor: string;
}

interface OptionSelectorProps {
    label: string;
    options?: string[];
    value: string | number;
    onChange: (value: any) => void;
    type?: 'select' | 'checkbox' | 'text' | 'number' | 'range' | 'color';
    description?: string;
    min?: number;
    max?: number;
    step?: number;
}

export default function PatternStyling() {
    // State for pattern configuration
    const [config, setConfig] = useState<PatternConfig>({
        variant: 'dots',
        size: 'medium',
        borderRadius: 'none',
        opacity: 1,
        animation: 'none',
        animationDuration: 2,
        blur: 0,
        backgroundColor: '#e5e5f7',
        foregroundColor: '#444cf7'
    });

    // State to toggle between preview and code view
    const [showCode, setShowCode] = useState(false);

    // State for color pickers
    const [showBackgroundPicker, setShowBackgroundPicker] = useState(false);
    const [showForegroundPicker, setShowForegroundPicker] = useState(false);

    // Refs for color inputs to maintain focus
    const backgroundInputRef = useRef<HTMLInputElement>(null);
    const foregroundInputRef = useRef<HTMLInputElement>(null);

    // Update configuration
    const updateConfig = <K extends keyof PatternConfig>(key: K, value: PatternConfig[K]) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    // Generate code for the current configuration
    const generateCode = () => {
        const props = [];

        if (config.variant !== 'dots') props.push(`variant="${config.variant}"`);
        if (config.size !== 'medium') props.push(`size="${config.size}"`);
        if (config.borderRadius !== 'none') props.push(`borderRadius="${config.borderRadius}"`);
        if (config.opacity !== 1) props.push(`opacity={${config.opacity}}`);
        if (config.animation !== 'none') props.push(`animation="${config.animation}"`);
        if (config.animationDuration !== 2) props.push(`animationDuration={${config.animationDuration}}`);
        if (config.blur !== 0) props.push(`blur={${config.blur}}`);

        // Always include color since it's a complex object
        props.push(`color={{
  background: "${config.backgroundColor}",
  foreground: "${config.foregroundColor}"
}}`);

        const propsString = props.length > 0 ? '\n  ' + props.join('\n  ') : '';

        return `import { Pattern } from 'lebify-ui';

// Your custom pattern
<Pattern${propsString}
/>`;
    };

    // Render the pattern with current configuration
    const renderPattern = () => {
        return (
            <Pattern
                variant={config.variant as any}
                size={config.size as any}
                borderRadius={config.borderRadius as any}
                opacity={config.opacity}
                animation={config.animation as any}
                animationDuration={config.animationDuration}
                blur={config.blur}
                color={{
                    background: config.backgroundColor,
                    foreground: config.foregroundColor
                }}
                className="w-full h-full"
            />
        );
    };

    // Handle clicks outside color pickers to close them
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (showBackgroundPicker &&
                backgroundInputRef.current &&
                !backgroundInputRef.current.contains(event.target as Node)) {
                setShowBackgroundPicker(false);
            }

            if (showForegroundPicker &&
                foregroundInputRef.current &&
                !foregroundInputRef.current.contains(event.target as Node)) {
                setShowForegroundPicker(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showBackgroundPicker, showForegroundPicker]);

    // Option selector component
    const OptionSelector = ({ label, options, value, onChange, type = 'select', description, min, max, step }: OptionSelectorProps) => {
        return (
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">{label}</label>
                    {description && (
                        <span className="text-xs text-muted-foreground">{description}</span>
                    )}
                </div>

                {type === 'select' && options && (
                    <div className="relative">
                        <select
                            value={value as string}
                            onChange={(e) => onChange(e.target.value)}
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 pr-8"
                        >
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronDown className="h-4 w-4 opacity-50" />
                        </div>
                    </div>
                )}

                {type === 'checkbox' && (
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={value as boolean}
                            onChange={(e) => onChange(e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label className="text-sm">{label}</label>
                    </div>
                )}

                {type === 'text' && (
                    <input
                        type="text"
                        value={value as string}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                )}

                {type === 'number' && (
                    <input
                        type="number"
                        value={value as number}
                        onChange={(e) => onChange(parseFloat(e.target.value))}
                        min={min}
                        max={max}
                        step={step}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                )}

                {type === 'range' && (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs">{min}</span>
                            <span className="text-xs font-medium">{value}</span>
                            <span className="text-xs">{max}</span>
                        </div>
                        <input
                            type="range"
                            value={value as number}
                            onChange={(e) => onChange(parseFloat(e.target.value))}
                            min={min}
                            max={max}
                            step={step}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary"
                        />
                    </div>
                )}

                {type === 'color' && (
                    <div className="relative" ref={label === "Background Color" ? backgroundInputRef : foregroundInputRef}>
                        <div className="flex items-center space-x-2">
                            <div
                                className="w-8 h-8 rounded-md border border-input cursor-pointer"
                                style={{ backgroundColor: value as string }}
                                onClick={() => {
                                    if (label === "Background Color") {
                                        setShowBackgroundPicker(!showBackgroundPicker);
                                        setShowForegroundPicker(false);
                                    } else {
                                        setShowForegroundPicker(!showForegroundPicker);
                                        setShowBackgroundPicker(false);
                                    }
                                }}
                            />
                            <input
                                type="text"
                                value={value as string}
                                onChange={(e) => onChange(e.target.value)}
                                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                onFocus={() => {
                                    if (label === "Background Color") {
                                        setShowBackgroundPicker(true);
                                        setShowForegroundPicker(false);
                                    } else {
                                        setShowForegroundPicker(true);
                                        setShowBackgroundPicker(false);
                                    }
                                }}
                            />
                        </div>
                        {((label === "Background Color" && showBackgroundPicker) ||
                            (label === "Foreground Color" && showForegroundPicker)) && (
                                <div className="absolute z-10 mt-2">
                                    <HexColorPicker
                                        color={value as string}
                                        onChange={onChange}
                                    />
                                    <div className="mt-2 p-2 bg-background border border-input rounded-md shadow-lg">
                                        <div className="grid grid-cols-5 gap-1">
                                            {['#e5e5f7', '#444cf7', '#f7444c', '#44f74c', '#f744f7',
                                                '#f7f744', '#44f7f7', '#000000', '#ffffff', '#777777'].map((color) => (
                                                    <div
                                                        key={color}
                                                        className="w-6 h-6 rounded-md border border-input cursor-pointer"
                                                        style={{ backgroundColor: color }}
                                                        onClick={() => {
                                                            onChange(color);
                                                            if (label === "Background Color") {
                                                                setShowBackgroundPicker(false);
                                                            } else {
                                                                setShowForegroundPicker(false);
                                                            }
                                                        }}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <DocsLayout tocItems={[
            { title: "Pattern Customizer", url: "#pattern-customizer", level: 1 },
            { title: "Pattern Type", url: "#pattern-type", level: 2 },
            { title: "Appearance", url: "#appearance", level: 2 },
            { title: "Colors", url: "#colors", level: 2 },
            { title: "Animation", url: "#animation", level: 2 },
        ]}>
            <Head title="Pattern Styling - Lebify UI" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12 max-w-3xl"
            >
                <div className="space-y-4">
                    <h1 id="pattern-customizer" className="scroll-m-20 text-4xl font-bold tracking-tight">
                        Pattern Customizer
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Create beautiful decorative patterns with customizable styles, animations, and colors.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-card rounded-xl border border-border shadow-sm overflow-hidden"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
                                <h3 className="text-lg font-medium">Pattern Preview</h3>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setShowCode(false)}
                                        className={`p-2 rounded-md transition-colors ${!showCode ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                                        aria-label="Show preview"
                                    >
                                        <Eye className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => setShowCode(true)}
                                        className={`p-2 rounded-md transition-colors ${showCode ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                                        aria-label="Show code"
                                    >
                                        <Code className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 pt-12">
                                <AnimatePresence mode="wait">
                                    {showCode ? (
                                        <motion.div
                                            key="code"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <CodeBlock
                                                language="typescript"
                                                code={generateCode()}
                                            />
                                            <div className="mt-4 text-xs text-muted-foreground">
                                                <p>This code will create the exact pattern you see in the preview.</p>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="preview"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="h-[300px] w-full rounded-md overflow-hidden"
                                        >
                                            {renderPattern()}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <DocSection id="colors" title="Colors" size="2xl">
                                    <div className="p-6 bg-card/50 rounded-lg border border-border space-y-4">
                                        <OptionSelector
                                            label="Background Color"
                                            value={config.backgroundColor}
                                            onChange={(val) => updateConfig('backgroundColor', val)}
                                            type="color"
                                            description="Pattern background"
                                        />

                                        <OptionSelector
                                            label="Foreground Color"
                                            value={config.foregroundColor}
                                            onChange={(val) => updateConfig('foregroundColor', val)}
                                            type="color"
                                            description="Pattern elements"
                                        />

                                        <OptionSelector
                                            label="Opacity"
                                            value={config.opacity}
                                            onChange={(val) => updateConfig('opacity', val)}
                                            type="range"
                                            min={0}
                                            max={1}
                                            step={0.1}
                                            description="Transparency level"
                                        />

                                        <OptionSelector
                                            label="Blur"
                                            value={config.blur}
                                            onChange={(val) => updateConfig('blur', val)}
                                            type="range"
                                            min={0}
                                            max={20}
                                            step={1}
                                            description="Blur effect (px)"
                                        />
                                    </div>
                                </DocSection>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <DocSection id="animation" title="Animation" size="2xl">
                                    <div className="p-6 bg-card/50 rounded-lg border border-border space-y-4">
                                        <OptionSelector
                                            label="Animation Type"
                                            options={ANIMATIONS}
                                            value={config.animation}
                                            onChange={(val) => updateConfig('animation', val)}
                                            description="Movement style"
                                        />

                                        {config.animation !== 'none' && (
                                            <OptionSelector
                                                label="Animation Duration"
                                                value={config.animationDuration}
                                                onChange={(val) => updateConfig('animationDuration', val)}
                                                type="range"
                                                min={0.5}
                                                max={10}
                                                step={0.5}
                                                description="Speed in seconds"
                                            />
                                        )}
                                    </div>
                                </DocSection>
                            </motion.div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <DocSection id="pattern-type" title="Pattern Type" size="2xl">
                                <div className="p-6 bg-card/50 rounded-lg border border-border space-y-4">
                                    <OptionSelector
                                        label="Pattern Variant"
                                        options={PATTERN_VARIANTS}
                                        value={config.variant}
                                        onChange={(val) => updateConfig('variant', val)}
                                        description="Visual style"
                                    />
                                </div>
                            </DocSection>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <DocSection id="appearance" title="Appearance" size="2xl">
                                <div className="p-6 bg-card/50 rounded-lg border border-border space-y-4">
                                    <OptionSelector
                                        label="Size"
                                        options={SIZES}
                                        value={config.size}
                                        onChange={(val) => updateConfig('size', val)}
                                        description="Pattern density"
                                    />

                                    <OptionSelector
                                        label="Border Radius"
                                        options={BORDER_RADIUS}
                                        value={config.borderRadius}
                                        onChange={(val) => updateConfig('borderRadius', val)}
                                        description="Corner rounding"
                                    />
                                </div>
                            </DocSection>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </DocsLayout>
    );
}
