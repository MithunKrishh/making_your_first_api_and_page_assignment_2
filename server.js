const express = require('express');
const app = express();

// Predefined status codes and their messages
const statusMessages = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has been fulfilled and resulted in a new resource being created.",
    204: "No Content: The server successfully processed the request, but there is no content to send in the response.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: Authentication is required to access the resource.",
    403: "Forbidden: The server understands the request but refuses to authorize it.",
    404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    405: "Method Not Allowed: The HTTP method used is not allowed for the requested resource.",
    429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server received an invalid response from the upstream server.",
    503: "Service Unavailable: The server is currently unable to handle the request due to maintenance or overloading.",
    504: "Gateway Timeout: The server did not receive a timely response from an upstream server."
};

// Create the `/status-info` endpoint
app.get('/status-info', (req, res) => {
    const statusCode = parseInt(req.query.code); // Parse the "code" query parameter

    // Check if the status code is valid
    if (!statusCode || !statusMessages[statusCode]) {
        return res.status(400).json({
            error: "Invalid or missing status code. Please provide a valid code.",
        });
    }

    // Respond with the status code and its message
    res.json({
        status: statusCode,
        message: statusMessages[statusCode],
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
