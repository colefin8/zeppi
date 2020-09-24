-- Update rows in table 'TableName'
UPDATE friends
SET status = 'ACCEPTED'
WHERE id = $1;

SELECT * FROM friends;