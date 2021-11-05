<h2 align="center">
  bike-turismo-api
</h2>
<h5 align="center">
 Backend for bike-turismo developed <br/> using Node.js, Typescript and Firebase.
</h4>

### Technologies

This project was developed, using the following technologies:

- [Node.js](nodejs)
- [TypeScript](https://www.typescriptlang.org)
- [Express](https://expressjs.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Firebase](https://firebase.google.com)

## Tools

These tools were essential for the development of the entire project.

- [VS Code][vc] - Best IDE :)
- [Insomnia](https://insomnia.rest/) - To manage and test api requisitions

## Dependencies

- express
- eslint
- cookie-parser
- firebase-admin
- firebase-functions

## How To Use

To run this application, you'll need:

- [Git](https://git-scm.com) - To use git commands
- [Node.js v16.13.0][nodejs] or higher - To run this project
- [Yarn v1](https://yarnpkg.com) or higher - To manage the project dependencies

[nodejs]: https://nodejs.org/
[vc]: https://code.visualstudio.com/

After, from your command line:

### Clone this repository using this command

```bash
$ git clone https://github.com/Bike-Turismo/api.git
```
Or

```bash
$ git clone git@github.com:Bike-Turismo/api.git
```

### Install the project dependencies in each folder:

```bash
$ yarn
```
Or

```bash
$ yarn install
```

### Config your emulators
Config service account to access firebase servers resources instead locally resources
- in .serviceaccount.example.json rename to .serviceaccount.json.

Config your runtime variables to use as .env
- in .runtimeconfig.example.json and rename to .runtimeconfig.json

### Finally, run your app with yarn dev on project folder

```bash
$ yarn dev
```

### Success 🚀. The app was running in 0.0.0.0:5001.
```bash
i  emulators: Starting emulators: auth, functions, firestore, pubsub
⚠  functions: The following emulators are not running, calls to these services from the Functions emulator will affect production: database, hosting
✔  functions: Using node@16 from host.
i  firestore: Firestore Emulator logging to firestore-debug.log
i  pubsub: Pub/Sub Emulator logging to pubsub-debug.log
i  ui: Emulator UI logging to ui-debug.log
✔  functions[userHelloWorld]: http function initialized (http://0.0.0.0:5001/bike-turismo/us-central1/userHelloWorld).
✔  functions[getUserByName]: http function initialized (http://0.0.0.0:5001/bike-turismo/us-central1/getUserByName).
✔  functions[WelcomeNewUser]: firestore function initialized.
✔  functions[adminHelloWorld]: http function initialized (http://0.0.0.0:5001/bike-turismo/us-central1/adminHelloWorld).

┌──────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! View status and logs at 0.0.0.0:4000 │
└──────────────────────────────────────────────────────────────┘

┌────────────────┬──────────────┬────────────────────────┐
│ Emulator       │ Host:Port    │ View in Emulator UI    │
├────────────────┼──────────────┼────────────────────────┤
│ Authentication │ 0.0.0.0:9099 │ 0.0.0.0:4000/auth      │
├────────────────┼──────────────┼────────────────────────┤
│ Functions      │ 0.0.0.0:5001 │ 0.0.0.0:4000/functions │
├────────────────┼──────────────┼────────────────────────┤
│ Firestore      │ 0.0.0.0:8081 │ 0.0.0.0:4000/firestore │
├────────────────┼──────────────┼────────────────────────┤
│ Pub/Sub        │ 0.0.0.0:8085 │ n/a                    │
└────────────────┴──────────────┴────────────────────────┘
```
