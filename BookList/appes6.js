class Book {

  constructor(title,author,isbn){

    this.title=title;
    this.author=author;
    this.isbn=isbn ;


  }
}


class UI {


  addBookToList(book){

    // console.log(book);

  const list = document.getElementById('book-list');

  // Create tr Element

  const row = document.createElement('tr');


  // Insert html in tr , insert cols

  row.innerHTML = `

  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X<a></td>
  
  `;

  // Append to the list

  list.appendChild(row);





  }

  showError(message,className){

    // Create a div 

 const div = document.createElement('div');

 //add class

 div.className=`alert ${className}`;

//  append and create text to the empty div 

div.appendChild(document.createTextNode(message));

// Now we will insert it before the container


// get parent 

const container = document.querySelector('.container');

const form = document.querySelector('#book-form');


//insert before usage now



container.insertBefore(div,form);

// Dissapear the alert after 3 sec

setTimeout(function(){

  document.querySelector('.alert').remove();

},3000);




}


  deleteBook(target){

    if(target.className  === 'delete'){

      target.parentElement.parentElement.remove();
  
  
  
  
    }


  }

  clearFields(){

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';



  }


}


//Event Listener 


document.getElementById('book-form').addEventListener('submit',

function(e){

  // console.log('test');

  // Get form Values

  const title =document.getElementById('title').value,
        author=document.getElementById('author').value,
        isbn =document.getElementById('isbn').value;

  // Instantiating a Book

  const book = new Book(title,author,isbn);

  // console.log(book);

  // Instantiating UI 

  const ui = new UI();

if(title===''||author===''||isbn==='') {
  // alert('FAILED TO ADD !! , PLEASE FILL NECESSARY FIELDS')

  // Above method is not professional 

  // showeError funcn 

  ui.showError('Please fill all the below fields to add books to list.','error');



}
  else{

      ui.addBookToList(book);

    // console.log(ui);

    // SHOW SUCESS

    ui.showError('Book added in the list !','success');

    // Clear Fields 

    ui.clearFields();

  }
  




  // console.log(title,author,isbn);
  e.preventDefault();


}


);

// Event Listener for Deleting the books 


document.getElementById('book-list').addEventListener('click',function(e){

// Insantantiate UI 

const ui = new UI();

ui.deleteBook(e.target);

// Show success

ui.showError('Book deleted !' , 'success');



e.preventDefault();
});

