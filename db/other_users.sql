SELECT u.user_name, u.first_name, u.last_name
FROM users u
WHERE NOT EXISTS (SELECT 1
FROM friends f
WHERE f.user_one = $1 AND f.user_two = u.user_id)
AND NOT EXISTS (SELECT 1
FROM friends f
WHERE f.user_two = $1 AND f.user_one = u.user_id)
AND u.user_id <> $1;