const main = document.querySelector(".mc-border");
let count = 0;

for(let i = 0; i < 16; i++){
    let vertical = document.createElement('div')
    vertical.classList.add('squareRow');
    for(let j = 0; j < 16; j++){
        let horizontal = document.createElement('DIV');
        horizontal.classList.add('squareCol');
        vertical.appendChild(horizontal);
        // horizontal.textContent = count++;
        // horizontal.addEventListener('mouseover', function(event){
        //     event.target.style.backgroundColor = 'black';
        // })
    }
    main.appendChild(vertical);
}

//Event listener to allow drawing on the grid
const hover = document.querySelector('.mc-border');
hover.addEventListener("mouseover", function(event) {
    // highlight the mouseover target
    event.target.style.background = "black";
});

//Clear the grid
const clear = document.querySelector('.reset');
clear.addEventListener("click", function() {
    let squares = document.querySelectorAll("div.squareCol");
    squares.forEach(function(square) {
        square.style.background = 'white';
    })
})