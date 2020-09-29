SELECT
    COUNT(*)
FROM
    messages
WHERE
    receiver = $1
--    messages.sender = $1 ;