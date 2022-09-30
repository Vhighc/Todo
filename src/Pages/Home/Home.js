
import About from "../../Components/About/About";
import AllInOne from "../../Components/AllInOne/AllInOne";
import Footer from "../../Components/Footer/Footer";
import Pricing from "../../Components/Pricing/Pricing";
import Support from "../../Components/Support/Support";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Support />
      <Pricing />
      <About />
      <AllInOne />
      <Footer />
    </div>
  );
};

export default Home;
