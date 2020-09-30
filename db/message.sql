SELECT messages.*, users.user_name AS sender_name FROM messages
JOIN users ON sender = user_id
WHERE message_id= $1 
AND
earth_box(ll_to_earth($2, $3), 20)
@> ll_to_earth(lat, long);
