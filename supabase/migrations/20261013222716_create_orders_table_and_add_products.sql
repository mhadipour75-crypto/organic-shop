/*
# Create orders table and add 3 new products

1. New Tables
- `orders`
  - `id` (uuid, primary key, auto-generated)
  - `customer_name` (text, not null) — customer's full name
  - `customer_phone` (text, not null) — customer's mobile number
  - `customer_address` (text, not null) — shipping address
  - `customer_postal_code` (text, not null) — postal code
  - `items` (jsonb, not null) — array of {id, name, price, quantity, image_url}
  - `total_price` (integer, not null) — total order amount in Toman
  - `order_status` (text, default 'pending') — pending, paid, shipped, delivered
  - `created_at` (timestamptz, default now()) — order timestamp

2. New Products
- Add 3 new rows to `products`: توت‌فرنگی ارگانیک, انار قرمز, هندوانه شیرین

3. Security
- Enable RLS on `orders`.
- Allow anon + authenticated to INSERT (customers place orders without login).
- Allow anon + authenticated to SELECT (order confirmation reads by ID).
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_address text NOT NULL,
  customer_postal_code text NOT NULL,
  items jsonb NOT NULL,
  total_price integer NOT NULL,
  order_status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_orders" ON orders;
CREATE POLICY "anon_insert_orders"
  ON orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_orders" ON orders;
CREATE POLICY "anon_select_orders"
  ON orders FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO products (name, description, price, image_url, stock) VALUES
  ('توت‌فرنگی ارگانیک', 'توت‌فرنگی تازه و ارگانیک، شیرین و آبدار', 55000, '🍓', 90),
  ('انار قرمز', 'انار قرمز و آبدار، سرشار از آنتی‌اکسیدان', 70000, '🍑', 50),
  ('هندوانه شیرین', 'هندوانه شیرین و خنک، برداشت از مزارع منتخب', 35000, '🍉', 200)
ON CONFLICT DO NOTHING;
