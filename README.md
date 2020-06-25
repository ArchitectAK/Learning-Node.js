# Learning-Node.js

### 1. Introduction to Node

- Understanding Node
  - As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.
    Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks
  - More about node is [here](https://nodejs.org/en/about/).
- Download and install node

  - download and install latest version for your OS from [here](https://nodejs.org/en/)
  - check if node is installed by running command `node -v` on your terminal
  - above command will print veriosn of node if node istalled.

  ```
  % node -v
  v10.21.0
  ```

- Why is Javascript is Node's language?
  - Syntax is same for frontend and backend
  - Shared code and data structures between frontend and backend
    - shared libraries such as underscore, encryption lib
    - custom algorithm and logic for funtions
    - data structure and object definitions
- The benefits and features of Javascript
  - Frontend and backend share the language
  - Frontend and backend share the code
  - Dynamic language - this means type is determined by the value , not when variabe is declared
  - JSON comes naturally with Javascript
- Asynchrounous tasks and callbacks
  - When you execute a task synchronously, you wait for it to finish before moving on to another task which is what causes blocking.
  - On the other hand, when you execute tasks asynchronously, you can move on to another task without having to wait for the previous task to finish
  - The most common way to get started with asynchronous code is to do callbacks. So let's take a look at [some code](./intro-to-node/async-task-and-callback.js).

### 2. Understanding NPM: Node Package Manager

- Write your own module - You can create your own modules, and easily include them in your applications. let see an easy example that [creates a module that returns a date and time object](./understanding-npm/write-your-own-module/)
- Manage third-party package with npm -- install any third party library and use it your code. I have created a [sample code file](understanding-npm/third-party-lib/sample.js) which uses lodash library using npm.
- What is package.json file?
  - What if we end up installing several third party packages, and we want to keep track of what we have installed and are dependent on in a list somewhere? That's where the "package.json" file comes in.
  - run `npm init` command to initiate npm in project repo.

### 3. Reading and Writing files

- Reading from files - reading file from file system sample is [here](./reading-writing-files/readFiles/).
- Access directories - reading directories from file system sample is [here](./reading-writing-files/access-directories/accessDir.js).
- Write to a file - writing file to file system sample is [here](./reading-writing-files/write-a-file/).

### 3. Exploring Web framework

- Node.js framwework -
  - what is a framework? It's sometimes interesting when we look at a definition in its generic form. For example, a framework is an essential supporting structure of a building, vehicle, or object.
  - And in software, it's essentially the same thing. It is a supporting structure that allows you to build on top of it. When it comes to web, and we want to build large APIs, or maybe HTTP servers, we can leverage web frameworks, and there are several options we can look at.
  - Each of these provide us with the structure and components you need to quickly make serving static files, like traditional websites, easy. Or we can put together a web API to interact in a web app. A web API is a service that allows us to get and save data to our server or back end, such as a web API that allows us to maybe create users, serve a list of users, etc.
- Express and Socket.io - Socket.io enables real time, bidirectional, event based communication. Express on the other hand allows the client to send a request to the server, but the server cannot send request to the client and so it does not have bidirectional communication. Socket.io solves this. In other words, we can push notifications from the server to the client when an event happens, as well as other data

### 3. Demo Chat App Client for the browser

- Static serving with Express

  - You can either host static content or dynamic content.
  - Static content can be things like HTML files for web sites or images, videos, etc.
  - Dynamic content, on the other hand, is served through a web API, or sometimes it's used to serve dynamic webpages where the content or the view is composed on the server itself.
  - [Sample code for the static demo chat is here](./chat-app-client/).

- Creating browser app - [Simple app code is here](./chat-app-client/static-serving-express/index.html)
