console.log(window.localStorage.getItem('target'));

var repo_name = window.localStorage.getItem('target').split("/");
repo_name = repo_name[repo_name.length - 1];
console.log(repo_name);

