let player = videojs("my-video");

baderlike = {    
    currentKey : "1",
    controlButtons : document.querySelectorAll(".bt-op"),
    selectOpt : function (selected){
        if(!player.paused()){
            let nextVideoNode = findVideoNode(selected);
            player.src({type : 'video/mp4' , src : nextVideoNode.url });
            player.load();
            this.current = nextVideoNode;
            player.play();
            console.log(this.current);
            hideAllButtons();
            configureButtons();
        }
    },

}