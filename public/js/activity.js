/**
 * If the body tag is undefined, wait 9 seconds and check again. If it's defined, execute the callback
 * function.
 * @param callback - The function to be executed when the DOM is ready.
 */
function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 9000);
  }
  
/**
 * If the visible parameter is true, then set the display style of the element with the given selector
 * to block, otherwise set it to none.
 * @param selector - The CSS selector for the element you want to show or hide.
 * @param visible - A boolean value that indicates whether the element should be visible or not.
 */
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
/* Calling the function onReady and passing in a function as an argument. */
  onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
  });