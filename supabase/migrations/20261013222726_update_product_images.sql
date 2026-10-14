/*
# Update product image_url fields with real Pexels photo URLs

1. Changes
- Update all 6 products to use real fruit photography URLs from Pexels.
- No schema changes, no price/name/description changes.
*/

UPDATE products SET image_url = 'https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' WHERE name = 'سیب ارگانیک دماوند';
UPDATE products SET image_url = 'https://images.pexels.com/photos/37543950/pexels-photo-37543950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' WHERE name = 'پرتقال شمال';
UPDATE products SET image_url = 'https://images.pexels.com/photos/39334662/pexels-photo-39334662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' WHERE name = 'انگور یاقوتی';
UPDATE products SET image_url = 'https://images.pexels.com/photos/37240848/pexels-photo-37240848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' WHERE name = 'توت‌فرنگی ارگانیک';
UPDATE products SET image_url = 'https://images.pexels.com/photos/17245317/pexels-photo-17245317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' WHERE name = 'انار قرمز';
UPDATE products SET image_url = 'https://images.pexels.com/photos/8743922/pexels-photo-8743922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' WHERE name = 'هندوانه شیرین';
