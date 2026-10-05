-- https://www.codewars.com/kata/581fb63e70ca28d92500000d/train/sql

-- Query to optimize
/*
SELECT e.employee_id,
       e.first_name,
       e.last_name,
       d.department_name,
       e.salary AS old_salary,
       e.salary * (1 + pctIncrease(e.department_id)) AS new_salary
  FROM employees   e,
       departments d
 WHERE e.department_id = d.department_id
 ORDER BY 1;
*/

WITH increases AS (
SELECT department_id,department_name,1+pctIncrease(department_id) i FROM departments)
SELECT e.employee_id,
       e.first_name,
       e.last_name,
       d.department_name,
       e.salary AS old_salary,
       e.salary * i new_salary
  FROM employees   e JOIN
       increases d
 ON e.department_id = d.department_id
ORDER BY employee_id;