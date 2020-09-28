-- Update rows in table 'TableName'
UPDATE friends
SET status = 'ACCEPTED'
WHERE id = $1;

SELECT friends.id, a.user_name, b.user_name FROM friends
    JOIN users a ON user_one = a.user_id
    JOIN users b ON user_two = b.user_id
WHERE (user_one = $2 OR user_two = $2) AND status = 'ACCEPTED';