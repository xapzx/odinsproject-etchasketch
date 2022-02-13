const main = document.querySelector(".mc-border");
let count = 0;

for(let i = 0; i < 16; i++){
    let vertical = document.createElement('div')
    vertical.classList.add('squareRow');
    for(let j = 0; j < 16; j++){
        let horizontal = document.createElement('DIV');
        horizontal.classList.add('squareCol');
        vertical.appendChild(horizontal);
        horizontal.textContent = count++;
    }
    main.appendChild(vertical);
}