# Newton Education Foundation

This repository contains the source code for the site soon to be at: http://www.thenewtoneducationfoundation.org

## Notes

- Currently set up for a MongoDB database.
- Can run standalone, but may be proxied behind NGINX or something.
- You can run with `node server.js`, or, use gulp like `gulp run`.
- Uses Braintree for payments.

## Specs

### Backend

#### Files 

`server.js`

- Main server file. Handles serving the index, handling non-resource actiosn such as emails, donations, etc...

`gulpfile.js`

- The projects "gulpfile"

`api/events-api.js`

- Web service for events.
- Interfaces with database.
- CRUD service.
- **Not** pure REST.

`api/payments.js`

- Handles payments through the Braintree API.


`db/db.js`

- Handles connection to the database.

`db/schemas.js`

- Mongoose schemas for database.

`db/models.js`

- Mongoose models for database

`test/tests.js`

- Unit tests written in Mocha.
- Use `gulp test` to run.

### Frontend

*In progress...*
