var rangeInput = document.querySelector(".rangeinput");
var rangeValueDOM = document.querySelector(".rangevalue");


rangeInput.oninput=(e)=>{
    console.log(e.target.value)

    const { value } = e.target

    rangeValueDOM.innerHTML = value

    adjustImage(currentOption,value)
}


function adjustImage(option,value){
    console.log(option,value)
    if(option === 'normal'){
        console.log("normal fired!")
        myVideo.style.filter='none'
        return;
    }
    console.log(`${option}(${value}${currentUnit})`)

    let filterValue = `${option}(${value}${currentUnit})`

    canvas.setAttribute("data-filter",filterValue)

    myVideo.style.filter = filterValue
}


console.log(myVideo)