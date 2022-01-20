import LandingImage from "./components/landingimage/LandingImage.js";
import Navbar from "./components/navigation/Navbar.js";
import Footer from "./components/footer/Footer.js";
import RestoDisplayCard from "./components/restaurant/RestoDisplayCard.js";
import MenuDisplayCard from "./components/restaurant/MenuDisplayCard.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingImages/>
      <RestoDisplayCard/>
      <Footer/>
      <MenuDisplayCard/>
      <MenuDisplayCardTwo/>
    </div>
  );
}

export default App;
