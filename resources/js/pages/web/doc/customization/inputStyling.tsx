import { Head } from '@inertiajs/react';
import { DocsLayout } from '@/layouts/docs-layout';
import { CodeBlock } from '@/components/codeBlock/code-block';
import { DocSection } from '@/components/web/docBuilder';
import { useState } from 'react';
import { Input } from 'lebify-ui';
import { Mail, Lock, Search, Eye, EyeOff, User, Calendar, Clock, Link, Phone, Code, Eye as EyeIcon } from 'lucide-react';
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
    MODERN: ['tech', 'digital', 'startup'],
    ADDITIONAL: ['glass', 'neomorphic', 'gradient', 'minimal', 'dark', 'pill', 'flat']
};

const INPUT_TYPES = ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date', 'time', 'textarea'];
const SIZES = ['small', 'compact', 'medium', 'large'];
const BORDER_RADIUS = ['none', 'small', 'medium', 'large', 'pill'];

// Icons for selection
const ICONS: Record<string, React.ReactNode> = {
    'None': null,
    'Mail': <Mail className="h-4 w-4" />,
    'Lock': <Lock className="h-4 w-4" />,
    'Search': <Search className="h-4 w-4" />,
    'User': <User className="h-4 w-4" />,
    'Calendar': <Calendar className="h-4 w-4" />,
    'Clock': <Clock className="h-4 w-4" />,
    'Link': <Link className="h-4 w-4" />,
    'Phone': <Phone className="h-4 w-4" />
};

interface InputConfig {
    variant: string;
    type: string;
    size: string;
    disabled: boolean;
    readOnly: boolean;
    error: boolean;
    success: boolean;
    required: boolean;
    label: string;
    placeholder: string;
    helperText: string;
    leftIcon: string;
    rightIcon: string;
    borderRadius: string;
    showCharacterCount: boolean;
    maxLength?: number;
    fullWidth: boolean;
}

interface OptionSelectorProps {
    label: string;
    options?: string[];
    value: string | boolean | number | undefined;
    onChange: (value: any) => void;
    type?: 'select' | 'checkbox' | 'text' | 'number';
    description?: string;
}

