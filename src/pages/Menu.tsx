
import { useState, useEffect } from "react";
import { menuCategories, getMenuItemsByCategory } from "../data/menu";
import MenuCard from "../components/MenuCard";
import { Button } from "@/components/ui/button";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [filteredItems, setFilteredItems] = useState(getMenuItemsByCategory(menuCategories[0].id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilteredItems(getMenuItemsByCategory(activeCategory));
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-brand-dark py-16 px-4">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Our <span className="text-brand-blue">Menu</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our wide selection of authentic Nepalese-Australian fusion dishes.
          </p>
        </div>
        
        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full px-6 py-2 ${
                activeCategory === category.id 
                  ? "bg-brand-blue text-white" 
                  : "bg-transparent text-gray-300 border-gray-600 hover:bg-gray-800"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="animate-fade-in">
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
