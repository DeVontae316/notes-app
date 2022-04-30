# notes-app

If you don't have expo installed, complete the following steps:

npm install --global expo-cli
https://docs.expo.dev/get-started/installation/

After cloning the project run npm i

To run the project:
expo start

I created the following scripts to create a "local api" for the RN project to use:
"json": "json-server --watch data.json --port 8000",
"mock": "lt --port 8000 --subdomain application-mock-server",
"server": "npm run json & npm run mock"

type npm run server to run a "local tunnel" on your machine

Upon success you should see the following(or something similar):
your url is: https://application-mock-server-play.loca.lt

\{^\_^}/ hi!

Loading data.json
Done

*You'll need to replace the url string in the saga files to match the link created by the custom scripts*
Currently its:
const url = "https://application-mock-server.loca.lt/notes";
But it could change...
