/**
 * Get repository info from GitHub API 
 */

$.getJSON('https://api.github.com/users/tmchuynh/repos?per_page=100', (data) => {
    console.log(data);

    data.forEach((element) => {
        if (element.name == "tmchuynh") {
            console.log(element);
        }
    
    })
})