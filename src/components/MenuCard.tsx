
import { MenuItem } from "../data/menu";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MenuCardProps {
  item: MenuItem;
  onOrder?: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onOrder }) => {
  const handleOrder = () => {
    if (onOrder) {
      onOrder(item);
    }
  };

  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white">{item.name}</h3>
          <span className="bg-brand-blue text-white px-2 py-1 rounded-full text-sm font-semibold">
            ${item.price}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{item.description}</p>
        <div className="mt-auto">
          {onOrder ? (
            <Button 
              onClick={handleOrder}
              className="w-full bg-brand-blue hover:bg-opacity-90 transition-colors text-white rounded-full"
            >
              Add to Order
            </Button>
          ) : (
            <Link to="/order">
              <Button className="w-full bg-brand-blue hover:bg-opacity-90 transition-colors text-white rounded-full">
                Order Now
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
