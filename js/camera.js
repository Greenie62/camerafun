
let screenDiv = document.querySelector(".screen-div")
let myVideo = document.createElement("video");
myVideo.className ='video'
myVideo.muted = true;

const main = async()=>{

let stream = await navigator.mediaDevices.getUserMedia({video:true,audio:true})

    postVideo(stream,myVideo)

}


function postVideo(stream,vid){

    vid.srcObject = stream;

    vid.onloadedmetadata=()=>{
        console.log('video play')
        vid.play()
    }
    screenDiv.appendChild(vid)

}


//main()