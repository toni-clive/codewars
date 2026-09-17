-- https://www.codewars.com/kata/64d0a934e630d8bee9afd27f/train/sql

with v2 as(SELECT product_id,	date,
MAX(price) 
OVER(PARTITION BY product_id ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING) p_price,
price FROM bids)
SELECT 
product_id
,ROW_NUMBER() OVER(PARTITION BY product_id ORDER BY date) bid_number
,date::varchar date,price
,CASE WHEN price = (SELECT MAX(price) FROM v2 v WHERE v.product_id = v2.product_id)
THEN ROUND(price::numeric/(FIRST_VALUE(price) OVER (
    PARTITION BY product_id
    ORDER BY date 
)),2)
ELSE NULL
END  times_higher  FROM v2 WHERE p_price IS NULL OR p_price < price 