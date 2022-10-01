import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Support from "../../Components/Support/Support";
import AllInOne from "../../Components/AllInOne/AllInOne";
import Pricing from "../../Components/Pricing/Pricing";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
