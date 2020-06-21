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

### 2. Understanding NPM: Node Package Manager

- Write your own module
- Manage third-party package with npm
- What is package.json file?
