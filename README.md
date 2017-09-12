**NODE.JS BOILERPLATE**

# This is a BoilerPLate for creating a node.js project with ES6

Birthday App

Version Changes:

 Version        | Changes 
 ------------- |:-------------:
 *1.0.0*      | ES6 Babel moduler 
 *1.0.1*      | Added react-wysiwyg


```javascript
  "scripts": {
    "test": "jest", 
    "build": "babel ./src/ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
    "start": "npm run build && node dist/index.js"
  }
```

Next Tasks:

Tareas­­:

- Server Backend con ABM de empleados. 
```javascript
employees: [ {
    "name":"",
    "lastname":"",
    "birthday":"",
    "proyect":"",
    "startDay":"",
    "picture":""
    }]
```

Auth / Simple Sign On

Dashboard - Add, modifiy and delete Employees
          - editable mail template
          - Node cron job ( https://github.com/kelektiv/node-cron )
Thanks to all