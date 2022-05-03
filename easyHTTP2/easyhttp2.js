/**
 * EasyHTTP Library 
 * Library for making HTTP requests 
 * 
 * @version 2.0.0
 * @author Mohit Bhatt
 * @license MIT 
 * 
 */

class EasyHTTP {

  // Make a HTTP Get request 

  get(url){

    return new Promise((resolve,reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));

    });

    
  }

  // Make a HTTP POST Request 


  post(url,data){

    return new Promise((resolve,reject) => {
      fetch(url,{
        method:'POST',
        headers: {
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));

    });

    
  }

  // Make a PUT Request 

  
  put(url,data){

    return new Promise((resolve,reject) => {
      fetch(url,{
        method:'POST',
        headers: {
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));

    });

    
  }

// Make an http DELETE Request 

  delete(url){

  return new Promise((resolve,reject) => {
    fetch(url,{
      method:'DELETE',
      headers: {
        'content-type':'application/json'
      },
    })
    .then(res => res.json())
    .then(() => resolve('RESOURSE DELETED'))
    .catch(err => reject(err));

  });

  
}




}





