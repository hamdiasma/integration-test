
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./pages"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Acceuil />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
