import Collage from "./components/Collage";
import Footer from "./components/Footer";
import GraphicPhoto from "./components/GraphicPhoto";
import Header from "./components/Header";
import Standout from "./components/Standout";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";

function App() {
  return (
    <div className="contents">
      <Header />
      <Transform />
      <Standout />
      <GraphicPhoto />
      <Testimonials />
      <Collage />
      <Footer />
    </div>
  );
}

export default App;
