var commentsDOM = document.querySelector(".captions-div");
var commentBtn = document.querySelector(".commentBtn")
var clearBtn = document.querySelector(".clearBtn")
var commentInterval;
var commentsOn = false;

var eww_comments=["ewwww", "whose this??", "yuck!!", "ummm", "🤨🤨🤨", "💩💩💩", "put brat back on!", "#unsubscribe", "waaackk!! 🙄"];
var generic = ["okay okay!", "thats whats up!!!", "daaammmn, this bitch a foo!", "WWWWWTTFFFFF!!!", "jajajajaja😂", "wow wow wowowowow!!🔥", "dis dat dope!!😈"]
var brat_comments=["yeaaaaa!!!", "😍😍😍😍", "love you brat!!", "awesome!!!", "yay!!", "daaaaamn! 😛🤩", "krusssshin it!"];
var ruby_comments=["roooster!!!", "go ruby, go ruby!!", "thats right, yaaa!", "🤪😃🤪😃🤪😃", "🤗!!!!", "ruby! ruby! ruby!", "whoooooooooo!!!🤯"]



function streamComments(comments){

    let random=Math.random() *  comments.length | 0;

    // console.log(comments[random])

    printComment(comments[random])

    
   
  
}

function printComment(comment){
    let h4=document.createElement("h4");
    h4.className="comment-h5";
    h4.innerText=comment;

    commentsDOM.appendChild(h4);

    setTimeout(()=>{
        commentsDOM.removeChild(h4)
    },1000)
}


//streamComments(brat_comments)


commentBtn.onclick=toggleComments;



function toggleComments(){
  
    if(!commentsOn){
    if(user === "ruby"){
        commentInterval = setInterval(()=>{streamComments(ruby_comments)},750)
    }

    else if(user === "cindy" || user === "brat"){
        commentInterval = setInterval(()=>{streamComments(brat_comments)},750)
    }
    else{
        let smushed =[...eww_comments,...generic];
        console.log("smushed condition!")
        commentInterval = setInterval(()=>{streamComments(smushed)},750)
    }
    commentsOn = true;
    commentBtn.innerText= "Hide Comments 🙈"

}
    
    else{
        commentsOn = false;
        clearInterval(commentInterval)
        commentBtn.innerText= "Show Comments"
        return;

    }

}


