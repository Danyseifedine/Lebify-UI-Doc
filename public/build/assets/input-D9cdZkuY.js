import{r as c,j as e,L as u}from"./app-ClnDcU5x.js";import{D as x}from"./docs-layout-CI5hiByM.js";import{C as l}from"./code-block-DWRl-f9f.js";import{D as s,a}from"./docBuilder-BAqCwC2A.js";import{m as h,O as t,S as b}from"./navbar-KSeuWZSm.js";import{a as I}from"./button-DpAnbcQq.js";import{E as p}from"./eye-C_StgHOB.js";import{M as f}from"./mail-7YfhMtei.js";import{L as y,U as j}from"./user-CIM-QECR.js";import"./app-logo-C1EAV1fW.js";import"./index-pxFLg-LS.js";import"./index-Buxcj9mq.js";import"./check-CSGIyM_r.js";import"./sun-By4go2s3.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],d=I("EyeOff",g);function M(){const[r,n]=c.useState(!1),[i,o]=c.useState("");return e.jsxs(x,{tocItems:[{title:"Introduction",url:"#introduction",level:1},{title:"Basic Variants",url:"#basic-variants",level:1},{title:"Lebanese Collections",url:"#lebanese-collections",level:1},{title:"Additional Variants",url:"#additional-variants",level:1},{title:"Input Types",url:"#input-types",level:1},{title:"Sizes",url:"#sizes",level:1},{title:"With Icons",url:"#with-icons",level:1},{title:"States",url:"#states",level:1},{title:"API Reference",url:"#api-reference",level:1}],children:[e.jsx(u,{title:"Input - Lebify UI"}),e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-12 max-w-3xl",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h1",{id:"introduction",className:"scroll-m-20 text-5xl pb-3 font-bold tracking-tight main-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",children:"Input"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"A versatile input component with Lebanese-inspired variants, multiple styles, and interactive features."})]}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs(s,{id:"basic-variants",title:"Basic Variants",size:"3xl",children:[e.jsx(a,{children:"Lebify UI provides a set of basic input variants to cover common use cases."}),e.jsxs("div",{className:"flex flex-col gap-4 my-6",children:[e.jsx(t,{variant:"primary",label:"Primary Input",placeholder:"Enter text here"}),e.jsx(t,{variant:"secondary",label:"Secondary Input",placeholder:"Enter text here"}),e.jsx(t,{variant:"tertiary",label:"Tertiary Input",placeholder:"Enter text here"}),e.jsx(t,{variant:"basic",label:"Basic Input",placeholder:"Enter text here"})]}),e.jsx(l,{language:"typescript",code:`import { Input } from 'lebify-ui';

// Basic variants
<Input variant="primary" label="Primary Input" placeholder="Enter text here" />
<Input variant="secondary" label="Secondary Input" placeholder="Enter text here" />
<Input variant="tertiary" label="Tertiary Input" placeholder="Enter text here" />
<Input variant="basic" label="Basic Input" placeholder="Enter text here" />`})]}),e.jsxs(s,{id:"lebanese-collections",title:"Lebanese-Inspired Collections",size:"3xl",children:[e.jsx(a,{children:"Lebify UI features unique input collections inspired by Lebanese culture, landscapes, and heritage."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Cedar Collection"}),e.jsxs("div",{className:"flex flex-col gap-4 mb-4",children:[e.jsx(t,{variant:"cedar",label:"Cedar Input",placeholder:"Enter text here"}),e.jsx(t,{variant:"cedar-light",label:"Cedar Light Input",placeholder:"Enter text here"}),e.jsx(t,{variant:"cedar-dark",label:"Cedar Dark Input",placeholder:"Enter text here"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Mediterranean Collection"}),e.jsxs("div",{className:"flex flex-col gap-4 mb-4",children:[e.jsx(t,{variant:"sea",label:"Sea Input",placeholder:"Enter text here"}),e.jsx(t,{variant:"coast",label:"Coast Input",placeholder:"Enter text here"}),e.jsx(t,{variant:"azure",label:"Azure Input",placeholder:"Enter text here"})]})]})]}),e.jsx(l,{language:"typescript",code:`// Cedar Collection
<Input variant="cedar" label="Cedar Input" placeholder="Enter text here" />
<Input variant="cedar-light" label="Cedar Light Input" placeholder="Enter text here" />
<Input variant="cedar-dark" label="Cedar Dark Input" placeholder="Enter text here" />

