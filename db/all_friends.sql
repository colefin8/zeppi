SELECT friends.id, a.user_name AS user_a, a.user_id AS id_a, b.user_name AS user_b, b.user_id AS id_b FROM friends
    JOIN users a ON user_one = a.user_id
    JOIN users b ON user_two = b.user_id
WHERE (user_one = $1 OR user_two = $1) AND status = 'ACCEPTED';
