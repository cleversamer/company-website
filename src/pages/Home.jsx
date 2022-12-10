import data from "data";
import Navigation from "components/navigation";
import Info from "components/sections/Info";
import Gifts from "components/sections/Gifts";
import Ads from "components/sections/Ads";
import Footer from "components/sections/Footer";
import Partners from "components/sections/Partners";

const Home = () => {
  return (
    <>
      <Navigation />
      <Info data={data.home1} />
      <Gifts />
      <Ads />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
