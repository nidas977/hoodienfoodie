import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Order", path: "/order" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="bg-brand-dark py-4 px-4 md:px-8 sticky top-0 z-50 shadow-md">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`font-medium transition-colors duration-300 hover:text-brand-blue ${
                location.pathname === item.path 
                  ? "text-brand-blue" 
                  : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/0403959785" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            WhatsApp Us
          </a>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-brand-dark border-t border-gray-800 py-4 shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-2 transition-colors duration-300 hover:text-brand-blue ${
                    location.pathname === item.path 
                      ? "text-brand-blue" 
                      : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/0403959785" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
