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
