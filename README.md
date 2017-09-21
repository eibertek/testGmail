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

envio de mails:

1 - tengo la pagina de template, que carga los cumpleaños dle dia de hoy
2 - imgtourl verifica que no exista la imagen (si existe la borra) y la crea con los cumpleaños de hoy
3 - el chrome enviará los datos de cumpleaños 

Template --> imgtourl --> sendmail

Si no hay cumpleaños, no deberia enviar mail.

servicio que traiga todos los cumpleaños del dia. y segun estos genere el html para enviar a urltoimg

el cron hara un fetch del dia y enviara los cumpleaños a un archivo temporal.
este archivo temporal tendra un json con los cumpleaños del dia y su data.

la web template traera este archivo y creara el formato
el img tourl verificara la cantidad de cumpleaños y si hay, generara la imagen
el snedmail verificara la cantidad de cumpleaños y si hay, enviara el mail
