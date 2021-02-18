# Todo PLV

A little application including a backend written with [koa](https://koajs.com) and a small client using the [Angular](https://angular.io)-Framework.

This project was created for education and will not be maintained.

## Getting started

Make sure you have a current [NodeJs](https://nodejs.org/en/about/releases/) version with npm installed.

Docker is needed to for starting the mongoDB server local. 

Go in the two projects and run `npm i` on console to install the required dependencies.

### KoaJs - Server

Start the mongoDB docker container with `docker-compose up`. Maybe you need admin permissions when you are on linux.

To start the koa server local run `npm run dev`

### Angular - Client
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
