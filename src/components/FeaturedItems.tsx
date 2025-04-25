
import { useState, useEffect } from "react";
import { MenuItem, getFeaturedMenuItems } from "../data/menu";
import MenuCard from "./MenuCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedItems = () => {
  const [featuredItems, setFeaturedItems] = useState<MenuItem[]>([]);
  
  useEffect(() => {
    const items = getFeaturedMenuItems();
    setFeaturedItems(items);
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Featured <span className="text-brand-blue">Dishes</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our most popular dishes that blend authentic Nepalese flavors with Australian culinary traditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="animate-slide-up">
              <MenuCard item={item} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/menu">
            <Button className="btn-outline">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
