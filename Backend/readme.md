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


## `/users/login` Endpoint

### HTTP Method

`POST`

## Description

Authenticates an existing user using email and password. Returns a JWT token and user information if credentials are correct.


## Request Data
The request body must be in JSON format and include the following fields:

- **email**: *String* (must be a valid email address)
- **password**: *String* (minimum 6 characters)

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
  }
}
```

## Notes
- Ensure that the request body includes all required fields.
- The endpoint validation uses `express-validator` to enforce data integrity.
- In case of errors during user creation (e.g., missing fields), the 
endpoint will return a 400 response with error details.



## `users/profile` Endpoint 

### HTTP Method
`GET`

### Description
Fetches the authenticated user's profile. Requires a valid JWT token in the request (either via cookie or `Authorization` header). Returns the user object associated with the token.

### Authentication Required
Yes — the user must be logged in.

### Success Response

- **Status Code:** `200 OK`
- **Response Body:**
```json
{
"_id": "62d...",
"fullname": {
  "firstname": "John",
  "lastname": "Doe"
},
"email": "example@example.com"
}

```


### Fail Response
```json
{
  "message": "Authentication required"
}
```

## `users/logout` Endpoint 

### HTTP Method
`GET`

## Description
Logs out the currently authenticated user. This route:
1. Clears the JWT token stored in cookies (if present)
2. Extracts the token from either cookie or `Authorization` header
3. Stores the token in a blacklist to prevent reuse

## Success Response

- **Status Code:** `200 OK`
- **Response Body:**
```json
{
"message": "User logged out successfully"
}
```

## Note:
Once logged out, the user’s token is invalidated, and future requests using that token will be rejected.


# Captain Registration Endpoint Documentation

## Endpoint
`/captains/register`

### HTTP Method
`POST`

## Description
This endpoint registers a new captain. It validates all required input fields, creates a new captain account, hashes the password, and returns a JWT token along with the newly created captain’s information.

---

## 🧾 Request Body

The request must be sent in JSON format and contain the following fields:
    
- **fullname**: Object with:
  - **firstname**: `String` – Required, min 3 characters
  - **lastname**: `String` – Optional, min 3 characters (if provided)
- **email**: `String` – Required, must be a valid email
- **password**: `String` – Required, min 6 characters
- **vehicle**: Object with:
  - **color**: `String` – Required, min 3 characters
  - **plate**: `String` – Required, min 3 characters
  - **capacity**: `Number` – Required, min 1
  - **vehicleType**: `String` – Required, must be one of: `"car"`, `"motorcycle"`, `"auto"`

---

### 🔍 Sample Request Body

```json
{
  "fullname": {
    "firstname": "Raju",
    "lastname": "Thapa"
  },
  "email": "raju@example.com",
  "password": "securePass123",
  "vehicle": {
    "color": "Red",
    "plate": "BA1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

---


## Endpoint
`/captains/login`


### HTTP Method
`POST`

### Description
Authenticates a registered captain using their email and password. On successful authentication, returns a JWT token and the captain's profile info. The token is also set in cookies for session management.

### Request Body

- **email**: `String` — Required, must be a valid email format
- **password**: `String` — Required, minimum 6 characters

### 📦 Sample Request
```json
{
  "email": "raju@example.com",
  "password": "securePass123"
}
```


## Endpoint
`/captains/profile`

## Mehod
`get`

## Description
Description: Returns the authenticated captain's profile. Requires JWT in cookie or Authorization header.

#### Authentication Required: Yes

---


###  Success Response (200 OK):
```json
{
  "captain": {
    "_id": "abc123",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "vehicle": {
      "type": "Sedan",
      "color": "Blue",
      "plateNumber": "XYZ-1234",
      "capacity": 4
    }
  }
}
```
---



## Endpoint
`/captains/logout`

## HTTP Method
`get`

## Description
 Logs out the captain. Invalidates the JWT by clearing the cookie and optionally blacklisting the token.


#### Authentication Required: Yes

### Success Response (200 OK):
 ```json
{ "message": "Logged out successfully." }
```

### Notes
 Middleware checks the token and clears it. After logout, the token is no longer usable.