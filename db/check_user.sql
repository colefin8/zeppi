
-- SELECT * FROM users
-- JOIN messages ON (messages.user_id = users.user_id )
-- WHERE  users.user_name = $1;

SELECT * FROM users
WHERE email =$1;

