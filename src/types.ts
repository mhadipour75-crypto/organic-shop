export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string | null;
  stock: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image_url: string | null;
  quantity: number;
}

export interface OrderData {
  customer_name: string;
  customer_phone: string;
  customer_address: string;
  customer_postal_code: string;
  items: CartItem[];
  total_price: number;
}

export interface OrderResult {
  id: string;
  customer_name: string;
  customer_phone: string;
  customer_address: string;
  customer_postal_code: string;
  items: CartItem[];
  total_price: number;
  order_status: string;
  created_at: string;
}
