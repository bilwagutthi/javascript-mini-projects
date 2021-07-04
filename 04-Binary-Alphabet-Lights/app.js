document.addEventListener('DOMContentLoaded', () => {
    let box = document.querySelector('.box')
    let startButton = document.createElement('button')
    let lightBoxArray = []
    let alphs = genCharArray('A', 'Z')
    let binaplhs = getBinCharArray(alphs)
    let letterbox

    function genCharArray(charA, charZ) {
        var a = [],
            i = charA.charCodeAt(0),
            j = charZ.charCodeAt(0)
        for (; i <= j; ++i) {
            a.push(String.fromCharCode(i))
        }
        return a
    }

    function getBinCharArray(chars) {
        var n = chars.length
        var bins = new Array(n)
        for (var i = 0; i < n; i++) {
            bins[i] = '0' + chars[i].charCodeAt(0).toString(2)
        }
        return bins
    }

    function wait(ms) {
        var start = new Date().getTime()
        var end = start
        while (end < start + ms) {
            end = new Date().getTime()
        }
    }
    function bling(i) {
        var m = 8
        console.log('in' +i)
        for (var j = 0; j < m; j++) {
            var l = lightBoxArray[j]
            if (binaplhs[i][j] == 0) {
                l.style.backgroundColor = 'pink'
            }
            else {
                l.style.backgroundColor = 'blue'
            }
        }
        

        return 0
    }

    function playLights() {
        var n = 26
        var m = 8
        for (var i=0;i<n;i++)
        {   
            setInterval(function(){
                letterbox.textContent='yes'+alphs[i]
                console.log('out' + i)
        },5000)     
        }
    }

    function btnClick() {
        console.log('click works')
        box.removeChild(box.firstChild)
        for (var i = 0; i < 8; i++) {
            var lightBox = document.createElement('div')
            lightBox.className = 'light'
            lightBox.id = 'id' + i
            lightBox.textContent = i
            box.appendChild(lightBox)
            lightBoxArray.push(lightBox)
        }
        letterbox=document.createElement('div')
        letterbox.className='letterbox'
        letterbox.textContent='letters here'
        box.appendChild(letterbox)
        playLights()
    }

    function start() {
        startButton.textContent = "Start"
        startButton.classList.add('.start')
        box.appendChild(startButton)
        console.log(alphs, binaplhs)
    }

    start()
    startButton.onclick = function () {
        btnClick()
    }
})