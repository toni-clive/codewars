-- https://www.codewars.com/kata/6482f40455c862529b38992a/train/sql

WITH managers AS (SELECT manager_id FROM employees GROUP BY manager_id)
SELECT m.manager_id,ARRAY(SELECT name ||' '||'('||id||')' FROM employees WHERE m.manager_id = employees.manager_id ORDER BY id) employee_names FROM managers m
WHERE m.manager_id IS NOT NULL
ORDER BY m.manager_id