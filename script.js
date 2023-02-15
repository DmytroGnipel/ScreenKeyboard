//get needed DOM-elements
let buttons = document.querySelectorAll('button')
let input = document.querySelector('input')
let capslock = document.querySelector('.capslock')
let backspace = document.querySelector('.backspace')
//input symbols
for (let button of buttons) {
    button.addEventListener('click', function() {
        if (button.textContent !== 'Caps Lock' && button.textContent !== 'Backspace')
       input.value += this.textContent
    })  
}

//capslock
let flag = true
capslock.addEventListener('click', function(){
    for (let button of buttons) {
        if (button.textContent !== 'Caps Lock' && button.textContent !== 'Backspace') {
    if (flag) button.textContent = button.textContent.toLocaleUpperCase()
    else button.textContent = button.textContent.toLocaleLowerCase()
}}
    if (flag) flag = false
    else flag = true
})
//backspace
backspace.addEventListener('click', function(){
    let array = input.value.split('').slice(0, input.value.split('').length -1)
    input.value = array.join('')
})




