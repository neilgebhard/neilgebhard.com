import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export default function Header() {
  const [menuIsOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600 ? true : false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  return isMobile ? (
    <MobileNavbar
      handleStateChange={handleStateChange}
      setIsMenuOpen={setIsMenuOpen}
      menuIsOpen={menuIsOpen}
    />
  ) : (
    <Navbar />
  );
}
