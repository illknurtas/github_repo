const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");

const github= new Github();
const ui = new UI();


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
                // console.log("User Not Found!");
                ui.showError("User Not Found!");
            }
            else{
                ui.addSearchedUserToUI(username);

                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        })
        .catch(err =>ui.showError(err));
    }
    ui.clearInput();//clear input
    e.preventDefault();
}
function clearAllSearched(){
    // clear all history 
    if(confirm("Are you sure you want to delete all?")){
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }
}
function getAllSearched(){
    //add the searchings to UI by taking from the storage

    let users = Storage.getSearchedUsersFromStorage();
    let result = "";
    users.forEach(user =>{
        // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
        result += `<li class="list-group-item">${user}</li>`
    });
    lastUsers.innerHTML = result;
}