// Creating Class Constructor Component Button, each time event Listener is clicked
// it will trigger the .Button-hidden from CSS file

class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.hide();
        })
    }
    hide() {
        this.element.classList.toggle('Button--hidden')
    }
}

//connecting .button from html file to buttons variable
let buttons = document.querySelectorAll(`.Button`);

// for buttons array pass through Constructor class button
buttons = Array.from(buttons).map( button => new Button(button));

