
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-[#111]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605331804386-8defbf945643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Our Story" 
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our <span className="text-brand-blue">Story</span></h2>
            <p className="text-gray-300 mb-4">
              Hoodie and Foodie was born from a passion for authentic Nepalese cuisine and a love for the vibrant Australian food scene. Our founder, who moved to Australia from Nepal, wanted to share the rich flavors of his homeland while embracing the fresh, local ingredients of his new home.
            </p>
            <p className="text-gray-300 mb-6">
              What started as a small food stall at local markets has grown into one of the most popular food trucks in the area, with a loyal following of food enthusiasts who appreciate our unique fusion of Nepalese and Australian cuisines.
            </p>
            <p className="text-gray-300 mb-6">
              Every dish we serve is handcrafted with love and care, using traditional recipes and techniques passed down through generations, but with a modern Australian twist that makes them truly unique.
            </p>
            <Link to="/contact">
              <Button className="btn-outline">
                Find Our Truck
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
