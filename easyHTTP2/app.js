const http = new EasyHTTP;


// Get users 

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// User Data 

const data = {

  name: 'John DOE ',
  username: 'johndoe',
  email:'johndoe@gmail.com'
}

// Create POST 

// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Update User 

// http.put('https://jsonplaceholder.typicode.com/users/3',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// DELETE USER

http.delete('https://jsonplaceholder.typicode.com/users/3',data)
.then(data => console.log(data))
.catch(err => console.log(err));