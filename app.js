const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");

const lastUsers = document.getElementById("last-users");
const github= new Github();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);

}
function getData(e){

    let username = nameInput.value.trim();
    //taking the users value from nameInput
    if(username=== ""){
        // if the username is empty
        alert("Please enter a username");
    }
    else{
         
        github.getGithubData(username)
        .then(response => {
            if(response.user.message ==="Not Found"){
                console.log("User Not Found!");
            }
            else{
                console.log(response);
            }
        })
        // .then(response => console.log(response.user))//user information
        // .then(response => console.log(response.repo))//repo information
        .catch(error => console.log(error));
    }

    e.preventDefault();
}
function clearAllSearched(){
    // clear akk history 
}
function getAllSearched(){
    //add the searchings to UI by taking from the storage

}