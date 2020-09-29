SELECT
    COUNT(*)
FROM
    messages
WHERE
   messages.sender = $1 ;