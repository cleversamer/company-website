import { useState } from "react";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const Home = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isOpen} onCloseMenu={() => setOpen(false)} />
      <Navbar onOpenMenu={() => setOpen(true)} />
    </>
  );
};

export default Home;
