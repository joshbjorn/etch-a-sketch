let container = document.querySelector('#container');
let gridSize; 
let gridSizeInt; 

container.classList.add('grid')

function defaultGridMaker() {

    let i = 1;

    while (i <= 256) {

        let div = document.createElement('div'); 
        div.setAttribute('class', 'gridbox');
        container.appendChild(div);

        container.addEventListener('mouseover', function(e) {

            if (e.target.className === "gridbox") {
            e.target.style.backgroundColor = 'black';
            }
        })
        i++
    }

};

function newGridMaker() {

    customGridPrompter();

    let i = 1;

    while (i <= (gridSizeInt*gridSizeInt)) {

        let div = document.createElement('div'); 
        div.setAttribute('class', 'gridbox');
        container.appendChild(div);

        container.addEventListener('mouseover', function(e) {

            if (e.target.className === "gridbox") {
                e.target.style.backgroundColor = 'black';
            }
        })
        i++
    }
};

function colourGridMaker() {

    customGridPrompter()

    let i = 1;

    while (i <= (gridSizeInt*gridSizeInt)) {

        let div = document.createElement('div'); 
        div.setAttribute('class', 'gridbox');
        container.appendChild(div);

        container.addEventListener('mouseover', function(e) {

            if (e.target.className === "gridbox") {
            e.target.style.backgroundColor = `${getRandomColor()}`;
            }
        })
        i++
    }

}

function gradientGridMaker() {

    customGridPrompter()

    let i = 1;

    while (i <= (gridSizeInt*gridSizeInt)) {

        let div = document.createElement('div'); 
        div.setAttribute('class', 'gridbox');
        container.appendChild(div);

        let o = 0.1;

        container.addEventListener('mouseover', function(e) {

            if (o > 1){
                o = 0.1;
            }

            o += 0.1;

            if (e.target.className === "gridbox") {
                e.target.setAttribute('style', `background-color: black; opacity: ${o}`);
            }
       

        })
        i++
    }

}

function customGridPrompter() {

    do { 

        gridSize = prompt('How big would you like your grid to be?');

        if (isNaN(gridSize)){
            alert('Invalid entry. Please enter a number.');
        } else {
            gridSizeInt = parseInt(gridSize, 10); 
            container.classList.remove('grid');
            container.setAttribute('style', 'display: grid;' + `grid-template-columns: repeat(${gridSizeInt}, 30px);` + `grid-template-rows: repeat(${gridSizeInt}, 30px); grid-gap: 1px;`)
        }

    } 
    
    while (isNaN(gridSize));

};

function newGridSelectors() {

    let buttons = document.querySelector('#buttons');

    buttons.addEventListener('click', function(e){
        
        gridClearer();

        if (e.target.matches('.colourgrid')) {
            colourGridMaker();
        } else if (e.target.matches('.gradientgrid')){
            gradientGridMaker();
        } else if (e.target.matches('.newgrid')){
            newGridMaker();
        } 
    
    })
};

function gridClearer(){

    let gridboxes = document.getElementsByClassName('gridbox');
        
    for (let i = 0; i < gridboxes.length; i++) { 
            container.removeChild(gridboxes[i]);
            i--
    }

}

function getRandomColor() {

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
}
  

defaultGridMaker(); 

newGridSelectors();













