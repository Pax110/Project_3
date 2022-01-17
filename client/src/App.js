import LandingImage from "./components/landingimage/LandingImage.js";
import Navbar from "./components/navigation/Navbar.js";
import Footer from "./components/footer/Footer.js";
import RestoDisplayCard from "./components/restaurant/RestoDisplayCard.js";
import {HomeHeart} from '@styled-icons/boxicons-regular/HomeHeart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingImage />
      <RestoDisplayCard />
      <Footer />
      <HomeHeart/>
      
    </div>
  );
}

export default App;
