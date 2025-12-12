export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isTrending?: boolean;
  isSpicy?: boolean;
  image?: string;
  outOfStock?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: 'Swiggy' | 'Justdial' | 'Google';
  date: string;
}

export interface BusinessSettings {
  name: string;
  phone: string;
  whatsapp: string;
  address: string;
  mapsLink: string;
  swiggyLink: string;
  facebookLink: string;
  linkedinLink: string;
  timings: string;
  email?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'Food' | 'Shop' | 'Customers';
  caption: string;
}