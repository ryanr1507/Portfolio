
window.onresize = windowResize;
window.onload = windowResize;



function windowResize () {
  const container = document.querySelector('#sonar-emitter');
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  var num = width/height;


  if(num < 1) {
    document.getElementById("myImage").style.zIndex= "-2";
    document.getElementById("myImageShadow").style.zIndex= "-2";
    document.getElementById("div-back").classList.remove("div-back");
    document.getElementById("div-back").classList.add("div-back2");
    removeAllChildNodes(container);
  }
  else {
    document.getElementById("myImage").style.zIndex= "0";
    document.getElementById("myImageShadow").style.zIndex= "1";
    document.getElementById("div-back").classList.remove("div-back2");
    document.getElementById("div-back").classList.add("div-back");

    container.innerHTML = "<div  onclick='' id='sonar-emitter'><section id='section10'><a id='thisA' class='nav-link link' href='#middle'></a><a ><span></span></a></section></div>";
    $("#thisA").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
      
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  }
}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}