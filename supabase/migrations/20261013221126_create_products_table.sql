/*
# Create products table for organic fruit store

1. New Tables
- `products`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — product name in Persian
  - `description` (text, not null) — short product description in Persian
  - `price` (integer, not null) — price in Toman (Iranian currency)
  - `image_url` (text) — URL or emoji placeholder for the product image
  - `stock` (integer, not null, default 0) — available inventory count
  - `created_at` (timestamptz, defaults to now) — record creation timestamp

2. Security
- Enable RLS on `products`.
- Allow anon + authenticated to SELECT (public catalog, no sign-in needed).
- No insert/update/delete policies for anon — product management is admin-only via dashboard.

3. Sample Data
- Insert 3 rows: سیب ارگانیک (Apple), پرتقال شمال (Orange), انگور یاقوتی (Grape).
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price integer NOT NULL,
  image_url text,
  stock integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_products" ON products;
CREATE POLICY "anon_select_products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO products (name, description, price, image_url, stock) VALUES
  ('سیب ارگانیک', 'سیب تازه و ارگانیک، برداشت شده از باغ‌های شمال کشور', 45000, '🍎', 120),
  ('پرتقال شمال', 'پرتقال آبدار و شیرین، سرشار از ویتامین C', 38000, '🍊', 85),
  ('انگور یاقوتی', 'انگور یاقوتی خوش‌طعم و تازه، از تاکستان‌های منتخب', 62000, '🍇', 60)
ON CONFLICT DO NOTHING;
