/**
 * Get repository info from GitHub API 
 */

<<<<<<< Updated upstream
$.getJSON('https://api.github.com/users/tmchuynh/repos?per_page=100', (data) => {
=======
$.getJSON('https://api.github.com/users/tmchuynh/repos?per_page=53', (data) => {
>>>>>>> Stashed changes
    console.log(data);

    data.forEach((element) => {
        if (element.name == "tmchuynh") {
            console.log(element);
        }
    
    })
})