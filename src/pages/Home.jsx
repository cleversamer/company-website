import { useState } from "react";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";

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
