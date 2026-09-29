-- http://codewars.com/kata/58113a64e10b53ec36000293/train/sql

SELECT d.* FROM departments d WHERE EXISTS (SELECT * FROM sales WHERE d.id= sales.department_id AND price > 98)
