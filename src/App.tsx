import ButtonGradient from "./assets/svg/ButtonGradient.js";
import Benefits from "./components/Benefits.js";
import Collaboration from "./components/Collaboration.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Pricing from "./components/Pricing.js";
import Roadmap from "./components/Roadmap.js";
import Services from "./components/Services.js";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
