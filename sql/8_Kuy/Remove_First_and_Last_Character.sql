-- http://codewars.com/kata/56bc28ad5bdaeb48760009b0/train/sql

SELECT s,CASE WHEN LENGTH(s) <=2 THEN ''ELSE SUBSTRING(s,2,LENGTH(s)-2) END res FROM removechar