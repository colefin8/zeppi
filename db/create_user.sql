INSERT INTO users
    (user_name, first_name, last_name, phone_number, email, password)
VALUES
    ($1, $2, $3, $4, $5, $6)
RETURNING *;