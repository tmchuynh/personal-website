function onReady(callback) {
    var intervalId = window.setInterval(function () {
        if (document.querySelectorAll(".img-screenshot") !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}

function setVisible(selector, visible) {
    document.querySelectorAll(selector).style.display = visible ? 'block' : 'none';
}

onReady(function () {
    setVisible('.img-screenshot', true);
    setVisible('#loading', false);
});