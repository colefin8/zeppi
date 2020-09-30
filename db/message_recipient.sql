SELECT messages.*, users.user_name AS sender_name FROM messages
JOIN users ON sender = user_id
WHERE receiver = $1;
