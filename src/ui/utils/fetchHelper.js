import fetch from 'isomorphic-fetch';

export const fetchHelper = ({url, body, cb}) => {
      fetch(url).then((fetchedData)=>{
        return fetchedData.json();
    }).then((data)=>{
        return cb(data);
    });  
};