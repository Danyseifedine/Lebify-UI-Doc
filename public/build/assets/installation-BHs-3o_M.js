import{j as e,L as r}from"./app-CBNlKAqn.js";import{D as l}from"./docs-layout-B6WWvB0B.js";import{D as a,a as t,C as i}from"./docBuilder-D7htRUjp.js";import{m as n,V as c,F as m}from"./navbar-GFhv74fz.js";import"./button-avze7SzB.js";import"./app-logo-Bi8wysN6.js";import"./index-DdFX_kih.js";import"./index-lrLtlHHj.js";import"./check-CI16kaUK.js";import"./sun-fNS0XsRM.js";function p(){const{theme:o,toggleTheme:s}=c();return e.jsx(m,{onClick:s,variant:"primary",className:"transition-all hover:scale-105",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-current"}),"Current Theme: ",o]})})}function T(){return e.jsxs(l,{tocItems:[{title:"NPM Installation",url:"#npm-installation",level:1},{title:"Configuration",url:"#configuration",level:1},{title:"Usage",url:"#usage",level:1}],children:[e.jsx(r,{title:"Installation - Lebify UI"}),e.jsxs(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-12 max-w-3xl",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h1",{className:"scroll-m-20 text-5xl pb-3 font-bold tracking-tight main-title bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",children:"Installation"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"How to install and set up Lebify UI in your project"}),e.jsx("div",{className:"pt-12",children:e.jsx("p",{className:"text-lg text-justify text-muted-foreground",children:"Lebify UI is a modern, lightweight React component library designed for building beautiful and accessible user interfaces. With a focus on customization and developer experience, it provides a comprehensive set of pre-built components that follow best practices in web development. The package is available through NPM and can be installed using your preferred package manager."})})]}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs(a,{id:"npm-installation",title:"NPM Installation",size:"3xl",children:[e.jsx(t,{children:"Install Lebify UI using your preferred package manager:"}),e.jsx("div",{className:"relative",children:e.jsx(i,{language:"bash",code:"npm install lebify-ui"})}),e.jsx(t,{children:"Or using yarn:"}),e.jsx(i,{language:"bash",code:"yarn add lebify-ui"})]}),e.jsxs(a,{id:"configuration",size:"3xl",title:"Configuration",children:[e.jsx(t,{children:"To use Lebify UI in your application, you need to wrap your application with the ThemeProvider component. This provider manages the theme state across your application."}),e.jsx(n.div,{whileHover:{scale:1.01},transition:{type:"spring",stiffness:300},children:e.jsx(i,{language:"typescript",code:`import { ThemeProvider } from 'lebify-ui';

function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      themes={["light", "dark", "dim", "earth"]}
    >
      <YourApp />
    </ThemeProvider>
  );
}`})})]}),e.jsxs(a,{id:"usage",size:"3xl",title:"Usage",children:[e.jsx(t,{children:"After installation, you can import and use any component from Lebify UI in your application:"}),e.jsx(n.div,{whileHover:{scale:1.01},transition:{type:"spring",stiffness:300},children:e.jsx(i,{language:"typescript",code:`import { Button, useTheme } from 'lebify-ui';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Current theme: {theme}</h1>
      <Button onClick={toggleTheme} variant="primary">
        Toggle Theme
      </Button>
    </div>
  );
}`})}),e.jsx(t,{children:"Lebify UI provides a wide range of components and hooks to help you build your application. Check out the documentation for more details on available components and their usage."})]})]})]}),e.jsx(p,{})]})}export{T as default};
