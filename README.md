This project is a React-based single-page application (SPA) built using Vite and React Router. The goal was to create a website with:

A persistent navbar across all pages.
Three main pages: Home, About, and Contact (I also added a bonus page: Services).
Navigation between pages using React Router and BrowserRouter for client-side routing.


Definition: An Single Page Application is a type of web application where all the content is loaded on a single HTML page. Instead of loading a new page from the server when navigating, the application dynamically updates the page using JavaScript.

Unlike traditional websites where the browser requests a new HTML page from the server, in  SPA the browser doesn't reload the page, instead JS dynamically changes what you see, creating it smoother and faster user experience.

Component:  is a reusable piece of code in React that represents a part of the user interface (UI). They accept props/inputs and return React elements.

Think of components like building blocks of a website: a Navbar, a button, or a footer.
Why use components?

Components make it easy to split your UI into manageable, reusable pieces.
Each component handles its own logic and styling, which keeps your code organized.

What is React Router?  React Router is a library that helps React applications handle routing.

What is routing? Routing is the process of navigating between different pages or views in a web application, or mapping a URL to a specific component.

Why do we need routing? In an SPA, we don’t reload the page, so we need a way to show the correct content when the user navigates to a different URL.

React Router maps different URLs (e.g., /about, /contact) to specific components (e.g., About, Contact).

Rendering: Showing a React component (e.g., Home, About) on the screen.
Based on the URL: React Router looks at the URL in the browser (e.g., /about) and decides which component to display.

Prop = its a way to pass data from component to component. Like an argument in a function.

State = is a way to pass data along with navigation actions. It handles dynamic data (for example, whether or not my hamburger menu should be displayed). It is like an object.




useState is a Hook in React that allows you to add state to functional components. State refers to data that can change over time, and when it does, React re-renders the component to reflect those changes.


Not the same as useState component:
setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.

Updating State:
To change the value of the state variable