export default function InputStyling() {
    // State for input configuration
    const [config, setConfig] = useState<InputConfig>({
        variant: 'primary',
        type: 'text',
        size: 'medium',
        disabled: false,
        readOnly: false,
        error: false,
        success: false,
        required: false,
        label: 'Input Label',
        placeholder: 'Enter text here',
        helperText: '',
        leftIcon: 'None',
        rightIcon: 'None',
        borderRadius: 'medium',
        showCharacterCount: false,
        maxLength: undefined,
        fullWidth: false
    });

    // State to toggle between preview and code view
    const [showCode, setShowCode] = useState(false);

    // Update configuration
    const updateConfig = <K extends keyof InputConfig>(key: K, value: InputConfig[K]) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    // Generate code for the current configuration
    const generateCode = () => {
        const props = [];

        if (config.variant !== 'primary') props.push(`variant="${config.variant}"`);
        if (config.type !== 'text') props.push(`type="${config.type}"`);
        if (config.size !== 'medium') props.push(`size="${config.size}"`);
        if (config.disabled) props.push('disabled');
        if (config.readOnly) props.push('readOnly');
        if (config.error) props.push('error');
        if (config.success) props.push('success');
        if (config.required) props.push('required');
        if (config.label) props.push(`label="${config.label}"`);
        if (config.placeholder) props.push(`placeholder="${config.placeholder}"`);
        if (config.helperText) props.push(`helperText="${config.helperText}"`);
        if (config.leftIcon !== 'None') props.push(`leftIcon={<${config.leftIcon} className="h-4 w-4" />}`);
        if (config.rightIcon !== 'None') props.push(`rightIcon={<${config.rightIcon} className="h-4 w-4" />}`);
        if (config.borderRadius !== 'medium') props.push(`borderRadius="${config.borderRadius}"`);
        if (config.showCharacterCount) props.push('showCharacterCount');
        if (config.maxLength) props.push(`maxLength={${config.maxLength}}`);
        if (config.fullWidth) props.push('fullWidth');

        const propsString = props.length > 0 ? ' ' + props.join(' ') : '';

        return `import { Input } from 'lebify-ui';
import { ${config.leftIcon !== 'None' ? config.leftIcon + ', ' : ''}${config.rightIcon !== 'None' ? config.rightIcon : ''} } from 'lucide-react';

// Your custom input
<Input${propsString} />`;
    };

    // Render the input with current configuration
    const renderInput = () => {
        const inputProps: any = {
            variant: config.variant,
            type: config.type,
            size: config.size,
            disabled: config.disabled,
            readOnly: config.readOnly,
            error: config.error,
            success: config.success,
            required: config.required,
            label: config.label,
            placeholder: config.placeholder,
            helperText: config.helperText,
            leftIcon: config.leftIcon !== 'None' ? ICONS[config.leftIcon] : undefined,
            rightIcon: config.rightIcon !== 'None' ? ICONS[config.rightIcon] : undefined,
            borderRadius: config.borderRadius,
            showCharacterCount: config.showCharacterCount,
            maxLength: config.maxLength,
            fullWidth: config.fullWidth
        };

        return <Input {...inputProps} />;
    };

    // Option selector component
    const OptionSelector = ({ label, options, value, onChange, type = 'select', description }: OptionSelectorProps) => {
        return (
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">{label}</label>
                    {description && (
                        <span className="text-xs text-muted-foreground">{description}</span>
                    )}
                </div>

                {type === 'select' && options && (
                    <div className="relative">
                        <select
                            value={value as string}
                            onChange={(e) => onChange(e.target.value)}
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 appearance-none pr-8"
                        >
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg
                                className="h-4 w-4 text-muted-foreground"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
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
                        <span className="text-xs text-muted-foreground">Enabled</span>
                    </div>
                )}

                {type === 'text' && (
                    <input
                        type="text"
                        value={value as string}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    />
                )}

                {type === 'number' && (
                    <input
                        type="number"
                        value={value as number}
                        onChange={(e) => onChange(parseInt(e.target.value, 10) || undefined)}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    />
                )}
            </div>
        );
    };

    // Group variants by category
    const getVariantOptions = () => {
        const allVariants: string[] = [];
        Object.values(VARIANTS).forEach(variants => {
            allVariants.push(...variants);
        });
        return allVariants;
    };

    return (
        <DocsLayout tocItems={[
            { title: "Input Customizer", url: "#input-customizer", level: 1 },
            { title: "Appearance", url: "#appearance", level: 2 },
            { title: "Content", url: "#content", level: 2 },
            { title: "States", url: "#states", level: 2 },
            { title: "Icons", url: "#icons", level: 2 },
        ]}>
            <Head title="Input Styling - Lebify UI" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12 max-w-3xl"
            >
                <div className="space-y-4">
                    <h1 id="input-customizer" className="scroll-m-20 text-5xl pb-3 font-bold tracking-tight main-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Input Customizer
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Build your perfect input by customizing all available options.
                    </p>
                </div>

                <div className="space-y-8">
                    <DocSection id="preview" title="Preview" size="2xl">
                        <div className="relative p-6 bg-card/50 rounded-lg border border-border">
                            <div className="absolute top-4 right-4 flex space-x-2">
                                <button
                                    onClick={() => setShowCode(false)}
                                    className={`p-2 rounded-md ${!showCode ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                                    title="Show preview"
                                >
                                    <EyeIcon className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={() => setShowCode(true)}
                                    className={`p-2 rounded-md ${showCode ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                                    title="Show code"
                                >
                                    <Code className="h-4 w-4" />
                                </button>
                            </div>

                            <div className="mt-8 flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    {showCode ? (
                                        <motion.div
                                            key="code"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="w-full"
                                        >
                                            <CodeBlock
                                                language="typescript"
                                                code={generateCode()}
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="preview"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="w-full"
                                        >
                                            {renderInput()}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </DocSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <DocSection id="appearance" title="Appearance" size="2xl">
                                <div className="p-6 bg-card/50 rounded-lg border border-border space-y-4">
                                    <OptionSelector
                                        label="Variant"
                                        options={getVariantOptions()}
                                        value={config.variant}
                                        onChange={(val) => updateConfig('variant', val)}
                                        description="Visual style"
                                    />

                                    <OptionSelector
                                        label="Type"
                                        options={INPUT_TYPES}
                                        value={config.type}
                                        onChange={(val) => updateConfig('type', val)}
                                        description="Input type"
                                    />

                                    <OptionSelector
                                        label="Size"
                                        options={SIZES}
                                        value={config.size}
                                        onChange={(val) => updateConfig('size', val)}
                                        description="Input dimensions"
                                    />

                                    <OptionSelector
                                        label="Border Radius"
                                        options={BORDER_RADIUS}
                                        value={config.borderRadius}
                                        onChange={(val) => updateConfig('borderRadius', val)}
                                        description="Corner roundness"
                                    />

                                    <OptionSelector
                                        label="Full Width"
                                        value={config.fullWidth}
                                        onChange={(val) => updateConfig('fullWidth', val)}
                                        type="checkbox"
                                        description="Take up 100% width"
                                    />
                                </div>
                            </DocSection>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <DocSection id="content" title="Content" size="2xl">
                                <div className="p-6 bg-card/50 rounded-lg border border-border space-y-4">
                                    <OptionSelector
                                        label="Label"
                                        value={config.label}
                                        onChange={(val) => updateConfig('label', val)}
                                        type="text"
                                        description="Input label text"
                                    />

                                    <OptionSelector
                                        label="Placeholder"
                                        value={config.placeholder}
                                        onChange={(val) => updateConfig('placeholder', val)}
                                        type="text"
                                        description="Placeholder text"
                                    />

                                    <OptionSelector
                                        label="Helper Text"
                                        value={config.helperText}
                                        onChange={(val) => updateConfig('helperText', val)}
                                        type="text"
                                        description="Additional information"
                                    />

                                    <OptionSelector
                                        label="Show Character Count"
                                        value={config.showCharacterCount}
                                        onChange={(val) => updateConfig('showCharacterCount', val)}
                                        type="checkbox"
                                        description="Display character counter"
                                    />

                                    {config.showCharacterCount && (
                                        <OptionSelector
                                            label="Max Length"
                                            value={config.maxLength}
                                            onChange={(val) => updateConfig('maxLength', val)}
                                            type="number"
                                            description="Maximum character limit"
                                        />
                                    )}
                                </div>
                            </DocSection>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <DocSection id="states" title="States" size="2xl">
                                <div className="p-6 bg-card/50 rounded-lg border border-border space-y-4">
                                    <OptionSelector
                                        label="Disabled"
                                        value={config.disabled}
                                        onChange={(val) => updateConfig('disabled', val)}
                                        type="checkbox"
                                        description="Inactive state"
                                    />

                                    <OptionSelector
                                        label="Read Only"
                                        value={config.readOnly}
                                        onChange={(val) => updateConfig('readOnly', val)}
                                        type="checkbox"
                                        description="Non-editable"
                                    />

                                    <OptionSelector
                                        label="Required"
                                        value={config.required}
                                        onChange={(val) => updateConfig('required', val)}
                                        type="checkbox"
                                        description="Mandatory field"
                                    />

                                    <OptionSelector
                                        label="Error State"
                                        value={config.error}
                                        onChange={(val) => {
                                            updateConfig('error', val);
                                            if (val) updateConfig('success', false);
                                        }}
                                        type="checkbox"
                                        description="Invalid input"
                                    />

                                    <OptionSelector
                                        label="Success State"
                                        value={config.success}
                                        onChange={(val) => {
                                            updateConfig('success', val);
                                            if (val) updateConfig('error', false);
                                        }}
                                        type="checkbox"
                                        description="Valid input"
                                    />
                                </div>
                            </DocSection>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <DocSection id="icons" title="Icons" size="2xl">
                                <div className="p-6 bg-card/50 rounded-lg border border-border space-y-4">
                                    <OptionSelector
                                        label="Left Icon"
                                        options={Object.keys(ICONS)}
                                        value={config.leftIcon}
                                        onChange={(val) => updateConfig('leftIcon', val)}
                                        description="Icon at start"
                                    />

                                    <OptionSelector
                                        label="Right Icon"
                                        options={Object.keys(ICONS)}
                                        value={config.rightIcon}
                                        onChange={(val) => updateConfig('rightIcon', val)}
                                        description="Icon at end"
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
