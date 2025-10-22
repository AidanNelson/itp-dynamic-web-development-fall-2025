console.log('hello live web!')
let icons = ['🌐', '🎉', '💻', '👾', '🐁']

let iconElements = []
function addIcon(ev) {
    console.log(ev)
    let newElement = document.createElement('p')
    newElement.innerHTML = icons[Math.floor(Math.random() * icons.length)]
    newElement.style.position = 'absolute'
    newElement.style.left = ev.pageX + 'px'
    newElement.style.top = ev.pageY + 'px'
    newElement.style.transform = 'translate(-50%,-50%)'
    newElement.style.pointerEvents = 'none'
    iconElements.push(newElement)
    document.body.appendChild(newElement)
}
document.body.addEventListener('pointerup', addIcon, false)

setInterval(() => {
    iconElements.forEach((el) => {
        el.style.left =
            parseInt(el.style.left) + (Math.random() - 0.5) * 10 + 'px'
        el.style.top =
            parseInt(el.style.top) + (Math.random() - 0.5) * 10 + 'px'
    })
}, 1000 / 20)
