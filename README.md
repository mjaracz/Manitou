Environmental Requirements: </br>
> node: ^16.13.2 <br />
> npm: ^8.19.0 <br />
> git: ^2.10.0 <br />
> pnpm: ^7.13.4 <br />
> Docker version 20.10.20, build 9fdeb9c <br/>
> Docker Compose version v2.12.1 <br/>
> @nestjs/cli: ^8.2.0 <br />

##Backend setup

Let's start setting up the environment first by installing the necessary dependencies. <br/>
To do this, go to the backend directory. <br/> <br/>


Once you are in the appropriate directory, using your favorite package manager, install the dependencies.
Then run the docker images needed to put up the database and queue message system:
```
$ pnpm install
$ docker-compose -f .docker/docker-compose.yml up
```

Next, open another terminal window and navigate to the same backend directory as before:
```
$ nest start api-gateway --watch
```
Then in the next terminal window we need to start ours microservice
```
$ nest start auhor --watch
```

##Frontend setup
With this, we have done putting the local environment for the server side. 
Now let's go to the frontend directory and also start by installing the needed dependencies by typing: 
`pnpm install`. Then, once the dependency installation is complete, 
all you have to do is launch the client application by typing the command: `pnpm start` 

##Database migrations
In the backend directory, to populate the database with data just type:
```
$ pnpm migrate:up
```
To downgrade data in database you need to type instead:
```
$ pnpm migrate:down
```