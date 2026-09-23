-- https://www.codewars.com/kata/580fe518cefeff16d00000c0

  CREATE OR REPLACE FUNCTION increment(i integer) RETURNS integer AS $$
        BEGIN
                RETURN i + 1;
        END;
$$ LANGUAGE plpgsql;