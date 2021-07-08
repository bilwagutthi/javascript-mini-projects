document.addEventListener('DOMContentLoaded',()=>{
    const display= document.getElementById("display")
    const num0= document.getElementById("num0")
    const num1= document.getElementById("num1")
    const clear= document.getElementById("clear")
    const calc= document.getElementById("calc")
    const add= document.getElementById("add")
    const sub= document.getElementById("sub")

    let isTyping= true
    let isComplete=false
    let firstNotDone= true

    var expression=""

    function updateDisplay(){
        display.textContent=expression
        console.log(expression)
    }

    function charCheck(){
        return expression.length <=17
    }

    num0.onclick= ()=>{
        if(charCheck()){
        expression+="0"
        updateDisplay()
        }
    }

    num1.onclick= ()=>{
        if(charCheck()){
        expression+="1"
        updateDisplay()
    }
    }

    clear.onclick=()=>{
        expression= ""
        firstNotDone= true
        updateDisplay()
    }

    add.onclick=()=>{
        if(firstNotDone && charCheck()){
            expression+="+"
            firstNotDone= false
        }
        updateDisplay()
    }

    sub.onclick=()=>{
        if(firstNotDone && charCheck()){
            expression+="-"
            firstNotDone= false
        }
        updateDisplay()
    }

    calc.onclick= () => {
        
    }

})
