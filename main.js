let input = document.querySelectorAll("input")
let moveableBox = document.querySelector('.moveableBox')
console.log(input)
console.log(moveableBox)
input.forEach(e => {
    e.addEventListener("change",()=>{
        moveableBox.style.width = `${input[0].value}%`
        moveableBox.style.height = `${input[1].value}%`
        moveableBox.style.borderRadius = `${input[2].value}px`
        moveableBox.style.backgroundColor = `${input[3].value}`
    })
});


let resetbtn = document.querySelector('#reset')
resetbtn.addEventListener("click" , ()=>{
        moveableBox.style.width = "30%"
        moveableBox.style.height = "40%"
        moveableBox.style.borderRadius = "0"
        moveableBox.style.backgroundColor = "blue"
})


