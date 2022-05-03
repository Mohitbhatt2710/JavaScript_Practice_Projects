

const data =[
  
  {

  name : 'John doe' ,
  age : '32',
  gender : 'male' ,
  lookingfor :'female',
  location : 'Boston MA',
  image : 'https://randomuser.me/api/portraits/men/82.jpg'

},
  {

  name : 'Jan Smith' ,
  age : '26',
  gender :'female' ,
  lookingfor :'male',
  location : 'Florida',
  image : 'https://randomuser.me/api/portraits/women/80.jpg'

},
  {

  name : 'William Johnson ' ,
  age : '32',
  gender :'male' ,
  lookingfor :'female',
  location : 'Lynn MA',
  image : 'https://randomuser.me/api/portraits/men/83.jpg'

}

];


const profiles = profileIterator(data);

// Call first Profile 


nextProfile();

// Next Event 

document.getElementById('next').addEventListener('click' , nextProfile);


// Next profile Display funcn

function nextProfile(){


  const currentProfile = profiles.next().value;

  if(currentProfile!=undefined){

  document.getElementById('profileDisplay').innerHTML =`

  <ul class="list-group" >

  <li class="list-group-item" > Name : ${currentProfile.name}</li>
  <li class="list-group-item" > Age : ${currentProfile.age}</li>
  <li class="list-group-item" > Location : ${currentProfile.location}</li>
  <li class="list-group-item" > Preference : ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>


  </ul>
`;
  }else{


    window.location.reload();
  }
document.getElementById('imageDisplay').innerHTML = `

<img src="${currentProfile.image}">`;


}






// Profile Iterator 

function profileIterator(profiles){

  let nextIndex = 0 ;

  return {

    next:function(){

      return nextIndex < profiles.length ? 
      { value:profiles[nextIndex++], done:false} :

      {done:true}
    }
  };
}

