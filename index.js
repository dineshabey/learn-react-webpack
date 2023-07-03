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

function toggleDescription() {
    if (isVisibale) {
        descriptionP.style.display = 'block';
    } else {
        descriptionP.style.display = 'none ';

    }
}

