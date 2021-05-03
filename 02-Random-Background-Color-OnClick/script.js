document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById("body")
    const btn = document.getElementById("btn")

    function getContrast(r, g, b) {
        let [cr, cg, cb] = [
            r >= 200 ? (255 - r) + 100 : r + 100,
            g >= 200 ? (255 - g) + 100 : g + 100,
            b >= 200 ? (255 - b) + 100 : b + 100
        ]

        return "rgb(" + cr + "," + cg + "," + cb + ")"
    }
    /*
    function getContrast(r, g, b) {
        let [cr, cg, cb] = [
            255-r, 255-g, 255-b
        ]
        return "rgb(" + cr + "," + cg + "," + cb + ")"
    }
    */
    function randomColor() {
        let red = Math.floor(Math.random() * 255)
        let green = Math.floor(Math.random() * 255)
        let blue = Math.floor(Math.random() * 255)

        return ["rgb(" + red + "," + green + "," + blue + ")", getContrast(red, blue, green)]
    }

    function changeColor(e) {
        let [newColor, contrastColor] = randomColor()
        body.style.backgroundColor = newColor
        btn.style.borderColor = contrastColor
        btn.style.color = contrastColor

    }

    function main() {
        changeColor(0);
        btn.addEventListener('click', changeColor)
    }
    main()

})