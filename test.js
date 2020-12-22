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

var file = location.pathname.split( "/" ).pop();

var link = document.createElement( "link" );
link.href = "https://www.barxbuddy.com/enV2Golden/app/desktop/css/custom.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );
document.getElementById("section--86216-174").classList.add('floating-bar')
if (screen.width > 860){
window.addEventListener('scroll', function() {    
              var doc = document.documentElement;
              var scroll =  (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
             if (scroll >= 1600) {
                 //clearHeader, not clearheader - caps H
                 document.querySelector(".floating-bar").classList.add("showup");
             }
             else {
                document.querySelector(".floating-bar").classList.remove("showup");
             }
         } , false);
}else{
window.addEventListener('scroll', function() {    
              var doc = document.documentElement;
              var scroll =  (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
             if (scroll >= 3000) {
                 //clearHeader, not clearheader - caps H
                 document.querySelector(".floating-bar").classList.add("showup");
             }
             else {
                document.querySelector(".floating-bar").classList.remove("showup");
             }
         } , false);
}