// Mediterranean Collection
<Input variant="sea" label="Sea Input" placeholder="Enter text here" />
<Input variant="coast" label="Coast Input" placeholder="Enter text here" />
<Input variant="azure" label="Azure Input" placeholder="Enter text here" />

// Additional Collections Available
// Mountain Collection, Beirut Collection, Culinary Collection, etc.`})]}),e.jsxs(s,{id:"additional-variants",title:"Additional Variants",size:"3xl",children:[e.jsx(a,{children:"Lebify UI offers a range of stylistic variants to match different design aesthetics."}),e.jsxs("div",{className:"flex flex-col gap-4 my-6",children:[e.jsx(t,{label:"Glass Input",placeholder:"Glassmorphism effect",variant:"glass"}),e.jsx(t,{label:"Neomorphic Input",placeholder:"Soft UI effect",variant:"neomorphic"}),e.jsx(t,{label:"Gradient Input",placeholder:"Gradient effect",variant:"gradient"}),e.jsx(t,{label:"Minimal Input",placeholder:"Clean minimal design",variant:"minimal"}),e.jsx(t,{label:"Dark Input",placeholder:"Dark mode design",variant:"dark"}),e.jsx(t,{label:"Pill Input",placeholder:"Rounded pill design",variant:"pill"}),e.jsx(t,{label:"Flat Input",placeholder:"Modern flat design",variant:"flat"})]}),e.jsx(l,{language:"typescript",code:`import { Input } from 'lebify-ui';

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
/>`})]}),e.jsxs(s,{id:"input-types",title:"Input Types",size:"3xl",children:[e.jsx(a,{children:"The Input component supports various input types to handle different data formats."}),e.jsxs("div",{className:"flex flex-col gap-4 my-6",children:[e.jsx(t,{type:"text",label:"Text Input",placeholder:"Enter text"}),e.jsx(t,{type:"password",label:"Password Input",placeholder:"Enter password",rightIcon:e.jsx("button",{onClick:()=>n(!r),type:"button",children:r?e.jsx(d,{className:"h-4 w-4"}):e.jsx(p,{className:"h-4 w-4"})})}),e.jsx(t,{type:"email",label:"Email Input",placeholder:"example@email.com"}),e.jsx(t,{type:"number",label:"Number Input",placeholder:"Enter a number",min:0,max:100}),e.jsx(t,{type:"date",label:"Date Input"}),e.jsx(t,{type:"time",label:"Time Input"}),e.jsx(t,{type:"textarea",label:"Textarea",placeholder:"Enter multiple lines of text",rows:3}),e.jsx(t,{type:"select",label:"Select Input",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]})]}),e.jsx(l,{language:"typescript",code:`import { Input } from 'lebify-ui';
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
}`})]}),e.jsxs(s,{id:"sizes",title:"Sizes",size:"3xl",children:[e.jsx(a,{children:"The Input component comes in four different sizes to fit various UI requirements."}),e.jsxs("div",{className:"flex flex-col gap-4 my-6",children:[e.jsx(t,{label:"Small Input",placeholder:"Small size",size:"small",variant:"basic"}),e.jsx(t,{label:"Compact Input",placeholder:"Compact size",size:"compact",variant:"basic"}),e.jsx(t,{label:"Medium Input",placeholder:"Medium size (default)",size:"medium"}),e.jsx(t,{label:"Large Input",placeholder:"Large size",size:"large"})]}),e.jsx(l,{language:"typescript",code:`import { Input } from 'lebify-ui';

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
/>`})]}),e.jsxs(s,{id:"with-icons",title:"With Icons",size:"3xl",children:[e.jsx(a,{children:"Inputs can include icons on either side to provide visual cues or additional functionality."}),e.jsxs("div",{className:"flex flex-col gap-4 my-6",children:[e.jsx(t,{label:"Email Input",placeholder:"Enter your email",type:"email",leftIcon:e.jsx(f,{className:"h-4 w-4"})}),e.jsx(t,{label:"Password Input",placeholder:"Enter your password",type:"password",leftIcon:e.jsx(y,{className:"h-4 w-4"}),rightIcon:e.jsx("button",{onClick:()=>n(!r),type:"button",children:r?e.jsx(d,{className:"h-4 w-4"}):e.jsx(p,{className:"h-4 w-4"})})}),e.jsx(t,{label:"Search Input",placeholder:"Search...",value:i,onChange:m=>o(m.target.value),leftIcon:e.jsx(b,{className:"h-4 w-4"}),rightIcon:i?e.jsx("button",{onClick:()=>o(""),type:"button",className:"text-muted-foreground hover:text-foreground",children:"×"}):null}),e.jsx(t,{label:"Username Input",placeholder:"Enter username",leftIcon:e.jsx(j,{className:"h-4 w-4"})})]}),e.jsx(l,{language:"typescript",code:`import { Input } from 'lebify-ui';
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
}`})]}),e.jsxs(s,{id:"states",title:"States",size:"3xl",children:[e.jsx(a,{children:"Inputs can be displayed in various states to communicate different conditions to users."}),e.jsxs("div",{className:"flex flex-col gap-4 my-6",children:[e.jsx(t,{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}),e.jsx(t,{label:"Read-only Input",value:"This input is read-only",readOnly:!0}),e.jsx(t,{label:"Error State",placeholder:"Invalid input",error:!0,helperText:"This field contains an error"}),e.jsx(t,{label:"Success State",placeholder:"Valid input",success:!0,helperText:"This field is valid"}),e.jsx(t,{label:"Required Field",placeholder:"This field is required",required:!0}),e.jsx(t,{label:"With Helper Text",placeholder:"Enter text here",helperText:"This is some helpful information about the field"}),e.jsx(t,{label:"With Character Count",placeholder:"Limited to 50 characters",maxLength:50,showCharacterCount:!0})]}),e.jsx(l,{language:"typescript",code:`import { Input } from 'lebify-ui';

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
/>`})]}),e.jsxs(s,{id:"api-reference",title:"API Reference",size:"3xl",children:[e.jsx(a,{children:"The Input component accepts the following props:"}),e.jsx("div",{className:"my-6 overflow-hidden rounded-lg border bg-card",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b bg-muted/50",children:[e.jsx("th",{className:"p-3 text-left font-medium",children:"Prop"}),e.jsx("th",{className:"p-3 text-left font-medium",children:"Type"}),e.jsx("th",{className:"p-3 text-left font-medium",children:"Default"}),e.jsx("th",{className:"p-3 text-left font-medium",children:"Description"})]})}),e.jsxs("tbody",{className:"divide-y",children:[e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"id"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Input id attribute"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"name"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Input name attribute"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"type"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"InputType"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"text"'}),e.jsx("td",{className:"p-3",children:"Input type (text, password, email, etc.)"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"value"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"any"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Input value (controlled component)"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"placeholder"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Input placeholder text"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"label"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"ReactNode"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Input label"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"helperText"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"ReactNode"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Helper text displayed below the input"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"variant"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"InputVariant"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"primary"'}),e.jsx("td",{className:"p-3",children:"Input visual style variant"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"size"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:'"small" | "compact" | "medium" | "large"'})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"medium"'}),e.jsx("td",{className:"p-3",children:"Input size"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"leftIcon"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"ReactNode"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Icon displayed at the left side of the input"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"rightIcon"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"ReactNode"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Icon displayed at the right side of the input"})]})]})]})})}),e.jsx(a,{children:"The Input component also exposes several constants for use in your application:"}),e.jsx(l,{language:"typescript",code:`// Access input constants
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
console.log(Input.BORDER_RADIUS.PILL);   // 'pill'`})]})]})]})]})}export{M as default};
