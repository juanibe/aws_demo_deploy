## Register Flow:

- Use "register" mutation.
- Pass all necessary attributes.
- The password is hashed in the backend
- The email must not be used.
- The api response with the id of the new user.

## Login Form:

- Use login mutation.
- Pass email and password attributes.
- The password is decoded.
- A token is generated.
- Respond to the user with a token and the user's information.
