import { useState } from "react";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Hero from "components/Hero";

const Home = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isOpen} onCloseMenu={() => setOpen(false)} />
      <Navbar onOpenMenu={() => setOpen(true)} />
      <Hero />
    </>
  );
};

export default Home;
