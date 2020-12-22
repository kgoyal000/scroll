// document.getElementById("section--86216").style.transition = "opacity 0.6s";

// var visibleY = function(el){
//   var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height, 
//     el = el.parentNode;
//   do {
//     rect = el.getBoundingClientRect();
//     console.log("test"+top+" "+rect.bottom);
//     if (top <= rect.bottom === false) return false;
//     // Check if the element is out of view due to a container scrolling
//     console.log("test2"+top+""+height+" "+rect.bottom+" "+rect.top);
//     if ((top + height) <= rect.top) return false
//     el = el.parentNode;
//   } while (el != document.body);
//   // Check its within the document viewport
//   console.log("hasggsadjhdjas"+top+" "+document.documentElement.clientHeight);
//   return top <= document.documentElement.clientHeight;
// };

// // Stuff only for the demo
// function attachEvent(element, event, callbackFunction) {
//     if (element.addEventListener) {
//         element.addEventListener(event, callbackFunction, false);
//     } else if (element.attachEvent) {
//         element.attachEvent('on' + event, callbackFunction);
//     }
// };

// var update = function(){

//     var fadeTarget = document.getElementById("section--86216");
// console.log(visibleY(document.getElementById('headline-57978')))
//     visibleY(document.getElementById('headline-57978')) 
//         ? fadeTarget.style.opacity = '1' : fadeTarget.style.opacity = '0';
// };
// attachEvent(document, "scroll", update);
// attachEvent(window, "resize", update);
// update();
