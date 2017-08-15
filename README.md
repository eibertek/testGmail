**NODE.JS BOILERPLATE**

# This is a BoilerPLate for creating a node.js project with ES6

Actually This is only an skeleton, but the idea is get a BackendServer and frontend React Compiler

Version Changes:

 Version        | Changes 
 ------------- |:-------------:
 *1.0.0*      | ES6 Babel moduler 


```javascript
  "scripts": {
    "test": "jest", 
    "build": "babel ./src/ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
    "start": "npm run build && node dist/index.js"
  }
```

Thanks to all