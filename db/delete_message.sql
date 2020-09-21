DELETE FROM message
WHERE  messageId = $1;

SELECT * FROM message
WHERE userId= $2;