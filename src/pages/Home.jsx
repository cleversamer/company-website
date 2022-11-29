import { useState } from "react";
import data from "data";
import Navbar from "components/navigation/Navbar";
import Sidebar from "components/navigation/Sidebar";
import Hero from "components/sections/Hero";
import Info from "components/sections/Info";
import Services from "components/sections/Services";
import Ads from "components/sections/Ads";
import Footer from "components/sections/Footer";

const Home = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isOpen} onCloseMenu={() => setOpen(false)} />
      <Navbar onOpenMenu={() => setOpen(true)} />
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
