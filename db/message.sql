SELECT * FROM messages
WHERE receiver =$1 
AND
earth_box(ll_to_earth($2, $3), 5000)
@> ll_to_earth(lat, long);


-- 5000 is in meters