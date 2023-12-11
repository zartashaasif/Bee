import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Category from './Components/Category';
import Product  from './Components/Product';
import Gallery  from './Components/Gallery';
import Testimonial  from './Components/Testimonial';
import Footer  from './Components/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <About />
     <Category />
     <Product />
     <Gallery />
     <Testimonial />
     <Footer />
    </div>
  );
}
export default App;
