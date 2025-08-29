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
