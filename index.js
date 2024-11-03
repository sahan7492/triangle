const baseInput = document.getElementById("base")
const heightInput = document.getElementById("height")
const areaInput = document.getElementById("area")
const calculateInput = document.getElementById("calculate")


calculateInput.addEventListener("click", function(){

    console.log("calculate button clicked", base.value, height.value)
    let totalArea= 0.5 * base.value * height.value ;
    console.log("totalArea")
    areaInput.innerText = totalArea;
})