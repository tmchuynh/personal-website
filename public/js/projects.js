var project_container = document.getElementById('project-list');
var module_container = document.querySelector('.offcanvas');
var module_body = document.querySelector('.offcanvas-body');
var module_title = document.querySelector('.offcanvas-title');
var information = document.getElementsByClassName("large-container")[0];
var obj = new Array();
var project_name, pushed_at, description, image, link, type, id, url, languages;

/**
 * Get repository info from GitHub API 
 */

$.getJSON('https://api.github.com/users/tmchuynh/repos?per_page=53', (data) => {
    // console.log(data);

    data.forEach((element) => {

        if (element.fork == false) {
            $.getJSON(element.languages_url, (data) => {
                // console.log(Object.keys(data))

                project_name = element.name;
                pushed_at = element.pushed_at;
                description = element.description;
                languages = Object.keys(data);
                url = element.html_url;


                populate(element.name, element.pushed_at, Object.keys(data), element);
            })
        }
    })
})

/*
 * Create module with project information
 */
function moduleCreator(name, languages, url) {
    module_title.innerHTML = name;
    var link = document.createElement('a');
    link.setAttribute("href", url);
    link.innerHTML = url;
    module_body.appendChild(link);

    console.log(name, languages, url);
    var name_parts = name.replaceAll("-", " ");
    var title = document.querySelector('.offcanvas-title');
    name_parts = toTitleCase(name_parts);
    title.innerHTML = name_parts;
    var link = document.querySelector('.offcanvas-body a');
    link.setAttribute("href", url);
    link.innerHTML = String(url);
    var large_container = document.createElement('div');
    large_container.classList.add('large-container');
    console.log(large_container);


    // Create container for the screenshots of the project
    var container = document.createElement('div');
    container.classList.add("offcanvas-body");
    var container_title = document.createElement('h3');
    container_title.innerHTML = "Screenshots:";
    container.appendChild(container_title);
    var container_body = document.createElement('div');
    var container_body_img = document.createElement('img');
    var screenshot_url = "../public/screenshots/" + name + ".png";

    if (checkFileExist(screenshot_url)) {
        container_body_img.setAttribute("src", screenshot_url);
        container_body.appendChild(container_body_img);
        container.appendChild(container_body);
        large_container.appendChild(container);
    }

    // Create container for the project README
    var container_readme = document.createElement('div');
    var container_readme_text = document.createElement('p');
    var readmes_url = "../public/readmes/" + name + ".html";

    if (checkFileExist(readmes_url)) {
        container_readme_text.innerHTML = "../readmes/" + name + ".html";
        container_readme.appendChild(container_readme_text);
        large_container.appendChild(container_readme);
    }

    module_body.appendChild(large_container);
}

$(document).ready(function () {

    if (!(module_container.offsetParent === null)) {
        console.log("offcanvas is not visible");
        while (module_body.firstChild) {
            module_body.removeChild(module_body.firstChild);
        }
    }
    else {
        console.log("offcanvas is  visible");
        moduleCreator(project_name, languages, url)
    }
})


// window.addEventListener('click', function (e) {
//     if (module_container.contains(e.target) && module_container.classList.contains("show")) {
//         //click inside of element  
//         console.log("click inside of element");
//         moduleCreator(project_name, languages, url)
//     } else {
//         while (module_body.firstChild) {
//             module_body.removeChild(module_body.firstChild);
//         }
//     }
// });

/**
 * Populate repository project cards with language icons respectively
 * 
 * @param {any} name = Project name
 * @param {any} url = GitHub URL link
 * @param {any} updated = Last commit / push date MM/DD/YYYY
 * @param {any} languages = Programming languages used
 */
function populate(name, updated, languages, element) {
    console.log(name)

    var card = document.createElement("div");
    card.classList.add("cards");
    card.setAttribute("type", "button");
    card.setAttribute("data-bs-toggle", "offcanvas");
    card.setAttribute("data-bs-target", "#offcanvas");
    card.setAttribute("aria-controls", "offcanvasExample");

    // console.log(element.html_url);

    card.addEventListener("click", () => moduleCreator(name, languages, element.html_url));

    addLanguages(languages, card);

    var title = document.createElement("a");
    title.classList.add("title");
    var name_parts = name.replaceAll("-", " ");
    title.innerHTML = name_parts;
    card.appendChild(title);

    // console.log(updated);
    var date = updated.split("T")[0]
    // console.log(date);
    var date_0 = date.split("-");

    var year = date_0[0];
    var month = date_0[1];
    var day = date_0[2];

    // console.log(month, " ", day, " ", year)

    var subtitle = document.createElement("code");
    subtitle.classList.add("last-updated");
    subtitle.classList.add("mb-0");
    subtitle.innerHTML = "Last updated on:"
    card.appendChild(subtitle);

    var last_updated = document.createElement("code");
    last_updated.innerHTML = month + "/" + day + "/" + year;
    last_updated.classList.add("last-updated");
    last_updated.classList.add("mt-0");
    card.appendChild(last_updated);

    project_container.appendChild(card);
}

function addLanguages(languages, card) {
    var lang_icons = document.createElement("div");
    lang_icons.classList.add("d-flex");
    lang_icons.classList.add("languages_list");

    var icon = document.createElement("i");
    icon.classList.add("bx");
    if (languages.length == 0) {
        icon.innerHTML = " ";
    }
    if (languages.includes("HTML")) {
        var icon2 = document.createElement("i");
        icon2.classList.add("bx");
        icon2.classList.add("bxl-html5");
        icon2.classList.add("html");
        lang_icons.appendChild(icon2);
    }
    if (languages.includes("Python")) {
        var icon3 = document.createElement("i");
        icon3.classList.add("bx");
        icon3.classList.add("bxl-python");
        icon3.classList.add("python");
        lang_icons.appendChild(icon3);
    }
    if (languages.includes("JavaScript")) {
        var icon4 = document.createElement("i");
        icon4.classList.add("bx");
        icon4.classList.add("bxl-javascript");
        icon4.classList.add("javascript");
        lang_icons.appendChild(icon4);
    }
    if (languages.includes("CSS")) {
        var icon5 = document.createElement("i");
        icon5.classList.add("bx");
        icon5.classList.add("bxl-css3");
        icon5.classList.add("css");
        lang_icons.appendChild(icon5);
    }
    if (languages.includes("TypeScript")) {
        var icon6 = document.createElement("img");
        var source = document.createAttribute("src");
        source.value = "./public/icons/typescript.svg";
        icon6.setAttributeNode(source);
        icon6.classList.add("typescript");
        lang_icons.appendChild(icon6);
    }
    if (languages.includes("C#")) {
        var icon7 = document.createElement("img");
        var source = document.createAttribute("src");
        source.value = "./public/icons/csharp.svg";
        icon7.setAttributeNode(source);
        icon7.classList.add("csharp");
        lang_icons.appendChild(icon7);
    }
    if (languages.includes("Java")) {
        var icon9 = document.createElement("i");
        icon9.classList.add("bx");
        icon9.classList.add("bxl-java");
        icon9.classList.add("plain-java");
        lang_icons.appendChild(icon9);
    }
    if (languages.includes("SCSS")) {
        var icon10 = document.createElement("i");
        icon10.classList.add("bx");
        icon10.classList.add("bxl-sass");
        icon10.classList.add("scss");
        lang_icons.appendChild(icon10);
    }
    lang_icons.appendChild(icon);


    card.appendChild(lang_icons);
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function checkFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}