const addProductsContainerElem = document.getElementById("addProductsContainer");

async function addAndDisplayProducts() {
    try {
        const response = await

            fetch("https://fakestoreapi.com/carts")

        if (!response.ok) {
            console.error("We could not add the product");
            return;
        }

        const products = await response.json();

        const productsLength = products.length;

        for (let index = 0; index < productsLength; index++) { }
    } 
}