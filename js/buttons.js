var filterOptions=[{name:'blur',min:0,max:10,unit:"px"},
                   {name:'brightness',min:1,max:100,unit:"%"},
                   {name:'contrast',min:0,max:200,unit:"%"},
                   {name:'sepia',min:0,max:100,unit:"%"},
                   {name:'saturate',min:0,max:100,unit:"%"},
                   {name:'hue-rotate',min:0,max:200,unit:'deg'},
                   {name:"normal",min:0,max:100,unit:"%"}
                ]
var optionColumn = document.querySelector(".option-column")
var currentOption;
var currentUnit;

function printButtons(options){
    var html="";

    options.forEach(o=>{
        html += `<button data-min=${o.min} data-max=${o.max} data-unit=${o.unit} class='optionBtn'>${o.name}</button>`
    })

    optionColumn.innerHTML= html
}


printButtons(filterOptions)


var optionBtns=document.querySelectorAll(".optionBtn");

// console.log(optionBtns)

optionBtns.forEach(btn=>{
    btn.onclick=(e)=>pickOption(e)
})


function pickOption(e){
    console.log(e.target)
    console.log(e.target.textContent)
    currentOption = e.target.textContent

    let min = e.target.getAttribute('data-min');
    let max = e.target.getAttribute('data-max');
    let unit = e.target.getAttribute('data-unit');

    currentUnit = unit;

    document.querySelector(".rangeinput").setAttribute('min',min)
    document.querySelector(".rangeinput").setAttribute('max',max)
}
