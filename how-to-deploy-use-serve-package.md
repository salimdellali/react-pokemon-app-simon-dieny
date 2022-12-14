after finishing the development, run `npm run build` this commande will create a new folder `build/` at the root of the project, this folder will be used for deployment

install `npm install -g serve` to serve the build with a static server (server on localhost)

start the app locally but in production mode (as it's on the server) with `serve -s build -p 5000`, here we need to use other port than 3000 (use 5000 for instance) because 3000 is already used by `npm start` script

go to `localhost:5000` and you should see the production version
