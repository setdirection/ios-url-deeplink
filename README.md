ios-deeplink
==========

A testbed for playing with efficiently opening applications from URLs

## Tests

-------

## Installation

  * [node](http://nodejs.org)
    ([Installation instructions](https://github.com/joyent/node/wiki/Installation))

  * [npm](http://npmjs.org/)

        curl http://npmjs.org/install.sh | sh

  * [heroku](https://toolbelt.heroku.com/)

        heroku client: CLI tool for creating and managing Heroku apps
        foreman: an easy option for running your apps locally
        git: revision control and pushing to Heroku

## From zero to install

    git clone git@github.com:setdirection/ios-url-deeplink.git
    cd ios-url-deeplink
    npm install

    node server.js

    foreman start // or, start the heroku emualation client

## Working with Heroku

  * login to heroku

        heroku login

  * scale up the instances

        heroku ps:scale web=1

  * push new code to heroku

        git push heroku master

  * take a look at the processes

        heroku ps

        Process  State           Command
        -------  --------------  ----------------------
        web.1    crashed for 9m  node server.js -m prod

  * restart a process

        heroku restart web.1

        Restarting web.1 process... done

  * watch the logs

        heroku logs

