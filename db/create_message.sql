INSERT INTO messages
    (message, sender, receiver, lat, long)
VALUES
    ($1, $2, $3, $4, $5)
RETURNING *;

-- SELECT * FROM users
-- JOIN messages ON(messages.sender = users.user_id)

-- SELECT * FROM users
-- JOIN messages ON (messages.user_id = users.user_id )
-- WHERE  messages.user_id = $1;

-- figure out what needs to be send back