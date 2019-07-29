# Node Proxy Server

This node app solves the ngrok https issue when testing API routes from internet applications to your local machine.

## Getting Started

These instructions will get a copy of the project running on your Windows, MacOS, or Linux machine.

### Prerequisites

You must have Git and NodeJS installed on your local machine:

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/)

After Git and NodeJS are installed you must clone this repository to your local machine.

Open your preferred CLI in the folder you want to put the project and type this command  
```
    git clone https://github.com/osnielvaldivia/node-proxy-server.git
```

After this navigate into the cloned folder and install the [express](https://www.npmjs.com/package/express) package and the [express-http-proxy](https://www.npmjs.com/package/express-http-proxy) package
```
    npm i --save express express-http-proxy
```

Now you can run the project by  
```
    node app
```

## How-to use

Change the proxyUrl variable to the url and port your application is listening on in the local environment. https:localhost:44387 is the default for Visual Studio .NET Core MVC applications.

Change the port variable if necessary, the default value is 3000.

Run [ngrok](https://ngrok.com/download) on the port
```
    ngrok http 3000
```

## Authors:

- [Osniel Valdivia](https://github.com/OsnielValdivia)

## Sources:

- [kenzouno1](https://github.com/inconshreveable/ngrok/issues/448#issuecomment-414214242)
