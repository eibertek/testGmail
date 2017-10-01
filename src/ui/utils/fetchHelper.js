import fetch from 'isomorphic-fetch';
export const URL = 'http://localhost:3000/';
export const EMPLOYEES = 'employees';

export const Request = ({url, type, body, callback}) => {
      fetch(url, makeOptions(type,body)).then((fetchedData)=>{
        return fetchedData.json();
    }).then((data)=>{
        return callback(data);
    });  
};


export const getEmployees =(callback, ...additional) => {
    return Request({
        url: URL+EMPLOYEES,
        type:'GET',
        body: {},
        callback: callback
    })
}

export const postEmployee =(callback, data = {}) => {
    const {id, name, lastname, birthday, startDay, picture, project, slackname} = data;
    return Request({
        url: URL+EMPLOYEES,
        type:'POST',
        body: {
            id, name, lastname, birthday, startDay, picture, project, slackname
        },
        callback: callback
    })
}

export const UpdateEmployee =(callback, data = {}) => {
    const {id, name, lastname, birthday, startDay, picture, project, slackname} = data;
    return Request({
        url: URL+EMPLOYEES+'/'+id,
        type:'PUT',
        body: {
            name, lastname, birthday, startDay, picture, project, slackname
        },
        callback: callback
    })
}

export const DeleteEmployee =(callback, data = {}) => {
    const {id, name, lastname, birthday, startDay, picture} = data;
    return Request({
        url: URL+EMPLOYEES+'/'+id,
        type:'DELETE',
        callback: callback
    })
}

const makeOptions = (type, body) => {
    return {
        credentials: 'include', //pass cookies, for authentication
        method: type,
        headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json; charset=utf-8'
        },
        body: type !== 'GET' ? JSON.stringify(body) : {}
      }
}
