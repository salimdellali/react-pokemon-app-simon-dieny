### on website `https://firebase.google.com`:

- connect to firebase website `https://firebase.google.com`
- cick "Add new Project"
- create the project

### on local

- open terminal
- run `npm install -g firebase-tools`
- (bonus: to update `firebase-tools`, run the same commande)
- to check if the installation happened correctly run `firebase --version` (ex 10.1.5)
- run `firebase login`
- run `firebase init`
- follow instructions :
  - Are you ready to proceed? `Yes`
  - Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`
  - Please select an option: `Use an existing project`
  - Select a default Firebase project for this directory: `react-pokemons-app-simon-dieny (react-pokemons-app-simon-dieny)`
  - What do you want to use as your public directory? `build`
  - Configure as a single-page app (rewrite all urls to /index.html)? `Yes`
  - Set up automatic builds and deploys with GitHub? `No`
  - File build/index.html already exists. Overwrite? `No`
- after finishing instructions above, run `firebase deploy`
- wait, and you will get a link `https://react-pokemons-app-simon-dieny.web.app` , now you have your app accessible on the web via this link
