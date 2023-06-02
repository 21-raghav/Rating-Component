const ratings = document.querySelectorAll("label");
let rateValue;
ratings.forEach(item => {
    item.onclick = clickHandler;

    function clickHandler(event) {
        ratings.forEach(item => item.classList.remove("active"));
        this.classList.add("active");

        rateValue = this.querySelector("input").value;
    }
});


const btn = document.querySelector("button");

btn.onclick = submitHandler;

function submitHandler() {
    const first = document.querySelector("#first");
    const second = document.querySelector("#second");
    const outputValue = document.querySelector(".output-value");
    
    if(rateValue) {
    first.style.display = "none";
    second.style.display = "block";

    outputValue.innerHTML = rateValue;
    }
}