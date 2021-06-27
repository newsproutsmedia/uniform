# React App With Express Backend Template
A starter template for creating React applications with a Node/Express backend. Includes frontend and backend tests, as well as Winston/Morgan logging of API routes and errors, and CircleCI config, and Heroku deployment. Client built with create-react-app.

## Installation
```
git clone https://github.com/newsproutsmedia/react-app-express.git
```
## Setup
To set up dependencies, ```npm run setup:server``` and then ```npm run setup:client```.

## To Check That It's Working
```npm run startboth``` from the project root. When the React app opens in your browser, you should see the text "You're connected to the backend!". You can test the POST route by sending a request using the input field. If it's working, you should receive a response below the form.
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

## When Deploying
Add a "post build" script that triggers the client to be built.  

For example, if deploying to Heroku:  
```
"heroku-postbuild": "npm run setup:client && npm install --only=dev --no-shrinkwrap && npm run build"
```