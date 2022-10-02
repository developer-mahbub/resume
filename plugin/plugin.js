/*-------------------
  Name: Preloader plugin;
  Author: Mahbub;
-------------------*/

/* jquery */
var preloader = $("#preloader");
var loader = '<div class="loader"></div>';
preloader.html(loader);
$(window).on('load', function(){
   preloader.fadeOut('200', function(){
   	$(this).remove();
   });
});


/* javascript */

// var preloader = document.getElementById("reloader");
// var loader = '<div class="loader"></div>';
// preloader.innerHTML = loader;
// window.onload = function() {
//     preloader.style.display = "none";
// }