const github = new GitHub;

const ui = new UI ;



// Search Input 

const searchUser = document.getElementById('searchUser');


searchUser.addEventListener('keyup', (e)=>{

  // Get input text

  const userText = e.target.value;

  // check if user text is not empty if not empty we want to then make an HTTP call to GitHub.

  if(userText!==''){

    console.log(userText);

    // this is where need to call the function that we created in github.js 

    // Make HTTP call

    github.getUser(userText)
    .then(data =>{
      if(data.profile.message==='Not Found'){

        // Show alert , this is going to happen in out separate file UI.js 
        ui.showAlert('User Not found','alert alert-danger');



      }else{

        // Show the profile , no issue : which will also happen through UI JS file 

        ui.showProfile(data.profile);
        ui.showRepos(data.repos);



      }

    })


  }else{

    // Clear profile that has been entered 

    ui.clearProfile();


  }





});