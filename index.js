let player = videojs("my-video");
let currentKey = "1";

// console.log(map);
let buttons = document.querySelectorAll(".bt-op");
//console.log(buttons);
let current = findVideoNode(currentKey);
console.log(current);

initButtons();
configureButtons();

function selectOpt(selected){
    if(!player.paused()){
        let nextVideoNode = findVideoNode(selected);
        player.src({type : 'video/mp4' , src : nextVideoNode.url });
        player.load();
        current = nextVideoNode;
        player.play();
        console.log(current);
        hideAllButtons();
        configureButtons();
    }
}

function initButtons(){
    buttons.forEach(element => {
        element.addEventListener('click', function(e){
            selectOpt(element.dataset.op);
        });
        element.style.display = 'none';
    });
}

function configureButtons(){
    let flag = 0;
    console.log(current.ops);
    current.ops.forEach(element => {
        // console.log(element);
        // console.log(buttons[flag]);
        buttons[flag].style.display = "";
        buttons[flag++].dataset.op = element;
    });
}

function showButton(button){

}

function hideAllButtons(){
    buttons.forEach(element => {
        element.style.display = 'none';
    });
}

