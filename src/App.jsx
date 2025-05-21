import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { NavbarDemo } from './components/layout/NavbarDemo';
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarDemo />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
