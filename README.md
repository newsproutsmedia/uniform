# Uniform Welcome Rubric
Calculate your NPS take home assignment for Uniform

## Installation
```
git clone https://github.com/newsproutsmedia/uniform-welcome-rubric.git
```
## Setup
To set up dependencies, ```npm run setup:server``` and then ```npm run setup:client```.

## Scripts
A number of useful scripts are included in the root package.json file:
- "server": starts only the server (Node)
- "setup:server": installs server dependencies
- "test:server": runs SuperTest tests on server APIs
- "client": starts only the client (React)
- "setup:client": installs client dependencies
- "build:client": builds the client
- "test:client": runs Jest tests on client
- "startboth": starts both server and client
## A Note About Tests
Make sure to run ```npm run build:client``` from the project root *before* running your server tests, or any routes returning html pages will fail -- can't test what isn't there!

## Deploying To Heroku
Heroku automatically installs all dependencies listed in the package.json file located in the project's root directory. However, in order to prevent dependency conflicts, the server and client have been placed in their own adjacent directories. In addition, since the React App is served up by Express via the client's "build" folder, the client must be built AFTER deployment. To accomplish all this, a "post build" script has been included:

```
"heroku-postbuild": "npm run setup:server && npm run prune:server && npm run setup:client && npm run build:client"
```

This script will:
1. Install server dependencies
2. Remove server devDependencies
3. Setup client dependencies
4. Build the client