import { Head } from '@inertiajs/react';
import { DocsLayout } from '@/layouts/docs-layout';
import { CodeBlock } from '@/components/codeBlock/code-block';
import { DocSection } from '@/components/web/docBuilder';
import { useState } from 'react';
import { Button } from 'lebify-ui';
import { Check, Download, Mail, Plus, ArrowRight, Loader2, Code, Eye, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define all available options
const VARIANTS = {
    BASIC: ['primary', 'secondary', 'tertiary', 'basic'],
    CEDAR: ['cedar', 'cedar-light', 'cedar-dark'],
    MEDITERRANEAN: ['sea', 'coast', 'azure'],
    MOUNTAIN: ['stone', 'earth', 'terracotta'],
    BEIRUT: ['urban', 'concrete', 'steel'],
    CULINARY: ['olive', 'saffron', 'grape'],
    FESTIVAL: ['festive', 'celebration', 'heritage'],
    CRAFT: ['copper', 'silver', 'ceramic'],
    MODERN: ['tech', 'digital', 'startup']
};

const BUTTON_TYPES = ['filled', 'outlined', 'ghost'];
const SIZES = ['small', 'medium', 'large'];
const HOVER_EFFECTS = ['default', 'none', '3d-rotate', 'magnetic', 'sheen', 'neon', 'reveal', 'expand', 'liquid', 'slice', 'bounce', 'glitch', 'border-spin'];
const ICON_POSITIONS = ['left', 'right'];
const BORDER_RADIUS = ['none', 'small', 'medium', 'large', 'pill', 'rounded'];
const LOADING_SPINNERS = ['dots', 'circle', 'pulse', 'bars', 'ellipsis'];

const ICONS: Record<string, React.ReactNode> = {
    'None': null,
    'Mail': <Mail className="h-4 w-4" />,
    'Check': <Check className="h-4 w-4" />,
    'Download': <Download className="h-4 w-4" />,
    'Plus': <Plus className="h-4 w-4" />,
    'Arrow': <ArrowRight className="h-4 w-4" />,
    'Loader': <Loader2 className="h-4 w-4" />
};

interface ButtonConfig {
    variant: string;
    buttonType: string;
    size: string;
    disabled: boolean;
    loading: boolean;
    loadingText: string;
    loadingSpinner: string;
    loadingPosition: string;
    hideTextWhenLoading: boolean;
    hoverEffect: string;
    icon: string;
    iconPosition: string;
    iconOnly: boolean;
    iconSpacing: string;
    borderRadius: string;
    text: string;
}

interface OptionSelectorProps {
    label: string;
    options?: string[];
    value: string | boolean;
    onChange: (value: string | boolean) => void;
    type?: 'select' | 'checkbox' | 'text';
    description?: string;
}

export default function ButtonStyling() {
    // State for button configuration
    const [config, setConfig] = useState<ButtonConfig>({
        variant: 'primary',
        buttonType: 'filled',
        size: 'medium',
        disabled: false,
        loading: false,
        loadingText: '',
        loadingSpinner: 'circle',
        loadingPosition: 'left',
        hideTextWhenLoading: false,
        hoverEffect: 'default',
        icon: 'None',
        iconPosition: 'left',
        iconOnly: false,
        iconSpacing: '0.5rem',
        borderRadius: 'medium',
        text: 'Button'
    });

    // State to toggle between preview and code view
    const [showCode, setShowCode] = useState(false);

    // Update configuration
    const updateConfig = <K extends keyof ButtonConfig>(key: K, value: ButtonConfig[K]) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    // Generate code for the current configuration
    const generateCode = () => {
        const props = [];

        if (config.variant !== 'primary') props.push(`variant="${config.variant}"`);
        if (config.buttonType !== 'filled') props.push(`buttonType="${config.buttonType}"`);
        if (config.size !== 'medium') props.push(`size="${config.size}"`);
        if (config.disabled) props.push('disabled');
        if (config.loading) props.push('loading');
        if (config.loadingText) props.push(`loadingText="${config.loadingText}"`);
        if (config.loadingSpinner !== 'circle') props.push(`loadingSpinner="${config.loadingSpinner}"`);
        if (config.loadingPosition !== 'left') props.push(`loadingPosition="${config.loadingPosition}"`);
        if (config.hideTextWhenLoading) props.push('hideTextWhenLoading');
        if (config.hoverEffect !== 'default') props.push(`hoverEffect="${config.hoverEffect}"`);
        if (config.icon !== 'None') props.push(`icon={<${config.icon} className="h-4 w-4" />}`);
        if (config.iconPosition !== 'left') props.push(`iconPosition="${config.iconPosition}"`);
        if (config.iconOnly) props.push('iconOnly');
        if (config.iconSpacing !== '0.5rem') props.push(`iconSpacing="${config.iconSpacing}"`);
        if (config.borderRadius !== 'medium') props.push(`borderRadius="${config.borderRadius}"`);

        const propsString = props.length > 0 ? ' ' + props.join(' ') : '';

        return `import { Button } from 'lebify-ui';
import { ${config.icon !== 'None' ? config.icon + ' ' : ''}} from 'lucide-react';

// Your custom button
<Button${propsString}>${config.iconOnly ? '' : config.text}</Button>`;
    };

    // Render the button with current configuration
    const renderButton = () => {
        const buttonProps = {
            variant: config.variant,
            buttonType: config.buttonType,
            size: config.size,
            disabled: config.disabled,
            loading: config.loading,
            loadingText: config.loadingText || undefined,
            loadingSpinner: config.loadingSpinner,
            loadingPosition: config.loadingPosition,
            hideTextWhenLoading: config.hideTextWhenLoading,
            hoverEffect: config.hoverEffect,
            icon: config.icon !== 'None' ? ICONS[config.icon] : undefined,
            iconPosition: config.iconPosition,
            iconOnly: config.iconOnly,
            iconSpacing: config.iconSpacing,
            borderRadius: config.borderRadius,
        };

        return (
            <Button {...buttonProps}>
                {config.iconOnly ? '' : config.text}
            </Button>
        );
    };

    // Option selector component
    const OptionSelector = ({ label, options, value, onChange, type = 'select', description }: OptionSelectorProps) => (
        <div className="mb-6 space-y-2">
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">{label}</label>
                {description && (
                    <span className="text-xs text-muted-foreground">{description}</span>
                )}
            </div>

            {type === 'select' && options ? (
                <div className="relative">
                    <select
                        value={value as string}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors pr-10"
                    >
                        {options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                        <ChevronDown className="h-4 w-4" />
                    </div>
                </div>
            ) : type === 'checkbox' ? (
                <div className="flex items-center h-10">
                    <input
                        type="checkbox"
                        checked={value as boolean}
                        onChange={(e) => onChange(e.target.checked)}
                        className="h-4 w-4 rounded border-input text-primary focus:ring-primary transition-colors"
                        id={`checkbox-${label}`}
                    />
                    <label htmlFor={`checkbox-${label}`} className="ml-2 text-sm text-muted-foreground">
                        {value ? 'Enabled' : 'Disabled'}
                    </label>
                </div>
            ) : type === 'text' ? (
                <input
                    type="text"
                    value={value as string}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                />
            ) : null}
        </div>
    );

    // Variant selector with categories
    const VariantSelector = () => {
        const allVariants = Object.entries(VARIANTS).flatMap(([category, variants]) =>
            variants.map(variant => ({ category, variant }))
        );

        return (
            <div className="mb-6 space-y-2">
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">Variant</label>
                    <span className="text-xs text-muted-foreground">Button style</span>
                </div>
                <div className="relative">
                    <select
                        value={config.variant}
                        onChange={(e) => updateConfig('variant', e.target.value)}
                        className="w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors pr-10"
                    >
                        {allVariants.map(({ category, variant }) => (
                            <option key={variant} value={variant}>
                                {category}: {variant}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                        <ChevronDown className="h-4 w-4" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <DocsLayout tocItems={[
            { title: "Button Customizer", url: "#customizer", level: 1 },
            { title: "Appearance", url: "#appearance", level: 2 },
            { title: "Loading State", url: "#loading", level: 2 },
            { title: "Icons", url: "#icons", level: 2 },
        ]}>
            <Head title="Button Styling - Lebify UI" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 max-w-3xl"
            >
                <div id="customizer" className="space-y-2">
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                        Button Customizer
                    </h1>
                    <p className="text-xl pt-3 text-muted-foreground">
                        Create your perfect button by customizing all available properties
                        <br />
                        You can create over 650k different buttons with this tool.
                    </p>

                    <motion.div
                        className="mt-6 p-6 bg-card rounded-lg border border-border shadow-sm"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <div className="flex flex-col space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium">
                                    {showCode ? "Generated Code" : "Live Preview"}
                                </h3>
                                <div className="flex items-center space-x-2">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setShowCode(false)}
                                        className={`p-2 rounded-md transition-colors ${!showCode ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}
                                        title="Show preview"
                                    >
                                        <Eye size={16} />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setShowCode(true)}
                                        className={`p-2 rounded-md transition-colors ${showCode ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}
                                        title="Show code"
                                    >
                                        <Code size={16} />
                                    </motion.button>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={showCode ? 'code' : 'preview'}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    {showCode ? (
                                        <div className="bg-muted/30 rounded-lg border border-muted p-4">
                                            <CodeBlock
                                                language="typescript"
                                                code={generateCode()}
                                            />
                                            <div className="mt-4 text-xs text-muted-foreground">
                                                <p>Copy this code to use your button in your project.</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="p-10 w-full flex items-center justify-center bg-muted/30 rounded-lg border border-muted">
                                            {renderButton()}
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <DocSection id="appearance" title="Appearance" size="2xl">
                            <div className="p-6 bg-card/50 rounded-lg border border-border space-y-4">
                                <VariantSelector />

                                <OptionSelector
                                    label="Button Type"
                                    options={BUTTON_TYPES}
                                    value={config.buttonType}
                                    onChange={(val) => updateConfig('buttonType', val)}
                                    description="Style variant"
                                />

                                <OptionSelector
                                    label="Size"
                                    options={SIZES}
                                    value={config.size}
                                    onChange={(val) => updateConfig('size', val)}
                                    description="Button dimensions"
                                />

                                <OptionSelector
                                    label="Border Radius"
                                    options={BORDER_RADIUS}
                                    value={config.borderRadius}
                                    onChange={(val) => updateConfig('borderRadius', val)}
                                    description="Corner roundness"
                                />

                                <OptionSelector
                                    label="Hover Effect"
                                    options={HOVER_EFFECTS}
                                    value={config.hoverEffect}
                                    onChange={(val) => updateConfig('hoverEffect', val)}
                                    description="Mouse interaction"
                                />

                                <OptionSelector
                                    label="Button Text"
                                    value={config.text}
                                    onChange={(val) => updateConfig('text', val)}
                                    type="text"
                                    description="Label content"
                                />

                                <OptionSelector
                                    label="Disabled State"
                                    value={config.disabled}
                                    onChange={(val) => updateConfig('disabled', val)}
                                    type="checkbox"
                                    description="Inactive state"
                                />
                            </div>
                        </DocSection>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <DocSection id="loading" title="Loading State" size="2xl">
                                <div className="p-6 bg-card/50 rounded-lg border border-border space-y-4">
                                    <OptionSelector
                                        label="Loading State"
                                        value={config.loading}
                                        onChange={(val) => updateConfig('loading', val)}
                                        type="checkbox"
                                        description="Show loading indicator"
                                    />

                                    {config.loading && (
                                        <>
                                            <OptionSelector
                                                label="Loading Text"
                                                value={config.loadingText}
                                                onChange={(val) => updateConfig('loadingText', val)}
                                                type="text"
                                                description="Text during loading"
                                            />

                                            <OptionSelector
                                                label="Loading Spinner"
                                                options={LOADING_SPINNERS}
                                                value={config.loadingSpinner}
                                                onChange={(val) => updateConfig('loadingSpinner', val)}
                                                description="Spinner style"
                                            />

                                            <OptionSelector
                                                label="Loading Position"
                                                options={ICON_POSITIONS}
                                                value={config.loadingPosition}
                                                onChange={(val) => updateConfig('loadingPosition', val)}
                                                description="Spinner placement"
                                            />

                                            <OptionSelector
                                                label="Hide Text When Loading"
                                                value={config.hideTextWhenLoading}
                                                onChange={(val) => updateConfig('hideTextWhenLoading', val)}
                                                type="checkbox"
                                                description="Show spinner only"
                                            />
                                        </>
                                    )}
                                </div>
                            </DocSection>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <DocSection id="icons" title="Icons" size="2xl">
                                <div className="p-6 bg-card/50 rounded-lg border border-border space-y-4">
                                    <OptionSelector
                                        label="Icon"
                                        options={Object.keys(ICONS)}
                                        value={config.icon}
                                        onChange={(val) => updateConfig('icon', val)}
                                        description="Visual element"
                                    />

                                    {config.icon !== 'None' && (
                                        <>
                                            <OptionSelector
                                                label="Icon Position"
                                                options={ICON_POSITIONS}
                                                value={config.iconPosition}
                                                onChange={(val) => updateConfig('iconPosition', val)}
                                                description="Icon placement"
                                            />

                                            <OptionSelector
                                                label="Icon Only"
                                                value={config.iconOnly}
                                                onChange={(val) => updateConfig('iconOnly', val)}
                                                type="checkbox"
                                                description="Hide text"
                                            />

                                            <OptionSelector
                                                label="Icon Spacing"
                                                value={config.iconSpacing}
                                                onChange={(val) => updateConfig('iconSpacing', val)}
                                                type="text"
                                                description="Gap size (e.g. 0.5rem)"
                                            />
                                        </>
                                    )}
                                </div>
                            </DocSection>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </DocsLayout>
    );
}
