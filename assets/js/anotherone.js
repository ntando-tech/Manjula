// Get the image element
const imgElement = document.getElementById("img1");

// Add a click event listener to the image
imgElement.addEventListener("click", function () {
    displayOtherImages();
});

// Function to display other images
function displayOtherImages() {
    // Get the displayInfo element
    const displayInfo = document.getElementById("displayInfo");

    // Replace the content of displayInfo with the new images
    displayInfo.innerHTML = `
        <div>
            <img class="otherImage" src="assets/img/tastic.png" alt="Another Image 1">
            <img class="otherImage" src="assets/img/ilembe.png" alt="Another Image 2">
            <img class="otherImage" src="assets/img/tastic.png" alt="Another Image 3">
        </div>
    `;
}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

