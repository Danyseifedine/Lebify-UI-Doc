import{j as e,L as o}from"./app-BxUy0s5D.js";import{D as i}from"./docs-layout-BPY6KK6J.js";import{D as s,a as n,C as a}from"./docBuilder-CUDpKBwa.js";import{m as r,F as t}from"./navbar-B359NC9G.js";import{M as l}from"./mail-Dh66yOHw.js";import{D as c}from"./download-Tg8a1OkZ.js";import{C as d}from"./check-DgS9yVQn.js";import"./button-C0DMVOXN.js";import"./app-logo-BJwB7ck7.js";import"./index-BYCUHddD.js";import"./index-4jI7cDjI.js";import"./sun-CCcfczt9.js";function y(){return e.jsxs(i,{tocItems:[{title:"Introduction",url:"#introduction",level:1},{title:"Basic Variants",url:"#basic-variants",level:1},{title:"Lebanese Collections",url:"#lebanese-collections",level:1},{title:"Sizes",url:"#sizes",level:1},{title:"Button Types",url:"#button-types",level:1},{title:"With Icons",url:"#with-icons",level:1},{title:"Loading State",url:"#loading-state",level:1},{title:"Hover Effects",url:"#hover-effects",level:1},{title:"API Reference",url:"#api-reference",level:1}],children:[e.jsx(o,{title:"Button - Lebify UI"}),e.jsxs(r.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-12 max-w-3xl",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h1",{id:"introduction",className:"scroll-m-20 text-5xl pb-3 font-bold tracking-tight main-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",children:"Button"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"A versatile button component with Lebanese-inspired variants, multiple styles, and interactive features."}),e.jsx("div",{className:"mt-6 p-4 bg-muted/30 rounded-lg border border-muted",children:e.jsxs("p",{className:"text-sm text-muted-foreground",children:[e.jsx("span",{className:"font-semibold",children:"Did you know?"})," With all possible combinations of variants, types, sizes, and effects, the Lebify Button component can create ",e.jsx("span",{className:"font-bold text-primary",children:"699,904"})," unique button styles! This makes it one of the most versatile button libraries available."]})})]}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs(s,{id:"basic-variants",title:"Basic Variants",size:"3xl",children:[e.jsx(n,{children:"Lebify UI provides a set of basic button variants to cover common use cases."}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"tertiary",children:"Tertiary"}),e.jsx(t,{variant:"basic",children:"Basic"})]}),e.jsx(a,{language:"typescript",code:`import { Button } from 'lebify-ui';

// Basic variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="basic">Basic</Button>`})]}),e.jsxs(s,{id:"lebanese-collections",title:"Lebanese-Inspired Collections",size:"3xl",children:[e.jsx(n,{children:"Lebify UI features unique button collections inspired by Lebanese culture, landscapes, and heritage."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Cedar Collection"}),e.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[e.jsx(t,{variant:"cedar",children:"Cedar"}),e.jsx(t,{variant:"cedar-light",children:"Cedar Light"}),e.jsx(t,{variant:"cedar-dark",children:"Cedar Dark"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Mediterranean Collection"}),e.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[e.jsx(t,{variant:"sea",children:"Sea"}),e.jsx(t,{variant:"coast",children:"Coast"}),e.jsx(t,{variant:"azure",children:"Azure"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Mountain Collection"}),e.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[e.jsx(t,{variant:"stone",children:"Stone"}),e.jsx(t,{variant:"earth",children:"Earth"}),e.jsx(t,{variant:"terracotta",children:"Terracotta"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Beirut Collection"}),e.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[e.jsx(t,{variant:"urban",children:"Urban"}),e.jsx(t,{variant:"concrete",children:"Concrete"}),e.jsx(t,{variant:"steel",children:"Steel"})]})]})]}),e.jsx(a,{language:"typescript",code:`// Cedar Collection
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
<Button variant="startup">Startup</Button>`})]}),e.jsxs(s,{id:"sizes",title:"Sizes",size:"3xl",children:[e.jsx(n,{children:"Buttons come in three different sizes to fit various UI contexts."}),e.jsxs("div",{className:"flex items-center gap-4 my-6",children:[e.jsx(t,{size:"small",children:"Small"}),e.jsx(t,{size:"medium",children:"Medium"}),e.jsx(t,{size:"large",children:"Large"})]}),e.jsx(a,{language:"typescript",code:`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`})]}),e.jsxs(s,{id:"button-types",title:"Button Types",size:"3xl",children:[e.jsx(n,{children:"Lebify UI supports different button types to match your design needs."}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(t,{buttonType:"filled",children:"Filled"}),e.jsx(t,{buttonType:"outlined",children:"Outlined"}),e.jsx(t,{buttonType:"ghost",children:"Ghost"})]}),e.jsx(a,{language:"typescript",code:`<Button buttonType="filled">Filled Button</Button>
<Button buttonType="outlined">Outlined Button</Button>
<Button buttonType="ghost">Ghost Button</Button>`})]}),e.jsxs(s,{id:"with-icons",title:"With Icons",size:"3xl",children:[e.jsx(n,{children:"Buttons can include icons to enhance visual communication. Icons can be positioned on either side of the text."}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(t,{icon:e.jsx(l,{className:"h-4 w-4"}),iconPosition:"left",children:"Login with Email"}),e.jsx(t,{icon:e.jsx(c,{className:"h-4 w-4"}),iconPosition:"right",children:"Download"}),e.jsx(t,{icon:e.jsx(d,{className:"h-4 w-4"}),iconOnly:!0,"aria-label":"Confirm"})]}),e.jsx(a,{language:"typescript",code:`// Icon on the left
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
</Button>`})]}),e.jsxs(s,{id:"loading-state",title:"Loading State",size:"3xl",children:[e.jsx(n,{children:"Buttons can display a loading state to indicate an ongoing operation. You can customize the loading spinner and text."}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(t,{loading:!0,loadingText:"Please wait",children:"Submit"}),e.jsx(t,{variant:"secondary",loading:!0,loadingSpinner:"dots",loadingPosition:"right",children:"Processing"}),e.jsx(t,{variant:"cedar",loading:!0,loadingSpinner:"pulse",hideTextWhenLoading:!0,children:"Save"})]}),e.jsx(a,{language:"typescript",code:`// Basic loading button
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
// - "ellipsis" - Text ellipsis (...)`})]}),e.jsxs(s,{id:"hover-effects",title:"Hover Effects",size:"3xl",children:[e.jsx(n,{children:"Enhance user interaction with various hover effects. Lebify UI provides a range of built-in hover animations."}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(t,{hoverEffect:"expand",children:"Expand"}),e.jsx(t,{variant:"cedar",hoverEffect:"3d-rotate",children:"3D Rotate"}),e.jsx(t,{variant:"sea",hoverEffect:"sheen",children:"Sheen"}),e.jsx(t,{variant:"stone",hoverEffect:"bounce",children:"Bounce"})]}),e.jsx(a,{language:"typescript",code:`// Using hoverEffect prop
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
// - "border-spin" - Spinning border`})]}),e.jsxs(s,{id:"api-reference",title:"API Reference",size:"3xl",children:[e.jsx(n,{children:"The Button component accepts the following props:"}),e.jsx("div",{className:"my-6 overflow-hidden rounded-lg border bg-card",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b bg-muted/50",children:[e.jsx("th",{className:"p-3 text-left font-medium",children:"Prop"}),e.jsx("th",{className:"p-3 text-left font-medium",children:"Type"}),e.jsx("th",{className:"p-3 text-left font-medium",children:"Default"}),e.jsx("th",{className:"p-3 text-left font-medium",children:"Description"})]})}),e.jsxs("tbody",{className:"divide-y",children:[e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"variant"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"ButtonVariant"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"primary"'}),e.jsx("td",{className:"p-3",children:"Button style variant from Lebanese-inspired collections"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"buttonType"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:'"filled" | "outlined" | "ghost"'})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"filled"'}),e.jsx("td",{className:"p-3",children:"Button appearance type"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"size"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:'"small" | "medium" | "large"'})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"medium"'}),e.jsx("td",{className:"p-3",children:"Button size"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"disabled"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"boolean"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"false"}),e.jsx("td",{className:"p-3",children:"Disables the button"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"loading"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"boolean"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"false"}),e.jsx("td",{className:"p-3",children:"Shows loading state"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"loadingText"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"null"}),e.jsx("td",{className:"p-3",children:"Text to show during loading"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"loadingSpinner"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"LoadingSpinner"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"circle"'}),e.jsx("td",{className:"p-3",children:"Type of loading spinner"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"loadingPosition"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:'"left" | "right"'})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"left"'}),e.jsx("td",{className:"p-3",children:"Position of the loading spinner"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"hideTextWhenLoading"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"boolean"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"false"}),e.jsx("td",{className:"p-3",children:"Hide button text when loading"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"hoverEffect"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"HoverEffect"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"default"'}),e.jsx("td",{className:"p-3",children:"Special hover animation effect"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"icon"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"ReactNode"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"null"}),e.jsx("td",{className:"p-3",children:"Icon element to display"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"iconPosition"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:'"left" | "right"'})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"left"'}),e.jsx("td",{className:"p-3",children:"Position of the icon"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"iconOnly"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"boolean"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"false"}),e.jsx("td",{className:"p-3",children:"Shows only the icon"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"iconSpacing"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"0.5rem"'}),e.jsx("td",{className:"p-3",children:"Space between icon and text"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"borderRadius"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"BorderRadius"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"medium"'}),e.jsx("td",{className:"p-3",children:"Button corner radius"})]})]})]})})}),e.jsx(n,{children:"The Button component also exposes several constants for use in your application:"}),e.jsx(a,{language:"typescript",code:`// Access button constants
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
console.log(Button.LOADING_SPINNER.ELLIPSIS); // 'ellipsis'`})]})]})]})]})}export{y as default};
