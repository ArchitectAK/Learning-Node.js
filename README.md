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
