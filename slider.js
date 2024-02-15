const imgs= [
    "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const imageElement = document.getElementById("slider");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

let currInd = 0;

function showImage(ind) {
    imageElement.src = imgs[ind];
}

function next() {
    currInd = (currInd + 1) % imgs.length;
    showImage(currInd);
}

function previous() {
    currInd = (currInd - 1 + imgs.length) % imgs.length;
    showImage(currInd);
}



showImage(currInd);


prevButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);
