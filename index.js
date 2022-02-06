const {body} = document;
let x = [];

// Function to identify memory leaks to be used in heap snapshot
function grow() {
    for (let i = 0; i < 10000; i++) {
        document.body.appendChild(document.createElement('div'));
    }
    x.push(new Array(1000000).join('x'));
}

function changeBackground(number) {
    grow();
    // Check if background already showing
    let defaultBackground;
    if (body.className) {
        defaultBackground = body.className;
    }
    // Reset CSS class for body
    body.className = '';
    switch (number) {
        case '1':
            return (defaultBackground === 'background-1' ? false : body.classList.add('background-1'));
        case '2':
            return (defaultBackground === 'background-2' ? false : body.classList.add('background-2'));
        case '3':
            return (defaultBackground === 'background-3' ? false : body.classList.add('background-3'));
        default:
            break;
    }
}
