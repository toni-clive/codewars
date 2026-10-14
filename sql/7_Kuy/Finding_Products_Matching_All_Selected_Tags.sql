-- https://www.codewars.com/kata/67741444c77444b19e8b5223/train/sql

SELECT DISTINCT pt1.product_id from product_tags pt1 JOIN product_tags pt2 ON pt1.product_id = pt2.product_id 
WHERE pt1.tag = 'Electronics' AND pt2.tag = 'Gadgets' ORDER BY product_id DESC;

SELECT   product_id from product_tags GROUP BY product_id HAVING ARRAY_AGG(tag) @> ARRAY['Electronics','Gadgets'] ORDER BY product_id DESC;

SELECT product_id from product_tags
WHERE tag IN ('Electronics', 'Gadgets') GROUP BY product_id HAVING COUNT(DISTINCT tag)=2 ORDER BY product_id DESC ;