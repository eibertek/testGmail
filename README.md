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

- Server Backend con ABM de empleados.  https://github.com/typicode/json-server
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

Siguientes: agregar botones de 
add employee (funcionlidad que va a mostrar una pantalla y permitira agregar datos y guardar)
modifiy employee: boton al lado de cada item del layout
agregar foto: en add employee

Acciones:

add_employee_save_pending
add_employee_success
-------------------------------
modify_employee_load
modify_employee_save
modify_employee_success
-------------------------------
delete_employee_load
delete_employee_success


para guardar: dispatch el save_pending y mandar un fetch con el post y los datos
una vez terminado mandar un dispatch de save_success
