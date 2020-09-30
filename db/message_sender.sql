SELECT messages.*, users.user_name AS receiver_name FROM messages
JOIN users ON receiver = user_id
WHERE sender = $1;