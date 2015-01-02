# anicca #

A prototype distributed game world server in node.

## Running ##

export NODE_PATH=`pwd`

node services/asset/app.js &
node services/login/app.js &
...
node region/app.js &
...

## Login service ##

To test:

curl -X POST -d "grant_type=password&client_id=thom&client_secret=nightworld&username=thomseddon&password=nightworld" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:9000/oauth/token
