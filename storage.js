class Storage{
    static getSearchedUsersFromStorage(){
        // get all the users
        let users;
        if(localStorage.getItem("searched")===null){
            users=[];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }
    static addSearchedUserToStorage(username){
        // add users
        let users = this.getSearchedUsersFromStorage();
        // INDEXOF
        if (users.indexOf(username)=== -1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));

    }
    static clearAllSearchedUsersFromStorage(){
        // clear all the users
        localStorage.removeItem("searched");
    }
}