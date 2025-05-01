import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./ui/Button";
import Container from "./ui/Container";
import WalletLogo from "./ui/WalletLogo";
import LoginModal from "./ui/LoginModal";
import SigninModal from "./ui/SigninModal";
import ContactUs from "./ui/ContactUs";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <WalletLogo />
            <span className="ml-2 text-xl font-bold text-blue-950">
              RockWallet
            </span> */}
            <img src="https://cdn.prod.website-files.com/636012218b483e2e5e98b3e4/6360316485f6cb0f029d91b3_RW_OneLine_Black.png"  width="200px" height="40px" sizes="(max-width: 479px) 96vw, 396px" alt="" className="header-logo"/>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks onContactClick={() => setShowContact(true)} />
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowLogin(true)}
            >
              Log In
            </Button>
            <Button size="sm" onClick={() => setShowSignin(true)}>
              Sign Up
            </Button>
          </div>

          <button className="lg:hidden text-blue-950" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <SigninModal isOpen={showSignin} onClose={() => setShowSignin(false)} />
      <ContactUs isOpen={showContact} onClose={() => setShowContact(false)} />

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
          <Container>
            <div className="flex flex-col space-y-4">
              <MobileNavLinks
                closeMenu={() => setIsMenuOpen(false)}
                onContactClick={() => setShowContact(true)}
              />
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => setShowLogin(true)}
                >
                  Log In
                </Button>
                <Button fullWidth onClick={() => setShowSignin(true)}>
                  Sign Up
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

const NavLinks: React.FC<{ onContactClick: () => void }> = ({
  onContactClick,
}) => {
  return (
    <>
      <div className="relative group">
        <button className="flex items-center text-blue-950 font-medium hover:text-blue-600 transition-colors">
          Help Center <ChevronDown className="ml-1 w-4 h-4" />
        </button>
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Buy & Sell
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Learn
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="text-blue-950 font-medium hover:text-blue-600 transition-colors"
      >
        About Us
      </a>
      <a
        href="#"
        className="text-blue-950 font-medium hover:text-blue-600 transition-colors"
      >
        Trading Desk
      </a>
      <button
        onClick={onContactClick}
        className="text-blue-950 font-medium hover:text-blue-600 transition-colors"
      >
        Contact Us
      </button>
    </>
  );
};

const MobileNavLinks: React.FC<{
  closeMenu: () => void;
  onContactClick: () => void;
}> = ({ closeMenu, onContactClick }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <div>
        <button
          className="flex items-center justify-between w-full py-2 text-blue-950 font-medium"
          onClick={() => toggleDropdown("products")}
        >
          Help Center{" "}
          <ChevronDown
            className={`ml-1 w-4 h-4 transition-transform ${
              openDropdown === "products" ? "rotate-180" : ""
            }`}
          />
        </button>
        {openDropdown === "products" && (
          <div className="pl-4 py-2 space-y-2">
            <a
              href="#"
              className="block py-1 text-gray-700"
              onClick={closeMenu}
            >
              Buy & Sell
            </a>
            <a
              href="#"
              className="block py-1 text-gray-700"
              onClick={closeMenu}
            >
              Learn
            </a>
            <a
              href="#"
              className="block py-1 text-gray-700"
              onClick={closeMenu}
            >
              FAQ
            </a>
          </div>
        )}
      </div>
      <a
        href="#"
        className="block py-2 text-blue-950 font-medium"
        onClick={closeMenu}
      >
        About Us
      </a>
      <a
        href="#"
        className="block py-2 text-blue-950 font-medium"
        onClick={closeMenu}
      >
        Trading Desk
      </a>
      <button
        onClick={() => {
          closeMenu();
          onContactClick();
        }}
        className="block py-2 text-left text-blue-950 font-medium w-full"
      >
        Contact Us
      </button>
    </>
  );
};

export default Header;