SELECT *
FROM friends
WHERE 
(user_one = $1 AND user_two= $2) OR (user_two=$1 OR user_one= $2);