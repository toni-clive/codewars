-- https://www.codewars.com/kata/58126aa90ea99769e7000119/train/sql

CREATE EXTENSION tablefunc;

-- Create your CROSSTAB statement here

SELECT name,good,bad,ok FROM 
CROSSTAB(
    'SELECT product_id,detail,COUNT(*)::int
    FROM details GROUP BY cube(product_id,detail)
    ORDER BY product_id,detail',
    'VALUES(''good'') , (''bad''), (''ok'')'
) AS
ct(product_id integer, 
  good bigint,
  bad integer,
ok integer
) JOIN products p ON p.id = ct.product_id ORDER BY name