class GitHub{

  constructor(){

    this.client_id = '466b674225a21cda75d1';
    this.client_secret ='db8b12fdd4ff3c0da6b52710e8382d3c9f3eec93';
    // we want limited number of repos 
    this.repos_count =5;
    this.repos_sort ='created:asc';
  }

  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
    per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();




    // I'm going to return an object because again, we're also going to be returning the reposts from here as well.And this is what's great about promises and using a sink away as opposed to callbacks.If we use callbacks, we'd have to have one callback, get the response and then have another one withthe with the repo getting the repos.So this is it allows us to format asynchronous operations really nicely.

    return{

      profile,repos





    }


  }
}