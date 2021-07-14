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
    let oprAdd;

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
            oprAdd = true
        }
        updateDisplay()
    }

    sub.onclick=()=>{
        if(firstNotDone && charCheck()){
            expression+="-"
            firstNotDone= false
            oprAdd = false
        }
        updateDisplay()
    }

    function evaluateExp(){
        let oprPos, ans, one , two;
        if (oprAdd){
            oprPos = expression.indexOf("+")
        }
        else{
            oprPos= expression.indexOf("-")
        }
        one = parseInt(expression.substring(0,oprPos),2)
        
        if(oprPos>= expression.length)
        two = parseInt(expression.substring(oprPos+1),2)
        else two = 0
        console.log(oprPos, one , two);
        if (oprAdd) ans= one+two
        else ans=Math.abs(one- two)
        console.log(ans.toString(2),ans)
        return ans.toString(2)

    }

    calc.onclick= () => {
        if(!firstNotDone && charCheck){
        expression= evaluateExp()
        }
        updateDisplay()
    }

})
