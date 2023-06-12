var project_container = document.getElementById('project-list');
var cards = document.querySelectorAll(".cards");
var screenshots = document.querySelectorAll(".screenshots");
var obj = new Array();

/* Using the GitHub API to get the list of repositories and then populate the project cards with the
information. */
$.getJSON('https://api.github.com/users/tmchuynh/repos?per_page=150', (data) => {
    data.forEach((element) => {
        console.log(element.name);
        if ((element.fork == false && element.topics.length > 0) || (element.fork == true && (checkFileExist("../public/screenshots/" + element.name + ".png")))) {
            $.getJSON(element.languages_url, (data) => {
                populate(element.name, element.pushed_at, Object.keys(data), element);
            })
        }
    })
})

/**
 * It creates a card for each project and populates it with the project's name, languages, last updated
 * date, and a screenshot
 * @param name - The name of the project
 * @param updated - The date the project was last updated
 * @param languages - an array of languages used in the project
 * @param element - the element of the array of objects
 */
function populate(name, updated, languages, element) {
    var card = document.createElement("div");
    card.classList.add("cards");
    card.classList.add("animated");
    card.classList.add("fadeIn");

    addLanguages(languages, card);

    var title = document.createElement("a");
    title.classList.add("title");
    var formattedName = formatName(name);
    title.innerHTML = formattedName;
    title.setAttribute("href", element.html_url);
    card.appendChild(title);

    

    var screenshotSrc = "../public/screenshots/" + name + ".png";
    if (checkFileExist(screenshotSrc)) {
        var screenshotImg = createScreenshotImage(screenshotSrc, name);
        card.appendChild(screenshotImg);
    }

    var dateElement = document.createElement("div");
    dateElement.classList.add("date");

    var subtitle = createCodeElement("last-updated", "mb-0");
    subtitle.appendChild(document.createTextNode("Last updated on:"));
    dateElement.appendChild(subtitle);

    var date = updated.split("T")[0];
    
    var lastUpdated = createCodeElement("last-updated", "mt-0");
    lastUpdated.innerHTML = formatDate(date);
    dateElement.appendChild(lastUpdated);

    card.appendChild(dateElement);

    project_container.appendChild(card);
}

/**
 * The function takes a date in the format of "YYYY-MM-DD" and returns it in the format of
 * "MM/DD/YYYY".
 * @param date - The input date in the format "YYYY-MM-DD".
 * @returns The function `formatDate` takes a date string in the format "YYYY-MM-DD" and returns a new
 * string in the format "MM/DD/YYYY".
 */
function formatDate(date) {
    var date_0 = date.split("-");

    var year = date_0[0];
    var month = date_0[1];
    var day = date_0[2];

    return month + "/" + day + "/" + year;
}

/**
 * Formats a given name by replacing all hyphens and underscores with spaces and capitalizing the first letter of every word.
 *
 * @param {string} name - The name to be formatted.
 * @return {string} The formatted name.
 */
function formatName(name) {
    let formattedName = name.replaceAll("-", " ");
    formattedName = formattedName.replaceAll("_", " ");
    formattedName = titleCase(formattedName);
    return formattedName;
}

/**
 * Creates a new code element with the specified classNames.
 *
 * @param {...string} classNames - The class names to add to the new code element.
 * @return {HTMLElement} The newly created code element.
 */
function createCodeElement(...classNames) {
    const codeElement = document.createElement("code");
    codeElement.classList.add(...classNames);
    return codeElement;
}

/**
 * Creates an HTML `img` element with the specified `src` and `alt` attributes,
 * and returns it. The `img` element is also given the `img-screenshot` class.
 *
 * @param {string} src - The URL of the image to display.
 * @param {string} alt - A description of the image, for accessibility purposes.
 * @return {HTMLImageElement} The `img` element that was created.
 */
function createScreenshotImage(src, alt) {
    const img = document.createElement("img");
    img.classList.add("img-screenshot");
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    return img;
}


/**
 * We lowercase all the characters in the string, split the string into an array of words, map over the
 * array to capitalize the first letter of each word, then join the array back into a string
 * @param str - the string to be converted
 * @returns the string with the first letter of each word capitalized.
 */
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

/**
 * Adds the languages to the card as icons from Boxicons
 * @param languages - an array of strings that represent the languages used in the project
 * @param card - The card element that the languages will be added to.
 */
function addLanguages(languages, card) {
    const langIcons = document.createElement("div");
    langIcons.classList.add("d-flex");
    langIcons.classList.add("languages_list");

    if (languages.length === 0) {
        const icon = document.createElement("i");
        icon.classList.add("bx");
        icon.innerHTML = " ";
        langIcons.appendChild(icon);
    } else {
        if (languages.includes("HTML")) {
            const icon2 = createIcon("bxl-html5", "html");
            langIcons.appendChild(icon2);
        }
        if (languages.includes("Python")) {
            const icon3 = createIcon("bxl-python", "python");
            langIcons.appendChild(icon3);
        }
        if (languages.includes("JavaScript")) {
            const icon4 = createIcon("bxl-javascript", "javascript");
            langIcons.appendChild(icon4);
        }
        if (languages.includes("CSS")) {
            const icon5 = createIcon("bxl-css3", "css");
            langIcons.appendChild(icon5);
        }
        if (languages.includes("TypeScript")) {
            const icon6 = createImageIcon("./public/icons/typescript.svg", "typescript");
            langIcons.appendChild(icon6);
        }
        if (languages.includes("C#")) {
            const icon7 = createImageIcon("./public/icons/csharp.svg", "csharp");
            langIcons.appendChild(icon7);
        }
        if (languages.includes("Java")) {
            const icon9 = createIcon("bxl-java", "plain-java");
            langIcons.appendChild(icon9);
        }
        if (languages.includes("SCSS")) {
            const icon10 = createIcon("bxl-sass", "scss");
            langIcons.appendChild(icon10);
        }
    }

    const icon = document.createElement("i");
    icon.classList.add("bx");
    langIcons.appendChild(icon);

    card.appendChild(langIcons);
}

/**
 * Creates an icon element with the specified icon and language classes.
 *
 * @param {string} iconClass - The class name for the icon.
 * @param {string} langClass - The class name for the language.
 * @returns {HTMLElement} - The icon element.
 */
function createIcon(iconClass, langClass) {
    const icon = document.createElement("i");
    icon.classList.add("bx");
    icon.classList.add(iconClass);
    icon.classList.add(langClass);
    return icon;
}

/**
 * Creates an image icon with the given source and adds a language class to it.
 *
 * @param {string} src - The source URL of the image.
 * @param {string} langClass - The language class to be added to the icon.
 * @return {HTMLElement} The newly created icon element.
 */
function createImageIcon(src, langClass) {
    const icon = document.createElement("img");
    const source = document.createAttribute("src");
    source.value = src;
    icon.setAttributeNode(source);
    icon.classList.add(langClass);
    return icon;
}


/**
 * It takes a string, finds all the words in it, and capitalizes the first letter of each word
 * @param str - The string to be converted.
 * @returns The first letter of each word is capitalized and the rest of the letters are lowercase.
 */
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

/**
 * It creates an XMLHttpRequest object, sends a HEAD request to the URL, and returns true if the status
 * is not 404
 * @param urlToFile - The URL to the file you want to check.
 * @returns a boolean value.
 */
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