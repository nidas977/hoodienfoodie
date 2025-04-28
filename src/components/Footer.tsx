import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black pt-12 pb-6 px-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-brand-blue">Hoodie</span> & <span className="text-white">Foodie</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Street Food with Soul – Delivered with Style. Authentic Nepalese-Australian fusion cuisine.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/hoodieandfoodie" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-brand-blue transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://wa.me/0403959785" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-brand-blue transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-brand-blue transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-gray-300 hover:text-brand-blue transition-colors">
                  Order Online
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 11am - 9pm</li>
              <li>Saturday: 12pm - 10pm</li>
              <li>Sunday: 12pm - 8pm</li>
            </ul>
            <p className="mt-4 text-gray-300">
              <strong className="text-brand-blue">Phone:</strong> +61 0403 959 785
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Hoodie & Foodie. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
