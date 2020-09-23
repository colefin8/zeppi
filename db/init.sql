CREATE TABLE IF NOT EXISTS users 
(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(40) NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL
);
-- CREATE TABLE IF NOT EXISTS messages
-- (
--     message_id SERIAL PRIMARY KEY,
--     message VARCHAR(500) NOT NULL,
--     sender INT NOT NULL REFERENCES users(user_id),
--     receiver INT NOT NULL REFERENCES users(user_id)

-- );
CREATE TABLE IF NOT EXISTS messages
(
    message_id SERIAL PRIMARY KEY,
    message VARCHAR(500) NOT NULL,
    sender INT NOT NULL REFERENCES users(user_id),
    receiver INT NOT NULL REFERENCES users(user_id),
    lat FLOAT(10) NOT NULL,
    long FLOAT(10) NOT NULL
);

