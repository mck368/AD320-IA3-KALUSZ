window.onload = function() {                 
    var clickMe = document.getElementById("div1");
    var hoverMe = document.getElementById("div2");
    var unhoverMe = document.getElementById("div2");
    var dblClickMe = document.getElementById("div3");
    var resizeMe = document.getElementById("div4");
    var moveMe = document.getElementById("div5");

    if(clickMe) {
        clickMe.addEventListener('click', changeText);
    }
    
    function changeText() {
        clickMe.innerHTML = "Nice!";
    }
    
    if(hoverMe) {
        hoverMe.addEventListener('mouseover', mouseHover);
    }   

    function mouseHover() {
        hoverMe.innerHTML = "Unhover Me";
    }
    
    if(unhoverMe) {
        unhoverMe.addEventListener('mouseout', mouseUnhover);
    }

    function mouseUnhover() {
        unhoverMe.innerHTML = "Hover Me";
    }
    
    if(dblClickMe) {
        dblClickMe.addEventListener('dblclick', doubleClick);
    }

    function doubleClick() {
        dblClickMe.innerHTML = "Cool";
    }
    
    if(resizeMe) {
        window.addEventListener('resize', changeWindow);
    }

    function changeWindow() {
        resizeMe.innerHTML = "I'm Changing!!!";
    }
    
    if(moveMe) {
        moveMe.addEventListener('mousemove', moveBlue);
    }

    function moveBlue() {
        moveMe.innerHTML = "Ahh a mouse!";
    }
}