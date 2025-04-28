import { useState, useEffect, FormEvent } from "react";
import { menuItems } from "../data/menu";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface OrderItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

const Order = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [abn, setAbn] = useState("");
  const [isDelivery, setIsDelivery] = useState(false);
  const [notes, setNotes] = useState("");
  const [selectedItems, setSelectedItems] = useState<OrderItem[]>([]);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateABN = (abn: string) => {
    if (!abn) return true; // ABN is optional
    
    // Remove spaces and check if it's 11 digits
    const cleanABN = abn.replace(/\s/g, "");
    const abnRegex = /^\d{11}$/;
    
    return abnRegex.test(cleanABN);
  };
  
  const validatePhone = (phone: string) => {
    const phoneRegex = /^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/;
    return phoneRegex.test(phone);
  };
  
  const handleAddItem = (itemId: string) => {
    const existingItem = selectedItems.find(item => item.id === itemId);
    
    if (existingItem) {
      setSelectedItems(selectedItems.map(item => 
        item.id === itemId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      const menuItem = menuItems.find(item => item.id === itemId);
      if (menuItem) {
        setSelectedItems([
          ...selectedItems, 
          { 
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1
          }
        ]);
      }
    }
  };
  
  const handleRemoveItem = (itemId: string) => {
    const existingItem = selectedItems.find(item => item.id === itemId);
    
    if (existingItem && existingItem.quantity > 1) {
      setSelectedItems(selectedItems.map(item => 
        item.id === itemId 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ));
    } else {
      setSelectedItems(selectedItems.filter(item => item.id !== itemId));
    }
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity);
    }, 0).toFixed(2);
  };

  const formatABN = (abnInput: string) => {
    // Remove all non-digits
    const digits = abnInput.replace(/\D/g, '');
    
    // Format as XX XXX XXX XXX (with spaces)
    if (digits.length <= 2) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 2)} ${digits.slice(2)}`;
    if (digits.length <= 8) return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
    return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 11)}`;
  };

  const handleAbnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedABN = formatABN(e.target.value);
    setAbn(formattedABN);
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const errors: {[key: string]: string} = {};
    
    if (!name.trim()) errors.name = "Name is required";
    if (!phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(phone)) {
      errors.phone = "Please enter a valid Australian phone number";
    }
    
    if (abn && !validateABN(abn)) {
      errors.abn = "Please enter a valid ABN (11 digits)";
    }
    
    if (selectedItems.length === 0) {
      errors.items = "Please select at least one item to order";
    }
    
    setValidationErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      // Construct WhatsApp message
      let message = "Hi, I'd like to order:\n";
      
      selectedItems.forEach(item => {
        message += `- ${item.name} x${item.quantity}\n`;
      });
      
      message += `\nName: ${name}\n`;
      message += `Phone: ${phone}\n`;
      
      if (abn) {
        message += `ABN: ${abn}\n`;
      }
      
      message += `${isDelivery ? 'Delivery' : 'Pickup'}\n`;
      
      if (notes) {
        message += `\nNotes: ${notes}`;
      }
      
      // Encode the message for the URL
      const encodedMessage = encodeURIComponent(message);
      
      // Redirect to WhatsApp with updated number
      window.open(`https://wa.me/+610403959785?text=${encodedMessage}`, '_blank');
      
      toast({
        title: "Order Submitted!",
        description: "Your order has been sent to WhatsApp. Please complete the process there.",
      });
      
      // Reset form
      setName("");
      setPhone("");
      setAbn("");
      setIsDelivery(false);
      setNotes("");
      setSelectedItems([]);
      
      // Navigate back to home
      navigate("/");
    }
  };
  
  return (
    <div className="min-h-screen bg-brand-dark py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Place Your <span className="text-brand-blue">Order</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Order ahead and skip the queue! Fill out the form below to place your order via WhatsApp.
          </p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-lg p-6 shadow-xl">
          <form onSubmit={handleSubmit}>
            {/* Customer Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#262626] text-white rounded-md px-4 py-2 border border-gray-700 focus:border-brand-blue focus:outline-none"
                    placeholder="Your Name"
                  />
                  {validationErrors.name && (
                    <p className="mt-1 text-red-500 text-sm">{validationErrors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#262626] text-white rounded-md px-4 py-2 border border-gray-700 focus:border-brand-blue focus:outline-none"
                    placeholder="04XX XXX XXX"
                  />
                  {validationErrors.phone && (
                    <p className="mt-1 text-red-500 text-sm">{validationErrors.phone}</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-300 mb-2">ABN (Optional)</label>
                <input
                  type="text"
                  value={abn}
                  onChange={handleAbnChange}
                  className="w-full bg-[#262626] text-white rounded-md px-4 py-2 border border-gray-700 focus:border-brand-blue focus:outline-none"
                  placeholder="XX XXX XXX XXX"
                  maxLength={14} // XX XXX XXX XXX format with spaces
                />
                {validationErrors.abn && (
                  <p className="mt-1 text-red-500 text-sm">{validationErrors.abn}</p>
                )}
              </div>
            </div>
            
            {/* Order Items */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">Select Items</h2>
              <div className="mb-4">
                <select
                  className="w-full bg-[#262626] text-white rounded-md px-4 py-3 border border-gray-700 focus:border-brand-blue focus:outline-none"
                  onChange={(e) => handleAddItem(e.target.value)}
                  value=""
                >
                  <option value="" disabled>Select an item to add</option>
                  {menuItems.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name} - ${item.price}
                    </option>
                  ))}
                </select>
                {validationErrors.items && (
                  <p className="mt-1 text-red-500 text-sm">{validationErrors.items}</p>
                )}
              </div>
              
              {/* Selected Items */}
              <div className="bg-[#262626] rounded-md p-4 mb-4">
                <h3 className="text-white font-semibold mb-2">Your Order</h3>
                {selectedItems.length === 0 ? (
                  <p className="text-gray-400">No items selected yet</p>
                ) : (
                  <div>
                    {selectedItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0">
                        <div>
                          <p className="text-white">{item.name}</p>
                          <p className="text-gray-400 text-sm">${item.price} each</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(item.id)}
                            className="bg-gray-800 text-white px-2 py-1 rounded-md hover:bg-gray-700"
                          >
                            -
                          </button>
                          <span className="text-white">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => handleAddItem(item.id)}
                            className="bg-gray-800 text-white px-2 py-1 rounded-md hover:bg-gray-700"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="mt-4 flex justify-between items-center pt-2 border-t border-gray-700">
                      <span className="font-semibold text-white">Total:</span>
                      <span className="text-brand-blue font-bold">${calculateTotal()}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Order Options */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">Order Options</h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="pickup"
                    name="orderType"
                    checked={!isDelivery}
                    onChange={() => setIsDelivery(false)}
                    className="mr-2 h-4 w-4 accent-brand-blue"
                  />
                  <label htmlFor="pickup" className="text-gray-300">Pickup</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="delivery"
                    name="orderType"
                    checked={isDelivery}
                    onChange={() => setIsDelivery(true)}
                    className="mr-2 h-4 w-4 accent-brand-blue"
                  />
                  <label htmlFor="delivery" className="text-gray-300">Delivery</label>
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Special Instructions (Optional)</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#262626] text-white rounded-md px-4 py-2 border border-gray-700 focus:border-brand-blue focus:outline-none"
                  placeholder="Allergies, special preparation requests, or delivery instructions"
                  rows={3}
                ></textarea>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                type="submit"
                className="bg-brand-blue hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full text-lg"
              >
                Place Order via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
