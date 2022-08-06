const map = [
    {
        "key" : "1",
        "url" : "videoplayback.mp4",
        "ops" : ["2","3","4"]
    } , 
    {
        "key" : "2",
        "url" : "videoplayback2.mp4",
        "ops" : ["3","4","5"]
    },
    {
        "key" : "3",
        "url" : "videoplayback3.mp4",
        "ops" : ["2"]
    },
    {
        "key" : "4",
        "url" : "videoplayback4.mp4",
        "ops" : []
    },
    {
        "key" : "5",
        "url" : "videoplayback5.mp4",
        "ops" : []
    }
]

function findVideoNode(key){
    return map.find( element => element.key === key);
}