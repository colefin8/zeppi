INSERT INTO friends
(user_one, user_two, status)
VALUES
($1, $2, 'PENDING')
RETURNING *;