window.onload = () => {
    const box = document.getElementById("box")
    let start= document.createElement("button")
    let gameInput = document.createElement("input")
    let gameSubmit = document.createElement("button")
    let gameAttempts = document.createElement("p")
    let gameResult= document.createElement("p")
    let r= Math.floor(Math.random()*11)-1
    let attemps= 5
    let replay= document.createElement("button")

    function addGameElements(){
        gameAttempts.classList.add("gameAttempts")
        gameInput.classList.add("gameInput")
        ga
        gameSubmit.classList.add("gameButton")
        gameSubmit.innerText= "GUESS"
        box.appendChild(gameAttempts)
        box.appendChild(gameInput)
        box.appendChild(gameSubmit)
        box.appendChild(gameResult)
        gameAttempts.innerText= "Attempts left: " + attemps 
    }

    function endGame(){
        box.removeChild(gameAttempts)
        box.removeChild(gameInput)
        box.removeChild(gameSubmit)
        box.appendChild(replay)
        replay.innerText = "replay"
        replay.onclick = ()=>{
            window.location.reload()
        }
    }

    function userInputCheck(){
        let guess = gameInput.value
        if ( guess == r) {
            gameResult.innerText = "Congrations! You guessed correct in " + (6-attemps) +" attemps. The number is " + r + "."
            endGame()
        }
        else{
            attemps--
            if ( attemps <=0) {
                gameResult.innerText= "You lost. The correct number was " + r +"."
                endGame()
            }
            else{
            if ( guess < r ) {
                gameResult.innerText = "Try a higher number!" 
            }
            else {
                gameResult.innerText = "Try a lower number!" 
            }
            gameAttempts.innerText= "Attempts left: " + attemps 
            }
        }
    }
    
    function game(){
        box.removeChild(start)
        addGameElements()
        gameSubmit.onclick= ()=> {
            userInputCheck()
        }         
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