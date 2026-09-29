-- https://www.codewars.com/kata/5812a2a2492760dfca000450/train/sql

 WITH recursive employee_levels AS (SELECT 1 as level,id,	first_name,	last_name FROM employees WHERE manager_id IS NULL
                    UNION ALL
                    SELECT level+1,ee.id,ee.first_name, ee.last_name FROM 
                      employees ee JOIN employee_levels ON employee_levels.id = ee.manager_id)
                    
SELECT employee_levels.*,ee.manager_id FROM employee_levels JOIN employees ee ON employee_levels.id = ee.id