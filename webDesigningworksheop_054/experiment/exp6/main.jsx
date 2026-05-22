
let heading = document.getElementById("mainHeading"); 
let input = document.getElementById("userInput");     
let para = document.getElementById("paragraph");      
let changeTextBtn = document.getElementById("changeTextBtn");
let colorBtn = document.getElementById("bgColorBtn");     
let fontBtn = document.getElementById("fontSizeBtn");     
let toggleBtn = document.getElementById("toggleBtn");
let resetBtn = document.getElementById("resetBtn");


changeTextBtn.onclick = function() {
    heading.innerText = input.value;
};


colorBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

fontBtn.onmouseover = function() {
    heading.style.fontSize = "40px";
};


let isVisible = true;
toggleBtn.addEventListener("click", function() {
    if (isVisible) {
        para.style.display = "none";
        isVisible = false;
    } else {
        para.style.display = "block";
        isVisible = true;
    }
});

input.onchange = function() {
    console.log("Input changed to: " + input.value);
};


resetBtn.addEventListener("click", function() {
    heading.innerText = "Welcome to JavaScript Lab"; 
    document.body.style.backgroundColor = "#f4f4f4"; 
    heading.style.fontSize = "24px";
    para.style.display = "block";
    input.value = "";
});
