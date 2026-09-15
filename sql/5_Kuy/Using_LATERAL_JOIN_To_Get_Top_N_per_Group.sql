-- https://www.codewars.com/kata/5820176255c3d23f360000a9/train/sql

SELECT c.id category_id, c.category, p.title, p.views,p.id post_id
FROM categories c
LEFT JOIN  LATERAL (SELECT * FROM posts p WHERE c.id = p.category_id ORDER BY views DESC,c.id LIMIT 2) as p 
ON true ORDER BY c.category, p.views DESC, p.id 


