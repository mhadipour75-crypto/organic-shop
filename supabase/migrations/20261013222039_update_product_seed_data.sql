/*
# Update product seed data with new names, descriptions, and prices

1. Changes
- Update all 3 existing product rows with new Persian names, descriptions, and prices.
- Stock values kept reasonable for a live store.
- No schema changes — columns remain: id, name, description, price, image_url, stock, created_at.

2. Security
- No policy changes. RLS remains enabled with anon SELECT policy.

3. Updated Rows
- سیب ارگانیک دماوند — 45000 Toman — برداشت مستقیم از باغ‌های دماوند، شیرین و آبدار
- پرتقال شمال — 38000 Toman — سرشار از ویتامین C، بدون هیچ‌گونه مواد شیمیایی
- انگور یاقوتی — 60000 Toman — طعم بی‌نظیر و طبیعی، مناسب برای پذیرایی
*/

UPDATE products SET name = 'سیب ارگانیک دماوند', description = 'برداشت مستقیم از باغ‌های دماوند، شیرین و آبدار', price = 45000, image_url = '🍎', stock = 120 WHERE name LIKE 'سیب%';

UPDATE products SET name = 'پرتقال شمال', description = 'سرشار از ویتامین C، بدون هیچ‌گونه مواد شیمیایی', price = 38000, image_url = '🍊', stock = 85 WHERE name LIKE 'پرتقال%';

UPDATE products SET name = 'انگور یاقوتی', description = 'طعم بی‌نظیر و طبیعی، مناسب برای پذیرایی', price = 60000, image_url = '🍇', stock = 60 WHERE name LIKE 'انگور%';
