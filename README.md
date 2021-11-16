# mock-http
A webservice to return desired HTTP responses for test purposes

## Endpoints
`/status/<code>` return given HTTP status code

`/length/<length>` return given `Content-Length` (as `text/plain` with 200 status)
