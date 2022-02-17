const main = document.querySelector(".mc-border");

function createGrid(size) {
    let squareSize = document.querySelector('.mc-border').clientWidth / size;
    for(let i = 0; i < size; i++){
        let vertical = document.createElement('div')
        vertical.classList.add('squareRow');
        for(let j = 0; j < size; j++){
            let horizontal = document.createElement('DIV');
            horizontal.classList.add('squareCol');
            horizontal.style.width = squareSize + 'px';
            horizontal.style.height = squareSize + 'px';
            vertical.appendChild(horizontal);

            horizontal.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = 'black';
            })
        }
        main.appendChild(vertical);
    }
}

//Clear the grid
const clear = document.querySelector('.reset');
clear.addEventListener("click", function() {
    let squares = document.querySelectorAll("div.squareCol");
    squares.forEach(function(square) {
        square.style.background = 'white';
    })
})

//Change grid pixel size
const applyButton = document.querySelector('.apply');
applyButton.addEventListener('click', function() {
    let size = document.getElementById('gridRange').value;
    document.querySelector('.mc-border').innerHTML = '';
    createGrid(size);
})

createGrid(16);