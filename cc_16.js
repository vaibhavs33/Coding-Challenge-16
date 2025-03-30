//Storing the API URL where the product data is located
const productUrl = 'https://www.course-api.com/javascript-store-products';

//Task 2 - Fetching Products with .then()
function fetchProductsThen() {
    //Fetching data from the API URL
    fetch(productUrl)
    
    //When the API responds, handle the response
    .then(response => {
        //Checking if the API response was successful
        if (!response.ok) {
            //If it's not successful, throw an error to stop the process
            throw new Error('Network response was not ok');
        }
        
        //Converting the response data to JSON
        return response.json();
    })
    
    //When the JSON data is ready, go through each product
    .then(products => {
        //Looping through each product in the list
        products.forEach(product => {
            //Printing each product name to the console
            console.log(product.fields.name);
        })
    })
    
    //If something goes wrong during fetch or processing
    .catch(error => {
        //Print the error to the console
        console.error('There was a problem with the fetch operation:', error);
    })
}

//Task 3 - Fetching Products with async/await
async function fetchProductsAsync() {
    try{
        //Fetching product data from the API using await
        const response = await fetch(productUrl);
        
        //Converting the response to JSON format
        const products = await response.json();
        
        //Displaying the products on the webpage
        displayProducts(products);
    }
    catch(error){
        //If there's any error, handle it using the error function
        handleError(error);
    }
}

//Task 4 - Display the Products
function displayProducts(products) {
    //Selecting the container where product cards will go
    let divProductContainer = document.getElementById('product-container');
    
    //Going through the first 5 products
    products.slice(0, 5).forEach(product => {
        //Creating a product card and assigning a class for styling
        const productCard = document.createElement('div');
        productCard.setAttribute('class','product-card');
        
        //Creating and adding the product name
        const productName = document.createElement('h3');
        productName.setAttribute('class', 'product-header');
        productName.textContent = product.fields.name;
        productCard.append(productName);
        
        //Creating and adding the product price
        const productPrice = document.createElement('div');
        productPrice.setAttribute('class', 'product-price');
        productPrice.textContent = '$' + product.fields.price;
        productCard.append(productPrice);
        
        //Creating and adding the product image
        const divProductImage = document.createElement('div');
        divProductImage.setAttribute('class', 'product-image');
        const productImage = document.createElement('img');
        productImage.src =  product.fields.image[0].thumbnails.small.url;
        productImage.width = 140;
        productImage.height = 120;
        divProductImage.append(productImage);
        productCard.append(divProductImage);
        
        //Appending the product card to the main container
        divProductContainer.append(productCard);
    })
    
}

//Task 5 - Reusable Error Handler
function handleError(error) {
    //Printing out the error message to the console
    console.log("An error occurred: ", error);
}

//Task 6 - Calling Fetch Functions

//Calling fetchProductsThen() to get the product names and show them in the console
fetchProductsThen();

//Calling fetchProductsAsync() to display products on the webpage
fetchProductsAsync();