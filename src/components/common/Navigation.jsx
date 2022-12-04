import { useState } from "react";
import Navbar from "components/navigation/Navbar";
import Sidebar from "components/navigation/Sidebar";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isOpen} onCloseMenu={() => setOpen(false)} />
      <Navbar onOpenMenu={() => setOpen(true)} />
    </>
  );
};

export default Navigation;
