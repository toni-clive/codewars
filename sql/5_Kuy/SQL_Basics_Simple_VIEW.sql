-- https://www.codewars.com/kata/5811527d9d278b242f000006/train/sql


-- first solution 
with d_sales AS (SELECT d.*,SUM(p.price) total FROM departments d LEFT JOIN sales s ON d.id = s.department_id LEFT JOIN products p
ON p.id = s.product_id GROUP BY d.id HAVING SUM(p.price)>10000)
, member_sales AS (SELECT s.member_id, SUM(p.price) FROM sales s JOIN products p  ON s.product_id = p.id
JOIN d_sales ON s.department_id = d_sales.id GROUP BY s.member_id HAVING SUM(p.price)>1000)
, member_dept_spent AS (SELECT DISTINCT s.member_id,s.department_id FROM sales s)


SELECT ms.member_id as id,m.name, m.email,ms.sum total_spending 
FROM members m JOIN member_sales ms ON m.id = ms.member_id

-- second
CREATE VIEW members_approved_for_voucher AS
 with d_sales AS(
   SELECT d.id FROM departments d 
  LEFT JOIN sales s ON d.id = s.department_id LEFT JOIN products p
  ON p.id = s.product_id GROUP BY d.id HAVING SUM(p.price)>10000)
  SELECT s.member_id id,m.name, m.email, SUM(p.price) total_spending
  FROM sales s JOIN products p  ON s.product_id = p.id
  JOIN members m ON m.id=s.member_id WHERE s.department_id IN (SELECT id FROM d_sales)
  GROUP BY s.member_id,m.name,m.email HAVING SUM(p.price)>1000 ORDER BY id;

SELECT * FROM members_approved_for_voucher;