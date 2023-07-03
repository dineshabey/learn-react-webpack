let toggleButton = document.querySelector('#myButton');
let descriptionP = document.querySelector('#myPara');

toggleButton.onclick = changeVisibility;
let isVisibale = false;


toggleDescription();
function changeVisibility() {
    isVisibale = !isVisibale;
    // console.log(isVisibale)
    toggleDescription();
}


//chnage tongle para description ===============
function toggleDescription() {
    changeButtontext();
    if (isVisibale) {
        descriptionP.style.display = 'block';
    } else {
        descriptionP.style.display = 'none ';

    }
}

//chnage button name ===============
function changeButtontext() {
    if (isVisibale) {
        toggleButton.textContent = 'Hide Description';
    } else {
        toggleButton.textContent = 'Show Description';

    }

}

