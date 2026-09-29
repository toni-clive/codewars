-- https://www.codewars.com/kata/58094559c47d323ebd000035/train/sql

SELECT totals.*,RANK() OVER(ORDER BY sale_count DESC) sale_rank  FROM (SELECT p.*,COUNT(sale) sale_count FROM people p JOIN sales s ON p.id = s.people_id  GROUP BY p.id) totals
