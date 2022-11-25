import { useState } from "react";
import data from "data";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Hero from "components/Hero";
import Info from "components/Info";

const Home = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isOpen} onCloseMenu={() => setOpen(false)} />
      <Navbar onOpenMenu={() => setOpen(true)} />
      <Hero />
      <Info data={data.home1} />
      <Info data={data.home2} />
      <Info data={data.home3} />
    </>
  );
};

export default Home;
