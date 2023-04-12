import data from "data";
import Navigation from "components/navigation";
import Info from "components/sections/Info";
import Gifts from "components/sections/Gifts";
import Ads from "components/sections/Ads";
import Partners from "components/sections/Partners";
import Footer from "components/sections/Footer";
import AnimatedFooter from "components/sections/AnimatedFooter";

const Home = () => {
  return (
    <>
      <Navigation />
      <Info data={data.home1} />
      <Gifts />
      <Ads />
      <Partners />
      <AnimatedFooter />
    </>
  );
};

export default Home;
