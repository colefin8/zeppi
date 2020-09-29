SELECT friends.id, a.user_name FROM friends
    JOIN users a ON user_one = a.user_id
    JOIN users b ON user_two = b.user_id
WHERE (user_two = $1) AND status = 'PENDING';