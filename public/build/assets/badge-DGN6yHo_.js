import{j as e,L as l}from"./app-CAY8Th0j.js";import{D as t}from"./docs-layout-DvsS_ldD.js";import{D as i,a as s}from"./docBuilder-CXJ2VaDZ.js";import{C as r}from"./code-block-DYGAdo_6.js";import{m as o,Q as a}from"./navbar-By7GEsj3.js";import"./button-DG1_oAm3.js";import"./app-logo-CgD0g9yP.js";import"./index-BJdpvkcg.js";import"./index-BBHbBy9o.js";import"./check-qQ9GSWnG.js";import"./sun-DLXm5rJa.js";function B(){return e.jsxs(t,{tocItems:[{title:"Introduction",url:"#introduction",level:1},{title:"Basic Variants",url:"#basic-variants",level:1},{title:"Status Badges",url:"#status-badges",level:1},{title:"Lebanese Collections",url:"#lebanese-collections",level:1},{title:"Sizes",url:"#sizes",level:1},{title:"Badge Types",url:"#badge-types",level:1},{title:"Border Radius",url:"#border-radius",level:1},{title:"With Icons",url:"#with-icons",level:1},{title:"Interactive Badges",url:"#interactive-badges",level:1},{title:"API Reference",url:"#api-reference",level:1}],children:[e.jsx(l,{title:"Badge - Lebify UI"}),e.jsxs(o.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-12 max-w-3xl",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h1",{id:"introduction",className:"scroll-m-20 text-5xl pb-3 font-bold tracking-tight main-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",children:"Badge"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"A versatile badge component with Lebanese-inspired variants, multiple styles, and customization options."}),e.jsx("div",{className:"mt-6 p-4 bg-muted/30 rounded-lg border border-muted",children:e.jsxs("p",{className:"text-sm text-muted-foreground",children:[e.jsx("span",{className:"font-semibold",children:"Did you know?"})," The Lebify Badge component offers virtually infinite color possibilities through the magic ",e.jsx("code",{children:"propColor"})," prop, along with 30+ predefined color variants, 4 sizes, 3 types, and 5 border radius options. Combined with icons and dismissable functionality, you can create limitless unique badge styles to perfectly match any design requirement."]})})]}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs(i,{id:"basic-variants",title:"Basic Variants",size:"3xl",children:[e.jsx(s,{children:"Lebify UI provides a set of basic badge color variants to cover common use cases."}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(a,{color:"primary",children:"Primary"}),e.jsx(a,{color:"secondary",children:"Secondary"}),e.jsx(a,{color:"basic",children:"Basic"}),e.jsx(a,{color:"normal",children:"Normal"})]}),e.jsx(r,{language:"typescript",code:`import { Badge } from 'lebify-ui';

// Basic color variants
<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="basic">Basic</Badge>
<Badge color="normal">Normal</Badge>`})]}),e.jsxs(i,{id:"status-badges",title:"Status Badges",size:"3xl",children:[e.jsx(s,{children:"Status badges are useful for indicating different states or conditions in your UI."}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(a,{color:"success",children:"Success"}),e.jsx(a,{color:"warning",children:"Warning"}),e.jsx(a,{color:"info",children:"Info"}),e.jsx(a,{color:"error",children:"Error"})]}),e.jsx(r,{language:"typescript",code:`// Status badges
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="info">Info</Badge>
<Badge color="error">Error</Badge>`})]}),e.jsxs(i,{id:"lebanese-collections",title:"Lebanese-Inspired Collections",size:"3xl",children:[e.jsx(s,{children:"Lebify UI features unique badge collections inspired by Lebanese culture, landscapes, and heritage."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Cedar Collection"}),e.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[e.jsx(a,{color:"cedar",children:"Cedar"}),e.jsx(a,{color:"cedar-light",children:"Cedar Light"}),e.jsx(a,{color:"cedar-dark",children:"Cedar Dark"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Mediterranean Collection"}),e.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[e.jsx(a,{color:"sea",children:"Sea"}),e.jsx(a,{color:"coast",children:"Coast"}),e.jsx(a,{color:"azure",children:"Azure"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Mountain Collection"}),e.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[e.jsx(a,{color:"stone",children:"Stone"}),e.jsx(a,{color:"earth",children:"Earth"}),e.jsx(a,{color:"terracotta",children:"Terracotta"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Beirut Collection"}),e.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[e.jsx(a,{color:"urban",children:"Urban"}),e.jsx(a,{color:"concrete",children:"Concrete"}),e.jsx(a,{color:"steel",children:"Steel"})]})]})]}),e.jsx(r,{language:"typescript",code:`// Cedar Collection
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
<Badge color="startup">Startup</Badge>`})]}),e.jsxs(i,{id:"sizes",title:"Sizes",size:"3xl",children:[e.jsx(s,{children:"Badges come in four different sizes to fit various UI contexts."}),e.jsxs("div",{className:"flex items-center gap-4 my-6",children:[e.jsx(a,{size:"small",children:"Small"}),e.jsx(a,{size:"medium",children:"Medium"}),e.jsx(a,{size:"large",children:"Large"}),e.jsx(a,{size:"huge",children:"Huge"})]}),e.jsx(r,{language:"typescript",code:`<Badge size="small">Small</Badge>
<Badge size="medium">Medium</Badge> {/* Default */}
<Badge size="large">Large</Badge>
<Badge size="huge">Huge</Badge>`})]}),e.jsxs(i,{id:"badge-types",title:"Badge Types",size:"3xl",children:[e.jsx(s,{children:"Lebify UI supports different badge variants to match your design needs."}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(a,{variant:"normal",children:"Normal"}),e.jsx(a,{variant:"outlined",children:"Outlined"}),e.jsx(a,{variant:"light",children:"Light"})]}),e.jsx(r,{language:"typescript",code:`<Badge variant="normal">Normal Badge</Badge> {/* Default */}
<Badge variant="outlined">Outlined Badge</Badge>
<Badge variant="light">Light Badge</Badge>`}),e.jsx(s,{children:"You can customize outlined badges with specific colors:"}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(a,{variant:"outlined",outlineColor:"#ff6b6b",outlineTextColor:"#ff6b6b",children:"Custom Outline"}),e.jsx(a,{variant:"light",propColor:"#4361ee",children:"Custom Light"})]}),e.jsxs(s,{children:["The ",e.jsx("code",{children:"propColor"}),' prop is like magic - it automatically generates the perfect background and text colors for your badge. Just provide a base color, and the component intelligently creates a lighter background with appropriate contrast for the text. This is especially useful with the "light" variant.']}),e.jsx("h3",{className:"text-lg font-medium mt-8 mb-3",children:"Status Colors with Light Variant"}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(a,{variant:"light",color:"success",children:"Success"}),e.jsx(a,{variant:"light",color:"warning",children:"Warning"}),e.jsx(a,{variant:"light",color:"info",children:"Info"}),e.jsx(a,{variant:"light",color:"error",children:"Error"})]}),e.jsx("h3",{className:"text-lg font-medium mt-8 mb-3",children:"Custom Colors with Light Variant"}),e.jsxs("div",{className:"flex flex-wrap gap-3 my-6",children:[e.jsx(a,{variant:"light",propColor:"#FF5733",children:"Coral"}),e.jsx(a,{variant:"light",propColor:"#33FF57",children:"Mint"}),e.jsx(a,{variant:"light",propColor:"#3357FF",children:"Cobalt"}),e.jsx(a,{variant:"light",propColor:"#FF33A8",children:"Magenta"}),e.jsx(a,{variant:"light",propColor:"#33FFF5",children:"Aqua"}),e.jsx(a,{variant:"light",propColor:"#F033FF",children:"Purple"}),e.jsx(a,{variant:"light",propColor:"#FF8C33",children:"Orange"}),e.jsx(a,{variant:"light",propColor:"#8C33FF",children:"Violet"}),e.jsx(a,{variant:"light",propColor:"#33FFAA",children:"Jade"}),e.jsx(a,{variant:"light",propColor:"#FF3355",children:"Ruby"}),e.jsx(a,{variant:"light",propColor:"#FFDD33",children:"Gold"}),e.jsx(a,{variant:"light",propColor:"#33AAFF",children:"Sky"})]}),e.jsx("h3",{className:"text-lg font-medium mt-8 mb-3",children:"Borderless Light Badges"}),e.jsxs("div",{className:"flex flex-wrap gap-3 my-6",children:[e.jsx(a,{variant:"light",propColor:"#FF5733",isBordered:!1,children:"Coral"}),e.jsx(a,{variant:"light",propColor:"#33FF57",isBordered:!1,children:"Mint"}),e.jsx(a,{variant:"light",propColor:"#3357FF",isBordered:!1,children:"Cobalt"}),e.jsx(a,{variant:"light",propColor:"#FF33A8",isBordered:!1,children:"Magenta"})]}),e.jsx(r,{language:"typescript",code:`// Custom outlined badge
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
// ... and many more`})]}),e.jsxs(i,{id:"border-radius",title:"Border Radius",size:"3xl",children:[e.jsx(s,{children:"Customize the border radius of your badges to match your UI design."}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(a,{radius:"none",children:"No Radius"}),e.jsx(a,{radius:"small",children:"Small Radius"}),e.jsx(a,{radius:"medium",children:"Medium Radius"}),e.jsx(a,{radius:"large",children:"Large Radius"}),e.jsx(a,{radius:"pill",children:"Pill Radius"})]}),e.jsx(r,{language:"typescript",code:`<Badge radius="none">No Radius</Badge>
<Badge radius="small">Small Radius</Badge>
<Badge radius="medium">Medium Radius</Badge>
<Badge radius="large">Large Radius</Badge>
<Badge radius="pill">Pill Radius</Badge> {/* Default */}`})]}),e.jsxs(i,{id:"with-icons",title:"With Icons",size:"3xl",children:[e.jsx(s,{children:"Badges can include icons to enhance visual communication. Icons can be positioned on either side of the text."}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(a,{icon:e.jsx("span",{className:"mr-1",children:"🔔"}),iconPosition:"start",children:"Notifications"}),e.jsx(a,{icon:e.jsx("span",{className:"ml-1",children:"✓"}),iconPosition:"end",children:"Verified"})]}),e.jsx(r,{language:"typescript",code:`// Icon at the start
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
</Badge>`})]}),e.jsxs(i,{id:"interactive-badges",title:"Interactive Badges",size:"3xl",children:[e.jsx(s,{children:"Badges can be made interactive with click handlers, useful for filtering or toggling functionality."}),e.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[e.jsx(a,{interactive:!0,onClick:()=>alert("Badge clicked!"),children:"Click me"}),e.jsx(a,{interactive:!0,color:"cedar",onClick:()=>alert("Cedar badge clicked!"),children:"Interactive"})]}),e.jsx(r,{language:"typescript",code:`// Interactive badges
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
</Badge>`})]}),e.jsxs(i,{id:"api-reference",title:"API Reference",size:"3xl",children:[e.jsx(s,{children:"The Badge component accepts the following props:"}),e.jsx("div",{className:"my-6 overflow-hidden rounded-lg border bg-card",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b bg-muted/50",children:[e.jsx("th",{className:"p-3 text-left font-medium",children:"Prop"}),e.jsx("th",{className:"p-3 text-left font-medium",children:"Type"}),e.jsx("th",{className:"p-3 text-left font-medium",children:"Default"}),e.jsx("th",{className:"p-3 text-left font-medium",children:"Description"})]})}),e.jsxs("tbody",{className:"divide-y",children:[e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"children"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"ReactNode"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Badge content"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"color"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"BadgeColor"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"primary"'}),e.jsx("td",{className:"p-3",children:"Badge color variant from Lebanese-inspired collections"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"size"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:'"small" | "medium" | "large" | "huge"'})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"medium"'}),e.jsx("td",{className:"p-3",children:"Badge size"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"radius"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:'"none" | "small" | "medium" | "large" | "pill"'})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"pill"'}),e.jsx("td",{className:"p-3",children:"Badge border radius"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"variant"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:'"normal" | "outlined" | "light"'})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"normal"'}),e.jsx("td",{className:"p-3",children:"Badge visual variant"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"outlineColor"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Outline color for outlined variant"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"outlineTextColor"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Text color for outlined variant"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"propColor"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Magic color that automatically generates background and text colors"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"icon"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"ReactNode"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Icon element to display"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"iconPosition"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:'"start" | "end"'})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:'"start"'}),e.jsx("td",{className:"p-3",children:"Position of the icon"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"iconSpacing"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"number"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"7"}),e.jsx("td",{className:"p-3",children:"Space between icon and text (in pixels)"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"onClick"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"() void"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"onClick handler for clickable badges"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"interactive"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"boolean"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"false"}),e.jsx("td",{className:"p-3",children:"Indicates whether the badge is interactive"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"isBordered"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"boolean"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"true"}),e.jsx("td",{className:"p-3",children:"Controls whether light variant badges have borders"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"className"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Additional class names"})]}),e.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium text-primary",children:"style"}),e.jsx("td",{className:"p-3 font-mono text-xs",children:e.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"CSSProperties"})}),e.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),e.jsx("td",{className:"p-3",children:"Inline styles"})]})]})]})})}),e.jsx(s,{children:"The Badge component also exposes several constants for use in your application:"}),e.jsx(r,{language:"typescript",code:`// Access badge constants
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
console.log(Badge.VARIANTS.LIGHT);     // 'light'`})]})]})]})]})}export{B as default};
