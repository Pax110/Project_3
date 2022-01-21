import LandingImage from "./components/landingimage/LandingImage.js";
import Navbar from "./components/navigation/Navbar.js";
import Footer from "./components/footer/Footer.js";
import RestoDisplayCard from "./components/restaurant/RestoDisplayCard.js";
import FileUploader from "./components/file-uploader/FileUploader.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingImage />
      <RestoDisplayCard />
      <Footer />
      <FileUploader />
    </div>
  );
}

export default App;
