import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Products } from "./components/pages"; 
// import all pages at once using index.js to avoid:

// import { About } from "./components/pages/About";
// import { Contact } from "./components/pages/Contact";
// import { Services } from "./components/pages/Services";
// .
// .
// .

function App() {
  return (
      <div className="App">
        {/* Placed outside <Routes> so it is rendered on all pages */}
        <Navbar />
        {/* The <Routes> component ensures only one route is rendered at a time. */}
        <Routes>
          {/* <Route> component maps a specific URL path to a React component */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
  );
}

export default App;























// This is the main component of the application. It serves as the central hub for rendering the Navbar and setting up page routing.