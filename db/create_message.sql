INSERT INTO messages
    (user_id, message)
VALUES
    ($1, $2);

SELECT * FROM users
JOIN messages ON (messages.user_id = users.user_id )
WHERE  messages.user_id = $1;

-- figure out what needs to be send back