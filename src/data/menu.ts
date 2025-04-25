
export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: 'momo' | 'noodles' | 'snacks' | 'other';
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "steam-momo",
    name: "Steam Momo",
    price: "13",
    description: "Traditional Nepalese steamed dumplings filled with minced meat or vegetables, served with tomato sauce.",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "momo",
    featured: true
  },
  {
    id: "jhol-momo",
    name: "Jhol Momo",
    price: "14",
    description: "Steamed momos served in a spicy, tangy broth made from tomatoes, sesame, and various spices.",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "momo",
    featured: true
  },
  {
    id: "fry-momo",
    name: "Fry Momo",
    price: "14",
    description: "Pan-fried momos with a crispy exterior and juicy filling, served with dipping sauce.",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "momo"
  },
  {
    id: "chilly-momo",
    name: "Chilly Momo",
    price: "15",
    description: "Fried momos tossed in a spicy chili sauce with bell peppers and onions.",
    image: "https://images.unsplash.com/photo-1568126336768-fb4e4f3c8418?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "momo"
  },
  {
    id: "syaphale",
    name: "Syaphale",
    price: "12",
    description: "Tibetan-style fried bread stuffed with minced meat and vegetables.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "snacks"
  },
  {
    id: "chowmen-veg",
    name: "Chowmen (Veg)",
    price: "13",
    description: "Stir-fried noodles with seasonal vegetables in a savory sauce.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "noodles"
  },
  {
    id: "chowmen-chicken",
    name: "Chowmen (Chicken)",
    price: "14",
    description: "Stir-fried noodles with tender chicken and vegetables.",
    image: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "noodles",
    featured: true
  },
  {
    id: "chowmen-buff",
    name: "Chowmen (Buff)",
    price: "16",
    description: "Stir-fried noodles with thinly sliced buffalo meat and vegetables.",
    image: "https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "noodles"
  },
  {
    id: "aalu-chop",
    name: "Aalu Chop",
    price: "6",
    description: "Spiced potato patties coated with a gram flour batter and deep-fried.",
    image: "https://images.unsplash.com/photo-1623689046286-01d371223f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "snacks",
    featured: true
  },
  {
    id: "pani-puri",
    name: "Pani Puri",
    price: "10",
    description: "Crispy hollow puri filled with a mixture of flavored water, tamarind chutney, chickpeas, and potatoes.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "snacks"
  },
  {
    id: "sausage",
    name: "Sausage",
    price: "10",
    description: "Grilled traditional Australian sausages served with onions and sauce.",
    image: "https://images.unsplash.com/photo-1597712679425-b54e108773e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "other"
  },
  {
    id: "fish-and-chips",
    name: "Fish and Chips",
    price: "10",
    description: "Classic Australian beer-battered fish with thick-cut fries.",
    image: "https://images.unsplash.com/photo-1576777647209-e8733d7b851d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "other"
  },
  {
    id: "nuggets",
    name: "Nuggets",
    price: "5",
    description: "Golden fried chicken nuggets served with choice of dipping sauce.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "snacks"
  },
  {
    id: "scallops",
    name: "Scallops",
    price: "5",
    description: "Breaded potato scallops, deep-fried until golden and crispy.",
    image: "https://images.unsplash.com/photo-1559742949-9d334d9a555f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "snacks"
  },
  {
    id: "chips",
    name: "Chips",
    price: "5",
    description: "Thick-cut Australian-style fries served with your choice of sauce.",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "snacks"
  },
  {
    id: "hot-dog",
    name: "Hot Dog",
    price: "8",
    description: "Classic hot dog with sausage, onions, and condiments in a soft bun.",
    image: "https://images.unsplash.com/photo-1612392166886-ee8475b03af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "other"
  },
  {
    id: "drinks",
    name: "Drinks",
    price: "3",
    description: "Selection of soft drinks, water, and juices.",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "other"
  },
  {
    id: "masala-tea",
    name: "Masala Tea",
    price: "4",
    description: "Traditional spiced tea with milk, ginger, cardamom, and other aromatic spices.",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "other",
    featured: true
  },
  {
    id: "chatpat",
    name: "Chatpat",
    price: "8",
    description: "Spicy Nepalese street food made with puffed rice, potatoes, chickpeas, and tangy sauce.",
    image: "https://images.unsplash.com/photo-1639461053503-bedb7bc99bdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "snacks"
  },
  {
    id: "aalu-stick",
    name: "Aalu Stick",
    price: "8",
    description: "Crispy potato sticks seasoned with spices and herbs.",
    image: "https://images.unsplash.com/photo-1623238912680-26fc5ffb57e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "snacks"
  },
  {
    id: "masala-sausage",
    name: "Masala Sausage",
    price: "11",
    description: "Australian sausages cooked with Indian spices and served with onions.",
    image: "https://images.unsplash.com/photo-1628847022229-d8f9a50360d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "other"
  },
  {
    id: "sukuti-set",
    name: "Sukuti Set",
    price: "20",
    description: "Traditional Nepalese dried meat platter with beaten rice, pickle, and other accompaniments.",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "other"
  }
];

export const getMenuItemById = (id: string): MenuItem | undefined => {
  return menuItems.find(item => item.id === id);
};

export const getFeaturedMenuItems = (): MenuItem[] => {
  return menuItems.filter(item => item.featured);
};

export const getMenuItemsByCategory = (category: string): MenuItem[] => {
  return menuItems.filter(item => item.category === category);
};

export const menuCategories = [
  { id: 'momo', name: 'Momos' },
  { id: 'noodles', name: 'Noodles' },
  { id: 'snacks', name: 'Snacks' },
  { id: 'other', name: 'Other Items' },
];
