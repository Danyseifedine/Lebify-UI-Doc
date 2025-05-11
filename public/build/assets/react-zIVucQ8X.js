import{j as e,$ as o}from"./app-DPtZz2Gh.js";import{W as n}from"./web-layout-CLtu98SB.js";import{C as l,m as r}from"./navbar-B2eXSJaU.js";import{C as t}from"./code-block-D4EoEbkB.js";import"./app-logo-CDWlTSSc.js";import"./button-Da-iABvX.js";import"./index-D9JMyrV9.js";import"./index-BOmZEARs.js";import"./check-DNH6uRC2.js";import"./sun-CdtmH1j6.js";const f=()=>e.jsx(l,{children:e.jsxs(n,{title:"React: Building Modern User Interfaces",description:"Learn about React, the popular JavaScript library for building interactive user interfaces with component-based architecture.",children:[e.jsx("section",{className:"pt-32 pb-8 md:pb-16 bg-white dark:bg-black",children:e.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"w-full max-w-4xl",children:e.jsxs("div",{className:"rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-square relative",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"}),e.jsx("img",{src:"/assets/images/blog-4.png",alt:"React Development",className:"w-full h-full object-cover"})]})})})})}),e.jsx("section",{className:"bg-white dark:bg-black",children:e.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"prose prose-lg md:prose-xl dark:prose-invert max-w-none pb-12 md:pb-20",children:[e.jsxs("h1",{className:"text-2xl md:text-3xl lg:text-4xl font-bold pb-6 md:pb-8 text-gray-900 dark:text-white relative text-left md:text-left",children:["Introduction to ",e.jsx("span",{className:"text-orange-500",children:"React"})]}),e.jsx("p",{className:"text-lg md:text-xl leading-relaxed mb-6",children:"React is a JavaScript library for building user interfaces, particularly single-page applications. Developed and maintained by Facebook (now Meta), React has revolutionized the way developers build interactive UIs with its component-based architecture and virtual DOM implementation."}),e.jsx("br",{}),e.jsx("p",{className:"text-lg md:text-xl leading-relaxed",children:"Since its initial release in 2013, React has grown to become one of the most popular frontend libraries in the world. Its declarative approach to building UIs, efficient rendering with the Virtual DOM, and robust ecosystem have made it the tool of choice for companies like Facebook, Instagram, Netflix, Airbnb, and many others. This article explores React's core concepts, ecosystem, and best practices for building modern applications."})]}),e.jsxs("div",{className:"prose prose-lg md:prose-xl dark:prose-invert max-w-none mb-12 md:mb-20",children:[e.jsxs("h2",{className:"text-2xl md:text-3xl lg:text-4xl font-bold pb-6 md:pb-8 text-gray-900 dark:text-white relative text-left md:text-left",children:["Core ",e.jsx("span",{className:"text-orange-500",children:"Concepts"})]}),e.jsx("p",{className:"text-lg md:text-xl leading-relaxed pb-6 md:pb-10",children:"React is built around several key concepts that make it powerful and flexible:"}),e.jsxs("div",{className:"mb-8 md:mb-12 bg-transparent border-2 p-4 md:p-8 rounded-2xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center mb-4 md:mb-6",children:[e.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 md:h-8 md:w-8 text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),e.jsx("h3",{className:"text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left",children:"Component-Based Architecture"})]}),e.jsx("p",{className:"text-lg md:text-xl leading-relaxed mb-6",children:"React applications are built using components - reusable, self-contained pieces of code that return HTML via a render function. Components can be nested, reused, and passed data via props. This modular approach makes code more maintainable and encourages reusability."}),e.jsx("div",{className:"mt-8 shadow-lg rounded-xl overflow-hidden",children:e.jsx(t,{language:"jsx",code:`// A simple React component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}`})})]}),e.jsxs("div",{className:"mb-8 md:mb-12 bg-transparent border-2 p-4 md:p-8 rounded-2xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center mb-4 md:mb-6",children:[e.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 md:h-8 md:w-8 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})}),e.jsx("h3",{className:"text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left",children:"JSX (JavaScript XML)"})]}),e.jsx("p",{className:"text-lg md:text-xl leading-relaxed mb-6",children:"JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript, making component structure more readable and intuitive. JSX is not required for React, but it's widely used because it simplifies the code structure."}),e.jsx("div",{className:"mt-8 shadow-lg rounded-xl overflow-hidden",children:e.jsx(t,{language:"jsx",code:`// JSX example
const element = (
  <div className="greeting">
    <h1>Hello, world!</h1>
    <p>This is JSX in action</p>
    {/* Comments look like this */}
    {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
  </div>
);

// Compiles to JavaScript:
// const element = React.createElement(
//   'div',
//   {className: 'greeting'},
//   React.createElement('h1', null, 'Hello, world!'),
//   React.createElement('p', null, 'This is JSX in action')
// );`})})]}),e.jsxs("div",{className:"mb-8 md:mb-12 bg-transparent border-2 p-4 md:p-8 rounded-2xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center mb-4 md:mb-6",children:[e.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 md:h-8 md:w-8 text-yellow-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"})})}),e.jsx("h3",{className:"text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left",children:"Virtual DOM"})]}),e.jsx("p",{className:"text-lg md:text-xl leading-relaxed mb-6",children:`One of React's most powerful features is the Virtual DOM. Instead of directly manipulating the browser's DOM, React creates a lightweight copy of the DOM in memory. When state changes, React first updates this virtual DOM, compares it with the previous version (a process called "diffing"), and then efficiently updates only the necessary parts of the actual DOM.`}),e.jsx("div",{className:"mt-8 shadow-lg rounded-xl overflow-hidden",children:e.jsx(t,{language:"javascript",code:`// React handles DOM updates efficiently
// You don't need to write code like this:
const element = document.getElementById('my-element');
element.innerHTML = 'New content';
element.className = 'new-class';

// Instead, you declare what the UI should look like:
function MyComponent({ content, className }) {
  return <div className={className}>{content}</div>;
}

// React takes care of updating the DOM efficiently
ReactDOM.render(
  <MyComponent content="New content" className="new-class" />,
  document.getElementById('root')
);`})})]}),e.jsxs("div",{className:"mb-8 md:mb-12 bg-transparent border-2 p-4 md:p-8 rounded-2xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center mb-4 md:mb-6",children:[e.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 md:h-8 md:w-8 text-purple-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),e.jsx("h3",{className:"text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left",children:"State and Lifecycle"})]}),e.jsx("p",{className:"text-lg md:text-xl leading-relaxed mb-6",children:"State allows React components to change their output over time in response to user actions, network responses, and anything else. The component lifecycle provides hooks to run code at specific points in a component's life, such as when it mounts, updates, or unmounts."}),e.jsx("div",{className:"mt-8 shadow-lg rounded-xl overflow-hidden",children:e.jsx(t,{language:"jsx",code:`// Using state with hooks
import React, { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Cleanup function runs when component unmounts
    return () => {
      clearInterval(timerID);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}`})})]}),e.jsxs("div",{className:"bg-transparent border-2 p-4 md:p-8 rounded-2xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center mb-4 md:mb-6",children:[e.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 md:h-8 md:w-8 text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"})})}),e.jsx("h3",{className:"text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-left md:text-left",children:"Props and One-Way Data Flow"})]}),e.jsx("p",{className:"text-lg md:text-xl leading-relaxed mb-6",children:"React uses a unidirectional data flow. Parent components pass data down to child components via props. This one-way binding makes applications more predictable and easier to understand, as data has a clear path through the application."}),e.jsx("div",{className:"mt-8 shadow-lg rounded-xl overflow-hidden",children:e.jsx(t,{language:"jsx",code:`// Parent component passing props to child
function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      {/* Passing data down to child via props */}
      <ChildComponent count={count} />
    </div>
  );
}

// Child component receiving props
function ChildComponent({ count }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Count from parent: {count}</p>
    </div>
  );
}`})})]})]})]})})}),e.jsx("section",{className:"bg-white dark:bg-black",children:e.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"text-left",children:[e.jsxs("h2",{className:"text-4xl font-bold text-gray-900 dark:text-white pb-8",children:["React ",e.jsx("span",{className:"text-orange-500",children:"Ecosystem"})]}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto pb-8",children:"One of React's greatest strengths is its vibrant ecosystem. The library's focus on doing one thing well (building user interfaces) has allowed a rich collection of complementary tools and libraries to flourish around it, addressing various aspects of application development."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-10",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl shadow-md border border-blue-200 dark:border-blue-800",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("svg",{viewBox:"0 0 24 24",className:"w-8 h-8 text-blue-500 mr-3",fill:"currentColor",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0-8h2v2z"})}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"React Router"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"The standard routing library for React, enabling navigation between views in your single-page application with dynamic, nested routes."})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl shadow-md border border-purple-200 dark:border-purple-800",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("svg",{viewBox:"0 0 24 24",className:"w-8 h-8 text-purple-500 mr-3",fill:"currentColor",children:e.jsx("path",{d:"M16.63 16.63c.59-.59.59-1.54 0-2.12-1.12-1.12-2.68-1.55-4.12-1.32l2.59-2.59c.89.36 1.89.25 2.59-.45.59-.59.59-1.54 0-2.12-.59-.59-1.54-.59-2.12 0-.7.7-.82 1.7-.45 2.59L12.32 13c-.22-1.44.2-3 1.32-4.12.59-.59.59-1.54 0-2.12-.59-.59-1.54-.59-2.12 0-.59.59-.59 1.54 0 2.12 1.12 1.12 2.68 1.55 4.12 1.32l-2.59 2.59c-.89-.36-1.89-.25-2.59.45-.59.59-.59 1.54 0 2.12.59.59 1.54.59 2.12 0z"})}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Redux"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"A predictable state container for JavaScript apps, providing a centralized store for state that needs to be used across your entire application."})]}),e.jsxs("div",{className:"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("svg",{viewBox:"0 0 24 24",className:"w-8 h-8 text-gray-800 dark:text-gray-200 mr-3",fill:"currentColor",children:e.jsx("path",{d:"M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.5-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"})}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Next.js"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"A React framework that enables server-side rendering, static site generation, and other performance optimizations with minimal configuration."})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-10",children:[e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl shadow-md border border-red-200 dark:border-red-800",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("svg",{viewBox:"0 0 24 24",className:"w-8 h-8 text-red-500 mr-3",fill:"currentColor",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"React Query"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"A data-fetching and state management library that simplifies fetching, caching, synchronizing, and updating server state in React applications."})]}),e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl shadow-md border border-green-200 dark:border-green-800",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("svg",{viewBox:"0 0 24 24",className:"w-8 h-8 text-green-500 mr-3",fill:"currentColor",children:e.jsx("path",{d:"M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .328 2.335-1.165 2.351-1.506 2.351-1.567 2.351-1.914 0-.317.033-.328-2.335-1.506-1.271-.657-2.351-1.185-2.381-1.196-.064-.01-.127-.01-.19 0zm-10.294.21c-.053 0-.127.01-.18.03L7.426 11.2l2.266 1.3v-.01l.016-.03c.021-.06.021-.11-.032-.19-.302-.42-.486-.676-.547-.77-.128-.2.021-.24.021-.24l1.385-.828c.074-.042.117-.127.117-.222 0-.19-.117-.254-.117-.254l-1.909-1.09c-.07-.04-.117-.06-.18-.06zm13.568.763c.063 0 .127.01.18.030l.148.096c.032.02.042.053.042.085 0 .053-.01.085-.053.117l-2.308 1.334c-.106.063-.148.053-.211 0l-.106-.074 2.308-1.344c.053-.053.096-.074.148-.053l-.055-.19zm-13.057 1.713c.01 0 .127.074.074.16-.064.097-.16.137-.266.137h-.053c-.053 0-.117-.053-.16-.107v-.032l.106-.158c.032-.042.096-.074.16-.074.042 0 .085.01.127.032l.012.042zm12.646.18c.064 0 .127.01.18.030l.149.096c.032.02.042.054.042.086 0 .053-.01.085-.053.117l-2.308 1.334c-.106.063-.148.053-.211 0l-.106-.074 2.308-1.344c.053-.03.095-.042.148-.053l-.148-.19zm-10.666.36c.148 0 .19.222.19.222l.338 1.418c.021.084 0 .148-.053.212-.064.074-.127.11-.212.11h-.032c-.085 0-.16-.079-.19-.159l-.35-1.407c-.01-.084.01-.169.063-.222.042-.042.095-.063.148-.063h.098v-.11zm-1.195 1.385c.063 0 .127.01.18.030l.148.106c.032.02.042.053.042.085 0 .053-.01.085-.053.117l-2.308 1.334c-.106.063-.148.053-.211 0l-.106-.074 2.308-1.344c.053-.03.106-.042.148-.053l-.148-.2zm10.56.095c.064 0 .127.01.18.030l.148.095c.033.02.042.054.042.086 0 .053-.01.085-.053.117l-2.308 1.334c-.106.063-.148.053-.211 0l-.106-.074 2.308-1.344c.053-.03.106-.042.148-.053l-.148-.19zm-8.031 1.164c.054 0 .117.0.17.031l.148.096c.032.02.042.053.042.085 0 .053-.01.085-.053.117l-2.308 1.334c-.106.063-.148.053-.211 0l-.106-.074 2.308-1.344c.053-.03.106-.042.148-.053l-.138-.19zm5.386.222c.063 0 .127.01.18.030l.148.096c.032.02.042.053.042.085 0 .053-.01.085-.053.117l-2.308 1.334c-.106.063-.148.053-.211 0l-.106-.074 2.308-1.344c.053-.03.106-.042.148-.053l-.148-.19z"})}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Styled Components"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"A CSS-in-JS library that allows you to write actual CSS code to style your components, with full access to the React component props."})]})]}),e.jsxs("div",{className:"mt-10 shadow-lg rounded-xl overflow-hidden",children:[e.jsx("div",{className:"bg-blue-100 dark:bg-blue-900/30 px-6 py-3 border-b border-blue-200 dark:border-blue-800",children:e.jsx("h4",{className:"text-lg font-semibold text-blue-800 dark:text-blue-300",children:"React Hooks Example"})}),e.jsx(t,{language:"jsx",code:`import React, { useState, useEffect, useCallback } from 'react';

// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

// Component using the custom hook
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(\`https://api.example.com/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="user-profile">
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Role: {data.role}</p>
                            </div>
  );
}`})]})]})})}),e.jsx("section",{className:"py-20 bg-white dark:bg-black",children:e.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"text-left mb-16",children:[e.jsxs("h2",{className:"text-4xl font-bold text-gray-900 dark:text-white pb-8",children:["React ",e.jsx("span",{className:"text-orange-500",children:"Component Patterns"})]}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"As React applications grow in complexity, certain patterns have emerged to help manage that complexity. These patterns provide solutions to common problems and help maintain clean, maintainable code."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16",children:[e.jsxs("div",{className:"bg-transparent border-2 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})})}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Compound Components"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Compound components work together to form a complete UI. They share state implicitly and provide a more declarative and flexible API."}),e.jsx("div",{className:"mt-4 text-sm bg-transparent border-2 p-4 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words",children:`<Tabs>
  <Tab label="Profile">Profile content</Tab>
  <Tab label="Settings">Settings content</Tab>
  <Tab label="Notifications">Notifications</Tab>
</Tabs>`})})]}),e.jsxs("div",{className:"bg-transparent border-2 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Render Props"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"A technique where a component receives a function as a prop that returns a React element, allowing component logic to be shared."}),e.jsx("div",{className:"mt-4 text-sm bg-transparent border-2 p-4 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words",children:`<DataFetcher url="/api/data">
  {(data, loading, error) => (
    loading ? <Spinner /> :
    error ? <Error message={error} /> :
    <DataDisplay data={data} />
  )}
</DataFetcher>`})})]})]}),e.jsxs("div",{className:"bg-transparent border-2 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 mb-10",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-orange-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Context API"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-6",children:"React's Context API provides a way to share values like themes, user data, or language preferences between components without explicitly passing props through every level of the component tree."}),e.jsx("div",{className:"mt-4 shadow-lg rounded-xl overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto max-w-full",children:e.jsx(t,{language:"jsx",code:`// Creating a context
const ThemeContext = React.createContext('light');

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer component using useContext hook
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '8px 16px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
}

// App structure
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <header>
          <h1>My Themed App</h1>
          <ThemedButton />
        </header>
        <main>
          {/* Other components that can access the theme */}
        </main>
                            </div>
    </ThemeProvider>
  );
}`})})})]})]})})}),e.jsx("section",{className:" bg-white dark:bg-black",children:e.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"text-left mb-16",children:[e.jsxs("h2",{className:"text-4xl font-bold text-gray-900 dark:text-white pb-8",children:["React ",e.jsx("span",{className:"text-orange-500",children:"Performance Optimization"})]}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"While React is generally fast out of the box, large applications can experience performance issues. Fortunately, React provides several ways to optimize your application's performance."})]}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{className:"bg-transparent border-2 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Memoization with React.memo, useMemo, and useCallback"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-6",children:"React provides several ways to memoize components and values to prevent unnecessary re-renders and recalculations:"}),e.jsx("div",{className:"mt-4 shadow-lg rounded-xl overflow-hidden",children:e.jsx(t,{language:"jsx",code:`// React.memo prevents re-renders if props haven't changed
const MemoizedComponent = React.memo(function MyComponent(props) {
  // Only re-renders if props change
  return <div>{props.name}</div>;
});

function App() {
  const [count, setCount] = useState(0);

  // useCallback memoizes functions
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty dependency array means this function never changes

  // useMemo memoizes computed values
  const expensiveCalculation = useMemo(() => {
    console.log('Computing value...');
    return computeExpensiveValue(count);
  }, [count]); // Only recalculate when count changes

  return (
                                <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <p>Expensive calculation: {expensiveCalculation}</p>
      <MemoizedComponent name="John" onClick={handleClick} />
                                </div>
  );
}`})})]}),e.jsxs("div",{className:"bg-transparent border-2 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})})}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Code Splitting with React.lazy and Suspense"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-6",children:"Code splitting allows you to split your code into smaller chunks that are loaded on demand, reducing the initial bundle size and improving load times."}),e.jsx("div",{className:"mt-4 shadow-lg rounded-xl overflow-hidden",children:e.jsx(t,{language:"jsx",code:`import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Regular import
import Home from './Home';

// Lazy-loaded components
const About = lazy(() => import('./About'));
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Router>
                                <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>

        {/* Home is loaded immediately, other components are loaded on demand */}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </Suspense>
                                </div>
    </Router>
  );
}`})})]}),e.jsxs("div",{className:"bg-transparent border-2 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-purple-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 10h16M4 14h16M4 18h16"})})}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Virtualization for Long Lists"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-6",children:"When rendering large lists, virtualization techniques can dramatically improve performance by only rendering items that are currently visible in the viewport."}),e.jsx("div",{className:"mt-4 shadow-lg rounded-xl overflow-hidden",children:e.jsx(t,{language:"jsx",code:`import React from 'react';
import { FixedSizeList } from 'react-window';

