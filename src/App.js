
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import TravelPage from "./TravelPage";

function App() {
  return (
    <div  className="min-h-screen bg-gradient-to-r from-purple-100 via-white to-yellow-100">
      <Navbar />
      <Hero />
      <Services/>
      <Destinations />
      <TravelPage />
      <Testimonials/>
      <Footer/>

      <react/>
     
    
    </div>
    
  );
}

export default App;
