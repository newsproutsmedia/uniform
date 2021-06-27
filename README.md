# React App With Express Backend Template
A starter template for creating React applications with a Node/Express backend. Includes frontend and backend tests, as well as Winston/Morgan logging of API routes and errors. Client built with create-react-app.

## Installation
```
git clone https://github.com/newsproutsmedia/react-app-express.git
```
## Setup
To set up dependencies, run ```npm install``` from each directory (server and client).

## To Check That It's Working
```npm run startboth``` from the project root. When the React app opens in your browser, you should see the text "You're connected to the backend!". You can test the POST route by sending a request using the input field. If it's working, you should receive a response below the form.
## Scripts
A number of useful scripts are included in the root package.json file:
- "server": starts only the server (Node)
- "client": starts only the client (React)
- "build:client": builds the client
- "startboth": starts both server and client
- "test:server": runs SuperTest tests on server APIs
- "test:client": runs Jest tests on client



## A Note About Tests
Make sure to run ```npm run build:client``` from the project root *before* running your server tests, or any routes returning html pages will fail -- can't test what isn't there!

## When Deploying
Add a "post build" script that triggers the client to be built.  

For example, if deploying to heroku:  
```
"heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
```