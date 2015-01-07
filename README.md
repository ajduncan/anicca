# anicca #

A prototype distributed game world server in node.

## Running ##

    Run either by using:

    $ npm install -g pm2
    $ npm install
    $ pm2 start processes.json

    or with vagrant;

    $ vagrant up

## Login service ##

To test:

    1. Run using `vagrant up' as described above.
    2. Clone [bardo](https://github.com/ajduncan/bardo) and run vagrant up in that folder.
    3. Visit http://localhost:8000/auth

Or:

curl -X POST -d "grant_type=password&client_id=thom&client_secret=nightworld&username=thomseddon&password=nightworld" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:9001/oauth/token

## todo ##

1. Figure out pm2 not reloading on code changes.
2. Hook postgresql up to login, store token on correct auth.
3. Client must have correct token when connecting to region, login service notifies region, etc.