// Example using react-window for virtualized lists
function VirtualizedList({ items }) {
  // Render an individual row
  const Row = ({ index, style }) => (
    <div style={style} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}>
      {items[index].name}
                                </div>
  );

  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}

// Usage
function App() {
  // Generate 10,000 items
  const items = Array.from({ length: 10000 }, (_, index) => ({
    id: index,
    name: \`Item \${index}\`
  }));

  return (
                                <div>
      <h1>Virtualized List Example</h1>
      <VirtualizedList items={items} />
                                </div>
  );
}`})})]}),e.jsxs("div",{className:"bg-transparent border-2 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Profiling and Debugging Tools"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-6",children:"React provides built-in tools for profiling and debugging your application's performance. The React DevTools extension includes a Profiler that can record performance information."}),e.jsxs("div",{className:"mt-4 bg-transparent border-2 p-6 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white pb-4",children:"Key Performance Tools:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"React DevTools Profiler"})," - Visualize which components are rendering and how long they take"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"why-did-you-render"})," - Library that notifies you about potentially avoidable re-renders"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Lighthouse"})," - Audit tool for performance, accessibility, and best practices"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Chrome Performance Tab"})," - Analyze runtime performance and identify bottlenecks"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"React.Profiler API"})," - Programmatically measure rendering performance"]})]})]})]})]}),e.jsxs("div",{className:"mt-12 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl border border-orange-100 dark:border-orange-800/30 shadow-md",children:[e.jsx("h3",{className:"text-xl font-bold text-orange-900 dark:text-orange-300 pb-4",children:"Quick Performance Tips"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("svg",{className:"h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-orange-900 dark:text-orange-200",children:"Keep component state as local as possible to minimize re-renders"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("svg",{className:"h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-orange-900 dark:text-orange-200",children:"Use the production build of React for deployment"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("svg",{className:"h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-orange-900 dark:text-orange-200",children:"Avoid anonymous functions in render methods when possible"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("svg",{className:"h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),e.jsxs("span",{className:"text-orange-900 dark:text-orange-200",children:["Use fragment shorthand (",e.jsx(e.Fragment,{children:"..."}),") to avoid unnecessary DOM nodes"]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("svg",{className:"h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-orange-900 dark:text-orange-200",children:"Consider using immutable data structures for more efficient comparisons"})]})]})]})]})})}),e.jsx("section",{className:"bg-white dark:bg-black",children:e.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsxs("div",{className:"prose prose-lg md:prose-xl dark:prose-invert max-w-none py-16 md:py-24",children:[e.jsxs("h2",{className:"text-2xl md:text-3xl lg:text-4xl font-bold pb-6 md:pb-8 text-gray-900 dark:text-white",children:["The Future of ",e.jsx("span",{className:"text-orange-500",children:"React"})]}),e.jsx("p",{className:"text-lg md:text-xl leading-relaxed mb-6",children:"React continues to evolve with new features and improvements. The React team at Meta is focused on making React more efficient, easier to use, and better integrated with modern web capabilities. Some exciting developments include:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 my-8",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-800 dark:text-blue-300 pb-3",children:"React Server Components"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"A new architecture that allows components to render on the server, reducing bundle size and improving performance by keeping some components entirely on the server."})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800",children:[e.jsx("h3",{className:"text-xl font-bold text-purple-800 dark:text-purple-300 pb-3",children:"Concurrent Features"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"New rendering capabilities that allow React to prepare multiple versions of the UI at the same time, making apps more responsive and fluid."})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800",children:[e.jsx("h3",{className:"text-xl font-bold text-green-800 dark:text-green-300 pb-3",children:"Automatic Batching"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Improved state update batching that groups multiple state updates into a single render pass, reducing unnecessary re-renders and improving performance."})]}),e.jsxs("div",{className:"bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800",children:[e.jsx("h3",{className:"text-xl font-bold text-orange-800 dark:text-orange-300 pb-3",children:"Suspense for Data Fetching"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"A mechanism for declaratively specifying loading states while components wait for data, making asynchronous operations more intuitive."})]})]}),e.jsx("p",{className:"text-lg md:text-xl leading-relaxed mb-6",children:"React's component model has influenced many other frameworks and libraries, and its principles have become foundational to modern web development. As web technologies continue to advance, React is well-positioned to remain a leading choice for building user interfaces."}),e.jsx("p",{className:"text-lg md:text-xl leading-relaxed",children:"Whether you're building a simple interactive widget or a complex enterprise application, React provides the tools and patterns needed to create maintainable, performant user interfaces. By understanding its core concepts and best practices, you'll be well-equipped to leverage React's power in your projects."})]})})})}),e.jsx("section",{className:"bg-white dark:bg-black",children:e.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsxs("div",{className:"bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600 p-6 md:p-10 rounded-2xl shadow-xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-white/10 rounded-full -mr-10 md:-mr-20 -mt-10 md:-mt-20"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-24 md:w-40 h-24 md:h-40 bg-white/10 rounded-full -ml-6 md:-ml-10 -mb-6 md:-mb-10"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("h3",{className:"text-xl md:text-2xl lg:text-3xl font-bold text-white pb-4",children:"Ready to Start Building?"}),e.jsx("p",{className:"text-base md:text-lg lg:text-xl text-white/90 pb-6 md:pb-8 max-w-2xl",children:"Take your React development skills to the next level with our comprehensive resources, tutorials, and community support."}),e.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:e.jsxs(o,{href:"/blog",className:"inline-flex items-center justify-center px-4 md:px-6 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition-colors duration-300 shadow-md text-sm md:text-base",children:["Explore More Articles",e.jsx("svg",{className:"ml-2 w-4 h-4 md:w-5 md:h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})})]})]})})})}),e.jsx("section",{className:"py-12 md:py-20 bg-white dark:bg-black",children:e.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-12",children:[e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(r.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},className:"rounded-xl overflow-hidden max-w-md mx-auto",children:e.jsx("img",{src:"/assets/images/leb-icon.png",alt:"YouTube Videos",className:"w-full h-auto object-contain",onError:a=>{const s=a.target;s.src="/assets/images/leb-icon.png"}})})}),e.jsxs("div",{className:"w-full md:w-1/2",children:[e.jsxs(r.h2,{className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white text-left md:text-left",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:["Learn with ",e.jsx("span",{className:"text-red-600 dark:text-orange-500",children:"Video"})," Tutorials"]}),e.jsx(r.p,{className:"text-lg md:text-xl text-gray-700 dark:text-gray-300 pt-4",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:"Enhance your React development skills with these hand-picked video tutorials covering essential concepts and techniques."})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10",children:[e.jsx(r.div,{className:"relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 dark:border-gray-800 transition-colors duration-300 ease-in-out group",whileHover:{borderColor:"orange"},children:e.jsx("div",{className:"absolute inset-0 z-0",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/Tn6-PIqc4UM",title:"React in 100 Seconds",className:"w-full h-full object-cover",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}),e.jsx(r.div,{className:"relative aspect-video rounded-xl overflow-hidden border-2 cursor-pointer transition-colors duration-300 ease-in-out group",whileHover:{borderColor:"orange"},children:e.jsx("div",{className:"absolute inset-0 z-0",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/bMknfKXIFA8",title:"React Course - Beginner's Tutorial for React JavaScript Library",className:"w-full h-full object-cover",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}),e.jsx(r.div,{className:"relative aspect-video rounded-xl overflow-hidden border-2 cursor-pointer transition-colors duration-300 ease-in-out group",whileHover:{borderColor:"orange"},children:e.jsx("div",{className:"absolute inset-0 z-0",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/w7ejDZ8SWv8",title:"React JS Crash Course",className:"w-full h-full object-cover",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}),e.jsx(r.div,{className:"relative aspect-video rounded-xl overflow-hidden border-2 cursor-pointer transition-colors duration-300 ease-in-out group",whileHover:{borderColor:"orange"},children:e.jsx("div",{className:"absolute inset-0 z-0",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/4UZrsTqkcW4",title:"Full React Tutorial",className:"w-full h-full object-cover",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})]}),e.jsx("div",{className:"mt-12 text-center",children:e.jsxs("a",{href:"https://www.youtube.com/results?search_query=react+development+tutorial",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md",children:[e.jsx("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})}),"Explore More YouTube Tutorials"]})})]})})})]})});export{f as default};
