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

curl -X POST -d "grant_type=password&client_id=thom&client_secret=nightworld&username=thomseddon&password=nightworld" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:9001/oauth/token
