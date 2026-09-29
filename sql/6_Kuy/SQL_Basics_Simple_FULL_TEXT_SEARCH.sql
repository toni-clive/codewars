-- https://www.codewars.com/kata/581676828906324b8b00059e/train/sql

SELECT * FROM product WHERE to_tsvector('english' ,name) @@ to_tsquery('english', 'Awesome');;
