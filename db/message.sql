SELECT * FROM messages
WHERE message_id= $1 
AND
earth_box(ll_to_earth($2, $3), 20)
@> ll_to_earth(lat, long);
