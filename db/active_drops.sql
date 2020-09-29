SELECT
    COUNT(*)
FROM
    messages
WHERE
    sender = $1