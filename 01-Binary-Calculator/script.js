document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById("display")
    const num0 = document.getElementById("num0")
    const num1 = document.getElementById("num1")
    const clear = document.getElementById("clear")
    const calc = document.getElementById("calc")
    const add = document.getElementById("add")
    const sub = document.getElementById("sub")

    let firstDone = false
    let oprAdd;

    var expression = ""

    function updateDisplay() {
        display.textContent = expression
        console.log("exp", expression)
    }

    function charCheck() {
        return expression.length <= 17
    }

    num0.onclick = () => {
        if (charCheck()) {
            expression += "0"
            updateDisplay()
        }
    }

    num1.onclick = () => {
        if (charCheck()) {
            expression += "1"
            updateDisplay()
        }
    }

    clear.onclick = () => {
        expression = ""
        firstDone = false
        updateDisplay()
    }

    add.onclick = () => {
        if (!firstDone && charCheck()) {
            expression += "+"
            firstDone = true
            oprAdd = true
        }
        updateDisplay()
    }

    sub.onclick = () => {
        if (!firstDone && charCheck()) {
            expression += "-"
            firstDone = true
            oprAdd = false
        }
        updateDisplay()
    }

    function evaluateExp() {
        let oprPos, ans, one, two;
        if (oprAdd) {
            oprPos = expression.indexOf("+")
        }
        else {
            oprPos = expression.indexOf("-")
        }
        one = parseInt(expression.substring(0, oprPos), 2)


        two = (oprPos < expression.length) ? parseInt(expression.substring(oprPos), 2) : 0
        console.log("opPos", oprPos, "num1", one, "num2", two);
        if (oprAdd) ans = one + two
        else ans = Math.abs(one - two)

        ans = ans.toString(2)
        console.log("Ans", ans)
        return ans

    }

    calc.onclick = () => {
        if (firstDone && charCheck) {
            expression = evaluateExp()
            firstDone = false
        }
        updateDisplay()
    }

})
