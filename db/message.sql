SELECT * FROM messages
WHERE 
earth_box(ll_to_earth(lat, long), 5000)
@> ll_to_earth(latitude, longitude);