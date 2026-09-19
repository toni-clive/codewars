-- https://www.codewars.com/kata/5c0ae69d5f72394e130025f6/train/sql

SELECT name,greeting, substring(substring
(
    greeting,
    '#\d{1,}'
),2) user_id FROM greetings;