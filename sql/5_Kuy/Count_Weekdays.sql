-- https://www.codewars.com/kata/58241d05e7a162c5b100010f/train/sql

CREATE OR REPLACE FUNCTION weekdays(a DATE, b DATE)
RETURNS INT
AS $$
-- your code here
DECLARE weekdays INT = 0;
s DATE = CASE WHEN a > b THEN b ELSE a END;
e DATE = CASE WHEN a < b THEN b ELSE a END;

BEGIN

WHILE s <= e LOOP
IF EXTRACT(DOW FROM s)>0 AND EXTRACT(DOW FROM s)<6 THEN
weekdays = weekdays + 1;
END IF;
s = s + 1;

END LOOP;

RETURN weekdays;
END;
$$ LANGUAGE plpgsql;