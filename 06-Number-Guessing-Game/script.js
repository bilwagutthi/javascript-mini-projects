window.onload = () => {
    const box = document.getElementById("box")
    let start= document.createElement("button")
    let gameInput = document.createElement("input")
    let gameSubmit = document.createElement("button")
    let gameAttempts = document.createElement("p")
    let gameResult= document.createElement("button")

    function addGameElements(){
        gameAttempts.classList.add("gameAttempts")
        gameInput.classList.add("gameInput")
        gameSubmit.classList.add("gameButton")
        gameSubmit.innerText= "GUESS"
        box.appendChild(gameAttempts)
        box.appendChild(gameInput)
        box.appendChild(gameSubmit)
    }
    
    function game(){
        box.removeChild(start)
        addGameElements()
        
    }
    function main(){
       
        start.innerText= "START"
        start.classList.add("startButton")
        box.appendChild(start)
        start.onclick = () => {
            game()
        }
    }
    main()
}