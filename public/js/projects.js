var project_container = document.getElementById('project-list');
var cards = document.querySelectorAll(".cards");
var module_container = document.querySelector('.offcanvas');
var module_body = document.querySelector('.offcanvas-body');
var module_title = document.querySelector('.offcanvas-title');
var information = document.getElementsByClassName("large-container")[0];
var obj = new Array();
var el_data, languages_list;
/**
 * Get repository info from GitHub API 
 */

$.getJSON('https://api.github.com/users/tmchuynh/repos?per_page=53', (data) => {
    console.log(data);
    data.forEach((element) => {
        el_data = element;


        if (element.fork == false) {
            $.getJSON(element.languages_url, (data) => {
                languages_list = Object.keys(data);

                populate(element.name, element.pushed_at, Object.keys(data), element);

                if (element.contents_url != "") {
                    var array = element.contents_url.split("{");
                    console.log(array[0]);
                    $.getJSON(array[0], (htmlfiles) => {
                        console.log(htmlfiles);
                        if (htmlfiles.name == "README.md") {
                            moduleCreator(element.name, Object.keys(data).element.html_url, element, htmlfiles.html_url)
                        }
                    });

                }
            })
        }
    })
})

cards.forEach(element => {
    element.addEventListener('click', () => {
        moduleCreatorDefault(el_data.name, languages_list, el_data.html_url, el_data);
    })
});

/*
 * Create module with project information
 */
function moduleCreatorDefault(name, languages, url, element) {
    module_title.innerHTML = name;
    var link = document.createElement('a');
    link.setAttribute("href", url);
    link.innerHTML = url;
    module_body.appendChild(link);

    console.log(name, languages, url);
    var name_parts = name.replace("-", " ");
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

    module_body.appendChild(large_container);
}

function moduleCreator(name, languages, url, element, readme_url) {
    module_title.innerHTML = name;
    var link = document.createElement('a');
    link.setAttribute("href", url);
    link.innerHTML = url;
    module_body.appendChild(link);

    // console.log(name, languages, url);
    var name_parts = name.replace("-", " ");
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
    container_readme_text.innerHTML = readme_url;
    container_readme.appendChild(container_readme_text);
    large_container.appendChild(container_readme);

    module_body.appendChild(large_container);
}

/**
 * Populate repository project cards with language icons respectively
 * 
 * @param {any} name = Project name
 * @param {any} url = GitHub URL link
 * @param {any} updated = Last commit / push date MM/DD/YYYY
 * @param {any} languages = Programming languages used
 */
function populate(name, updated, languages, element) {
    // console.log(name)

    var card = document.createElement("div");
    card.classList.add("cards");
    card.setAttribute("type", "button");
    card.setAttribute("data-bs-toggle", "offcanvas");
    card.setAttribute("data-bs-target", "#offcanvas");
    card.setAttribute("aria-controls", "offcanvasExample");

    card.addEventListener("click", () => moduleCreator(name, languages, element.html_url));

    addLanguages(languages, card);

    var title = document.createElement("a");
    title.classList.add("title");
    var name_parts = name.replace("-", " ");
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