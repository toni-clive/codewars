-- https://www.codewars.com/kata/5811501c2d35672d4f000146/train/sql

WITH special_sales AS( SELECT * FROM sales WHERE price > 90)
SELECT d.* FROM departments d  WHERE id IN (SELECT department_id FROM special_sales)
