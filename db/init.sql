CREATE TABLE IF NOT EXISTS users
(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(40) NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    total_drops INT, 
    total_loot INT 
);

CREATE TABLE IF NOT EXISTS messages
(
    message_id SERIAL PRIMARY KEY,
    message VARCHAR(500) NOT NULL,
    sender INT NOT NULL REFERENCES users(user_id),
    receiver INT NOT NULL REFERENCES users(user_id),
    lat FLOAT NOT NULL,
    long FLOAT NOT NULL
);



CREATE TABLE IF NOT EXISTS friends
(   
    id SERIAL PRIMARY KEY,
    user_one INT NOT NULL REFERENCES users(user_id),
    user_two INT NOT NULL REFERENCES users(user_id),
    status VARCHAR
);




