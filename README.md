# Newton Education Foundation

This repository contains the source code for the site soon to be at: http://www.thenewtoneducationfoundation.org

## *Changes*

- Merged database functionality into the API.

## **TODO**

- Clean up error handling.
- Hook up payments.
- Set up database.
- Make the server interface nicer or proxy it.
- Move content in the page.
- Make it more mobile friendly.
- ~~Deploy~~.

## Notes

- Currently set up for a MongoDB database.
- Can run standalone, but may be proxied behind NGINX or something.
- You can run with `node server.js`, or, use gulp like `gulp run`.

**The following environment variable should be set on the target system.**

- port
- db_url

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

- Handles payments.

`test/tests.js`

- Unit tests written in Mocha.
- Use `gulp test` to run.

### Frontend

#### Files

`public/index.html`

- The index page.

`public/css/site.css`

- Index specific CSS styles.

`public/js/site.js`

- Mainly an AJAX connector for events.
