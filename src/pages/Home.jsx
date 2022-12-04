import data from "data";
import Navigation from "components/common/Navigation";
import Hero from "components/sections/Hero";
import Info from "components/sections/Info";
import Services from "components/sections/Services";
import Ads from "components/sections/Ads";
import Footer from "components/sections/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Info data={data.home1} />
      <Services />
      <Ads />
      <Info data={data.home2} />
      <Footer />
    </>
  );
};

export default Home;
