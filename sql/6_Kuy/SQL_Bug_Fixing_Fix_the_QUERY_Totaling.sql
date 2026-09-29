-- https://www.codewars.com/kata/582cba7d3be8ce3a8300007c/train/sql

-- code to fix 

/*
SELECT 
  s.transaction_date as day,
  d.name,
  COUNT(s.id)
  FROM department d
    JOIN sale s on d.id = s.id
  group by day, d.name
  order by name desc
*/

SELECT 
  s.transaction_date::date as day,
  d.name department, 
  COUNT(s.department_id) sale_count
  FROM department d
    JOIN sale s on d.id = s.department_id
  group by day, d.name
  order by day