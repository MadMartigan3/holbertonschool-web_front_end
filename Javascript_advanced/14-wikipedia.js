function welcome(firstName, lastName) {
    // Create fullName variable by combining firstName, space, and lastName
    const fullName = firstName + " " + lastName;
    
    // Inner function to display the welcome message
    function displayFullName() {
        alert("Welcome " + fullName + "!");
    }
    
    // Call the displayFullName function
    displayFullName();
}

// Example usage:
// welcome("John", "Doe"); // This would show an alert: "Welcome John Doe!"

function createElement(data) {
    // Create a paragraph element
    const paragraph = document.createElement('p');
    
    // Set the content of the paragraph to the data
    paragraph.textContent = data;
    
    // Append the paragraph to the document body
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    // Create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();
    
    // Configure the request
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    
    // Set up the response handler
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Parse the JSON response
            const response = JSON.parse(xhr.responseText);
            
            // Extract the page data (the first page in the query result)
            const pages = response.query.pages;
            const pageId = Object.keys(pages)[0];
            const extract = pages[pageId].extract;
            
            // Call the callback function with the extract
            callback(extract);
        } else {
            console.error('Error fetching Wikipedia data:', xhr.status);
        }
    };
    
    // Handle network errors
    xhr.onerror = function() {
        console.error('Network error occurred');
    };
    
    // Send the request
    xhr.send();
}

// Call queryWikipedia with createElement as callback
queryWikipedia(createElement);
