
let screenDiv = document.querySelector(".screen-div")
let captionDiv = document.querySelector(".caption-div")
let myVideo = document.createElement("video");
myVideo.className ='video'
myVideo.muted = true;

var cameraBtn = document.querySelector(".pictureBtn")
var audioBtn = document.querySelector(".audioBtn");
// var toggleCanvasBtn = document.querySelector(".canvasToggleBtn");
var canvas = document.querySelector("#picturecanvas");
var canvasDiv = document.querySelector(".canvasDiv")
var greenCheck = document.querySelector(".greencheck");
var galleryDiv = document.querySelector(".gallery");
var alertDOM = document.querySelector(".alert");

canvasDiv.style.display = 'none'

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


main()

var SS = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SS();

recognition.onspeechstart=()=>{
    console.log("Recording has started")
    
}

recognition.onspeechend=()=>{
    console.log("Recording has ended")
}
recognition.onresult=(e)=>{
    console.log("Recording results")
    console.log(e.results[0][0].transcript)

    let text = e.results[0][0].transcript
    animateText(text)
}




audioBtn.onclick=startRecording;


function startRecording(){
    alertDOM.innerHTML= "Start speaking!"
    setTimeout(()=>{
        alertDOM.innerHTML= ""

    },1200)
    recognition.start()
}



function animateText(text){
    captionDiv.innerHTML = ""
    let h2 = document.createElement("h2");
    h2.innerText = text;
    h2.className="fadein-h2"
    captionDiv.appendChild(h2)
}


cameraBtn.onclick=takePic


function takePic(){
    console.log('takePic() fired!')
    canvasDiv.style.display='block'

    var context = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 200;

    context.drawImage(myVideo,0,0,canvas.width,canvas.height)


}



// toggleCanvasBtn.onclick=function(){
//     console.log(canvasDiv.style.display)
//     if(canvasDiv.style.display === "block"){
//         canvasDiv.style.display='none'
//     }
//     else{
//         canvasDiv.style.display = "block"
//     }
// }


greenCheck.onclick=savePic;



function savePic(){
    console.log("savePic() fired!")

    let img = document.createElement("img");
    let imgUrl = canvas.toDataURL("/image/png");
    img.setAttribute("src",imgUrl);
    img.className="saveimg"

    if(canvas.getAttribute('data-filter')){
        img.style.filter=canvas.getAttribute("data-filter")
    }
    // img.style.filter=filter
        galleryDiv.appendChild(img)
        canvasDiv.style.display='none'
}