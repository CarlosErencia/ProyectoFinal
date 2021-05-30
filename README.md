# Projecte final

## Gerard Chicote, Joel Rodriguez, Carlos Erencia, Jordi Cervera, Marti Rabella

## Instalacion localhost
Lanzar Api:
* `cd BackEnd`
* `npm install`
* `npm start`

Lanzar Front:
* `cd FrontEnd`
* `npm install`
* `npm start`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open localhost [http://localhost:3000](http://localhost:3000) to view it in the browser or amazon [http://34.226.202.240:4000/](http://34.226.202.240:4000)

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


# Documentació tècnica

## Projecte funcional

localhost: [http://localhost:3000](http://localhost:3000)

amazon: [http://34.226.202.240:4000/](http://34.226.202.240:4000)

## Jira

http://labs.iam.cat:8080/secure/RapidBoard.jspa?rapidView=87&projectKey=DAWSIN6

## Explicació

El nostre projecte està dividit en dues parts, frontend i backend.

Tenim dues carpetes generals, una per a cada cosa.

A la carpeta del front tenim tota la página y a la del back només tenim la api

Per iniciar tot el projecte sencer em de fer `npm start` tant a la carpeta del frontend com la del backend

### Frontend

Dins del front tenim dues carpetes: `public y src`. A més fora d'aquetes carpetes hi ha fitxers generals y també hi ha alguns que no els fem servir pero ens vam olvidar de borrar, com per exemple el data.js.

Al `src` hi ha tres carpetes més: components, pages i images, aquesta ùltima tampoc la fem servir (agafem les imatges de la api).

A la carpeta de `pages` el que hi ha son els fitxers amb les pàgines generals (básiques) y el que fan es trucar als `components` de l'altra carpeta per fer la página completa.

### Backend

Dins del back tenim tres carpetes: `helpers, models, routes` i un index.js amb express y definció de rutas.

* `Helpers`Al helpers el que hi ha son els cruds de la api.

* `Models`Al models definim la estructura de dades.

* `Routes`Al routes definim les routes per utilitzar el crud.

