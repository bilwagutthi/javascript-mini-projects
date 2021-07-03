document.addEventListener('DOMContentLoaded',()=>{
    const display= document.getElementById("display")
    const num0= document.getElementById("num0")
    const num1= document.getElementById("num1")
    const calc= document.getElementById("calc")
    const add= document.getElementById("add")
    const sub= document.getElementById("sub")
    const mul= document.getElementById("mul")
    const div= document.getElementById("div")

    let isTyping= true
    let isComplete=false

    var expression=""

    function updateDisplay(){
        display.text=expression
    }

    num0.onclick= ()=>{
        expression+="0"
        updateDisplay()
    }
})
