//this is a factory function for markers (not really needed but just did it to practice)
const marker = (elementId, onSelectClassName) => { 
    const domReference = document.getElementById(elementId);
    const onSelect = document.getElementsByClassName(onSelectClassName);
    return {domReference, onSelect};
}

//set up poland
const poland = marker("poland", "polandSelect");
const polandReference = poland.domReference;
let polandToggle = poland.onSelect;

//this module handles interactions with the map (most of the program)
const mapControl = (() => {

    //this function deals with the initial setup and forces the user to click on the screen
    //this is needed because if they dont click on the screen, the audio won't play 
    const onLoadIn = () => {
        let initMap = document.getElementsByClassName("initialMap");
        const startButton = document.getElementById("startClick");
        let onEntry = document.getElementById("onEntry");
        startButton.addEventListener("click", () => {
            for (let l = 0; l < initMap.length; l++) {
                if (initMap[l].namespaceURI = "title" || "footer") {
                    console.log(initMap[l])
                    initMap[l].style.display = "flex";
                }
                else {
                    initMap[l].style.display = "block";
                } 
            }
            onEntry.style.display = "none";
        })
        
    }
    onLoadIn();//call the function when we load in

    //this function adds a listener to a marker to toggle content when it is clicked
    const addMarkerListener = (marker, toggle) => {
        //if there are no params passed, return
        if (marker == undefined) {
            return;
        }
        marker.addEventListener("mouseover", () => {
            for (let i = 0; i < toggle.length; i++) {
                //play or pause the audio
                if (toggle[i].tagName == 'AUDIO') {
                    if (toggle[i].paused == false) {
                        toggle[i].pause();
                    }
                    else {
                        toggle[i].play();
                    }
                    
                } 
                //toggle the display
                if (toggle[i].style.display == '') {
                    toggle[i].style.display = 'block';
                }
                else {
                    toggle[i].style.display = '';
                }
            }
            
        });
    };
    return {addMarkerListener};
})();

//add a listener to the poland marker
mapControl.addMarkerListener(polandReference, polandToggle);