# Users Registration Endpoint Documentation

## Endpoint
`/users/register`

### HTTP Method

`POST`

## Description
This endpoint registers a new user. It creates a user if the provided data passes validation. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the user information.

## Request Data
The endpoint expects the request body in JSON format with the following required fields:

- **fullname**: an object containing:
  - **firstname**: *String* (minimum 3 characters, though the error message might note at least 4 characters)
  - **lastname**: *String* (optional, but recommended to be at least 4 characters)
- **email**: *String* (must be a valid email format)
- **password**: *String* (minimum 6 characters)

### Sample Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "example@example.com",
  "password": "securePassword123"
}
```

## Successful Response
- **Status Code:** 201 Created
- **Response Body:**
  - **token**: A JWT token string for authentication.
  - **user**: Object containing the created user’s details.

### Sample Success Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "62d...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "example@example.com"
    // ...other user properties
  }
}
```

## Error Responses

### Validation Error
- **Status Code:** 400 Bad Request
- **Response Body:** A JSON object with an `errors` array detailing any validation issues.

### Sample Error Response
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 4 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

## Notes
- Ensure that the request body includes all required fields.
- The endpoint validation uses `express-validator` to enforce data integrity.
- In case of errors during user creation (e.g., missing fields), the endpoint will return a 400 response with error details.