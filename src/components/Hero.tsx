
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Food Truck" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center md:text-left">
        <div className="md:max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in">
            Street Food with <span className="text-brand-blue">Soul</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-white mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Delivered with Style
          </h2>
          <p className="text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Discover the authentic taste of Nepal with an Australian twist. 
            Our food truck brings you handcrafted momos, sizzling noodles, 
            and fusion delights that you won't find anywhere else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/menu">
              <Button className="btn-primary w-full sm:w-auto">
                View Menu
              </Button>
            </Link>
            <Link to="/order">
              <Button className="btn-outline w-full sm:w-auto">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
