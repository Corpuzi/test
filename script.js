let colors = ["red", "blue", "pink", "orange", "yellow", "purple"];

function changeColor() {
    var randomNumber = Math.floor(Math.random() * (colors.length));
    document.body.style.backgroundColor = colors[randomNumber];
    }
