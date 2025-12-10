// NPM Understanding
// installing and uninstalling anything basics & advanced
// understahnding node_modules folder
// dependency vs devDependency
// scripts - understanding scripts PATH and custom scripts

// NPM = Node Package Manager
// contains a huge repository of packages/modules that can be used to extend the functionality of Node.js applications

// things that nodejs core contains is known as modules and the others which we install using npm are known as packages

// Installing a package
// npm install <package-name>
// npm i <package-name>

// Uninstalling a package
// npm uninstall <package-name>
// npm remove <package-name> // cannot write npm u <package-name>

// Installing a specific version of a package
// npm install <package-name>@<version>
// if one package depends on another package then while installing the main package the dependent package will also be installed automatically and also listed in dependencies all will be stored in node_modules folder
// node_modules folder contains all the installed packages and their dependencies

// Dependency vs DevDependency
// Dependency: These are the packages that are required for the application to run in production. They are essential for the core functionality of the application.
// DevDependency: These are the packages that are only needed during the development phase. They are not required for the application to run in production, such as testing frameworks, build tools, etc.
// npm i nodemon --save-dev

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
// },
//   when  we run like
// npm test
// npm start
// npm run dev
// npm run concurrent
// npm run <custom-script-name>

// so sometimes we need to simply use npm start or npm test without writing run in between but for custom scripts we need to write run in between because npm start and npm test are predefined scripts in npm

// PATH in scripts
// when we run a script using npm, npm automatically adds the node_modules/.bin directory to the PATH environment variable for that script. This allows us to run locally installed packages without needing to specify their full path.

// so every time we run npm start or npm test or any custom script npm will look for the packages in node_modules/.bin folder first before looking into global packages means willl create a table of contents of node_modules/.bin folder and will check if the package is present there or not if present will run that otherwise will look for global packages

// Example:
// "scripts": {
//     "start": "node script.js",
//     "dev": "nodemon script.js"
// },

console.log("NPM is awesome!");
