// Function to change the product image based on the selected color
function changeProductColor(imageFileName, imageId) {
    // Get the product image by its id
    const productImage = document.getElementById(imageId);

    // Change the source of the product image based on the clicked color
    productImage.src = imageFileName;

    // Optional: Update the selected color visual (you can highlight the clicked color)
    let colors = document.querySelectorAll('.color');
    colors.forEach(color => {
        color.classList.remove('selected-color');
    });

    // Highlight the selected color
    event.target.classList.add('selected-color');
}

// Filter products based on search input
let container = document.getElementById("one");
let search = document.getElementById("search");
let elements = container.querySelectorAll(".products-list");

search.addEventListener("keyup", function(event) {
    let enteredValue = event.target.value.toUpperCase();

    for (let count = 0; count < elements.length; count++) {
        let productName = elements[count].querySelector("p").textContent;
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            elements[count].style.display = "none";
        } else {
            elements[count].style.display = "block";
        }
    }
});
