UPDATE friends
SET status = 'DENIED'
WHERE id = $1;

SELECT friends.id, b.user_name FROM friends
    JOIN users a ON user_one = a.user_id
    JOIN users b ON user_two = b.user_id
WHERE (user_two = $2) AND status = 'PENDING';