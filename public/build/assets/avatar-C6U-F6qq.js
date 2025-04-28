import{j as a,L as i}from"./app-BETEo3j8.js";import{D as n}from"./docs-layout-CyYwaS2o.js";import{D as t,a as r,C as s}from"./code-block-Dth-c-Lc.js";import{m as l,g as e}from"./navbar-D08KNBDE.js";import"./button-D6zdulrh.js";import"./app-logo-DxjL8DVR.js";import"./index-Dk_zz5nr.js";import"./index-CWAVHUQo.js";import"./check-By-o4DP9.js";import"./sun-FxLF9FY7.js";function j(){return a.jsxs(n,{tocItems:[{title:"Introduction",url:"#introduction",level:1},{title:"Basic Usage",url:"#basic-usage",level:1},{title:"Sizes",url:"#sizes",level:1},{title:"Shapes",url:"#shapes",level:1},{title:"Variants",url:"#variants",level:1},{title:"Lebanese Collections",url:"#lebanese-collections",level:1},{title:"Fallback Initials",url:"#fallback-initials",level:1},{title:"Custom Styling",url:"#custom-styling",level:1},{title:"Interactive Avatars",url:"#interactive-avatars",level:1},{title:"API Reference",url:"#api-reference",level:1}],children:[a.jsx(i,{title:"Avatar - Lebify UI"}),a.jsxs(l.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-12 max-w-3xl",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h1",{id:"introduction",className:"scroll-m-20 text-5xl pb-3 font-bold tracking-tight main-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",children:"Avatar"}),a.jsx("p",{className:"text-xl text-muted-foreground",children:"A versatile avatar component with Lebanese-inspired variants, multiple shapes, and customization options."}),a.jsx("div",{className:"mt-6 p-4 bg-muted/30 rounded-lg border border-muted",children:a.jsxs("p",{className:"text-sm text-muted-foreground",children:[a.jsx("span",{className:"font-semibold",children:"Did you know?"})," The Lebify Avatar component offers virtually infinite styling possibilities through custom colors, along with 30+ predefined variants, 4 sizes, and 3 shapes. It automatically generates initials when no image is available, creating a seamless user experience in any context."]})})]}),a.jsxs("div",{className:"space-y-10",children:[a.jsxs(t,{id:"basic-usage",title:"Basic Usage",size:"3xl",children:[a.jsx(r,{children:"The Avatar component can display user images or fallback to initials when no image is available."}),a.jsxs("div",{className:"flex flex-wrap gap-4 my-6 items-center",children:[a.jsx(e,{src:"https://i.pravatar.cc/150?img=1",alt:"User Avatar"}),a.jsx(e,{name:"John Doe"}),a.jsx(e,{name:"Sarah Connor",variant:"primary"})]}),a.jsx(s,{language:"typescript",code:`import { Avatar } from 'lebify-ui';

// With image
<Avatar
  src="https://i.pravatar.cc/150?img=1"
  alt="User Avatar"
/>

// With fallback initials
<Avatar
  name="John Doe"
/>

// With variant
<Avatar
  name="Sarah Connor"
  variant="primary"
/>`})]}),a.jsxs(t,{id:"sizes",title:"Sizes",size:"3xl",children:[a.jsx(r,{children:"Avatars come in four different sizes to fit various UI contexts."}),a.jsxs("div",{className:"flex items-center gap-4 my-6",children:[a.jsx(e,{size:"small",name:"Small"}),a.jsx(e,{size:"medium",name:"Medium"}),a.jsx(e,{size:"large",name:"Large"}),a.jsx(e,{size:"xlarge",name:"XLarge"})]}),a.jsx(s,{language:"typescript",code:`<Avatar size="small" name="Small" />
<Avatar size="medium" name="Medium" /> {/* Default */}
<Avatar size="large" name="Large" />
<Avatar size="xlarge" name="XLarge" />`})]}),a.jsxs(t,{id:"shapes",title:"Shapes",size:"3xl",children:[a.jsx(r,{children:"Avatars can have different shapes to match your design system."}),a.jsxs("div",{className:"flex items-center gap-4 my-6",children:[a.jsx(e,{shape:"square",name:"Square",variant:"secondary"}),a.jsx(e,{shape:"rounded",name:"Rounded",variant:"tertiary"})]}),a.jsx(s,{language:"typescript",code:`<Avatar shape="circle" name="Circle" variant="primary" /> {/* Default */}
<Avatar shape="square" name="Square" variant="secondary" />
<Avatar shape="rounded" name="Rounded" variant="tertiary" />`})]}),a.jsxs(t,{id:"lebanese-collections",title:"Lebanese-Inspired Collections",size:"3xl",children:[a.jsx(r,{children:"Lebify UI features unique avatar variants inspired by Lebanese culture, landscapes, and heritage."}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium mb-3",children:"Cedar Collection"}),a.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[a.jsx(e,{variant:"cedar",name:"Cedar"}),a.jsx(e,{variant:"cedar-light",name:"Cedar Light"}),a.jsx(e,{variant:"cedar-dark",name:"Cedar Dark"})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium mb-3",children:"Mediterranean Collection"}),a.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[a.jsx(e,{variant:"sea",name:"Sea"}),a.jsx(e,{variant:"coast",name:"Coast"}),a.jsx(e,{variant:"azure",name:"Azure"})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium mb-3",children:"Mountain Collection"}),a.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[a.jsx(e,{variant:"stone",name:"Stone"}),a.jsx(e,{variant:"earth",name:"Earth"}),a.jsx(e,{variant:"terracotta",name:"Terracotta"})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium mb-3",children:"Beirut Collection"}),a.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[a.jsx(e,{variant:"urban",name:"Urban"}),a.jsx(e,{variant:"concrete",name:"Concrete"}),a.jsx(e,{variant:"steel",name:"Steel"})]})]})]}),a.jsx(s,{language:"typescript",code:`// Cedar Collection
<Avatar variant="cedar" name="Cedar" />
<Avatar variant="cedar-light" name="Cedar Light" />
<Avatar variant="cedar-dark" name="Cedar Dark" />

// Mediterranean Collection
<Avatar variant="sea" name="Sea" />
<Avatar variant="coast" name="Coast" />
<Avatar variant="azure" name="Azure" />

// Mountain Collection
<Avatar variant="stone" name="Stone" />
<Avatar variant="earth" name="Earth" />
<Avatar variant="terracotta" name="Terracotta" />

// Beirut Collection
<Avatar variant="urban" name="Urban" />
<Avatar variant="concrete" name="Concrete" />
<Avatar variant="steel" name="Steel" />

// Additional Collections
// Culinary Collection
<Avatar variant="olive" name="Olive" />
<Avatar variant="saffron" name="Saffron" />
<Avatar variant="grape" name="Grape" />

// Festival Collection
<Avatar variant="festive" name="Festive" />
<Avatar variant="celebration" name="Celebration" />
<Avatar variant="heritage" name="Heritage" />

// Craft Collection
<Avatar variant="copper" name="Copper" />
<Avatar variant="silver" name="Silver" />
<Avatar variant="ceramic" name="Ceramic" />

// Modern Collection
<Avatar variant="tech" name="Tech" />
<Avatar variant="digital" name="Digital" />
<Avatar variant="startup" name="Startup" />`})]}),a.jsxs(t,{id:"fallback-initials",title:"Fallback Initials",size:"3xl",children:[a.jsx(r,{children:"When no image is provided, the Avatar component automatically displays the user's initials."}),a.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[a.jsx(e,{name:"John Doe",variant:"primary"}),a.jsx(e,{name:"Jane Smith",variant:"secondary"}),a.jsx(e,{name:"Alex Johnson",variant:"tertiary"}),a.jsx(e,{name:"Sarah Williams",variant:"cedar"}),a.jsx(e,{name:"Single Name",variant:"sea"})]}),a.jsx(s,{language:"typescript",code:`// Automatically extracts initials from name
<Avatar name="John Doe" variant="primary" /> {/* Shows "JD" */}
<Avatar name="Jane Smith" variant="secondary" /> {/* Shows "JS" */}
<Avatar name="Alex Johnson" variant="tertiary" /> {/* Shows "AJ" */}
<Avatar name="Sarah Williams" variant="cedar" /> {/* Shows "SW" */}
<Avatar name="Single Name" variant="sea" /> {/* Shows "S" */}`})]}),a.jsxs(t,{id:"custom-styling",title:"Custom Styling",size:"3xl",children:[a.jsx(r,{children:"Avatars can be customized with specific colors and styles."}),a.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[a.jsx(e,{name:"Custom",backgroundColor:"#FF5733",textColor:"#FFFFFF"}),a.jsx(e,{name:"Bordered",borderColor:"#4361ee",borderWidth:"2px"}),a.jsx(e,{name:"Rounded",shape:"square",borderRadius:"8px",backgroundColor:"#33FF57"}),a.jsx(e,{src:"https://i.pravatar.cc/150?img=2",borderColor:"#FF33A8",borderWidth:"3px"})]}),a.jsx(s,{language:"typescript",code:`// Custom background and text colors
<Avatar
  name="Custom"
  backgroundColor="#FF5733"
  textColor="#FFFFFF"
/>

// Custom border
<Avatar
  name="Bordered"
  borderColor="#4361ee"
  borderWidth="2px"
/>

// Custom shape with border radius
<Avatar
  name="Rounded"
  shape="square"
  borderRadius="8px"
  backgroundColor="#33FF57"
/>

// Custom border for image avatar
<Avatar
  src="https://i.pravatar.cc/150?img=2"
  borderColor="#FF33A8"
  borderWidth="3px"
/>`})]}),a.jsxs(t,{id:"interactive-avatars",title:"Interactive Avatars",size:"3xl",children:[a.jsx(r,{children:"Avatars can be made interactive with click handlers."}),a.jsxs("div",{className:"flex flex-wrap gap-4 my-6",children:[a.jsx(e,{name:"Click Me",variant:"primary",onClick:()=>alert("Avatar clicked!"),className:"cursor-pointer hover:opacity-80 transition-opacity"}),a.jsx(e,{src:"https://i.pravatar.cc/150?img=3",onClick:()=>alert("Image avatar clicked!"),className:"cursor-pointer hover:opacity-80 transition-opacity"})]}),a.jsx(s,{language:"typescript",code:`// Interactive avatar with initials
<Avatar
  name="Click Me"
  variant="primary"
  onClick={() => alert('Avatar clicked!')}
  className="cursor-pointer hover:opacity-80 transition-opacity"
/>

// Interactive avatar with image
<Avatar
  src="https://i.pravatar.cc/150?img=3"
  onClick={() => alert('Image avatar clicked!')}
  className="cursor-pointer hover:opacity-80 transition-opacity"
/>`})]}),a.jsxs(t,{id:"api-reference",title:"API Reference",size:"3xl",children:[a.jsx(r,{children:"The Avatar component accepts the following props:"}),a.jsx("div",{className:"my-6 overflow-hidden rounded-lg border bg-card",children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full border-collapse",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b bg-muted/50",children:[a.jsx("th",{className:"p-3 text-left font-medium",children:"Prop"}),a.jsx("th",{className:"p-3 text-left font-medium",children:"Type"}),a.jsx("th",{className:"p-3 text-left font-medium",children:"Default"}),a.jsx("th",{className:"p-3 text-left font-medium",children:"Description"})]})}),a.jsxs("tbody",{className:"divide-y",children:[a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"src"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),a.jsx("td",{className:"p-3",children:"Image source URL"})]}),a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"name"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),a.jsx("td",{className:"p-3",children:"User name (used for extracting initials and alt text)"})]}),a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"alt"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),a.jsx("td",{className:"p-3",children:"Alternative text for the avatar image"})]}),a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"size"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:'"small" | "medium" | "large" | "xlarge"'})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:'"medium"'}),a.jsx("td",{className:"p-3",children:"Avatar size"})]}),a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"shape"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:'"circle" | "square" | "rounded"'})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:'"circle"'}),a.jsx("td",{className:"p-3",children:"Avatar shape"})]}),a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"variant"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"primary' | 'secondary' | 'tertiary' | 'basic'"})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:'"basic"'}),a.jsx("td",{className:"p-3",children:"Avatar variant/style"})]}),a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"className"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),a.jsx("td",{className:"p-3",children:"Additional CSS classes"})]}),a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"backgroundColor"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),a.jsx("td",{className:"p-3",children:"Background color (CSS value)"})]}),a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"textColor"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),a.jsx("td",{className:"p-3",children:"Text color for initials (CSS value)"})]}),a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"borderColor"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),a.jsx("td",{className:"p-3",children:"Border color (CSS value)"})]}),a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"borderWidth"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),a.jsx("td",{className:"p-3",children:"Border width (CSS value with unit)"})]}),a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"borderRadius"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"string"})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),a.jsx("td",{className:"p-3",children:"Border radius (CSS value with unit)"})]}),a.jsxs("tr",{className:"bg-card hover:bg-muted/50 transition-colors",children:[a.jsx("td",{className:"p-3 font-medium text-primary",children:"onClick"}),a.jsx("td",{className:"p-3 font-mono text-xs",children:a.jsx("span",{className:"rounded bg-primary/10 px-1.5 py-0.5 text-primary",children:"MouseEventHandler"})}),a.jsx("td",{className:"p-3 font-mono text-xs",children:"-"}),a.jsx("td",{className:"p-3",children:"Click handler"})]})]})]})})}),a.jsx(r,{children:"The Avatar component also exposes several constants for use in your application:"}),a.jsx(s,{language:"typescript",code:`// Access avatar constants
import { Avatar } from 'lebify-ui';

// Available variants grouped by collection
console.log(Avatar.VARIANTS.BASIC);       // ['primary', 'secondary', 'tertiary', 'basic']
console.log(Avatar.VARIANTS.CEDAR);       // ['cedar', 'cedar-light', 'cedar-dark']
console.log(Avatar.VARIANTS.MEDITERRANEAN); // ['sea', 'coast', 'azure']
console.log(Avatar.VARIANTS.MOUNTAIN);    // ['stone', 'earth', 'terracotta']
console.log(Avatar.VARIANTS.BEIRUT);      // ['urban', 'concrete', 'steel']
console.log(Avatar.VARIANTS.CULINARY);    // ['olive', 'saffron', 'grape']
console.log(Avatar.VARIANTS.FESTIVAL);    // ['festive', 'celebration', 'heritage']
console.log(Avatar.VARIANTS.CRAFT);       // ['copper', 'silver', 'ceramic']
console.log(Avatar.VARIANTS.MODERN);      // ['tech', 'digital', 'startup']

// Avatar sizes
console.log(Avatar.SIZES.SMALL);        // 'small'
console.log(Avatar.SIZES.MEDIUM);       // 'medium'
console.log(Avatar.SIZES.LARGE);        // 'large'
console.log(Avatar.SIZES.XLARGE);       // 'xlarge'

// Avatar shapes
console.log(Avatar.SHAPES.CIRCLE);      // 'circle'
console.log(Avatar.SHAPES.SQUARE);      // 'square'
console.log(Avatar.SHAPES.ROUNDED);     // 'rounded'`})]})]})]})]})}export{j as default};
