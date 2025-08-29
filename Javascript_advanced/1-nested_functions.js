// Create global variable
var globalVariable = 'Welcome';

// Create outer function
function outer() {
    // Alert global variable content
    alert(globalVariable);
    
    // Create course variable
    var course = 'Holberton';
    
    // Create inner function
    function inner() {
        // Alert concatenated globalVariable and course
        alert(globalVariable + ' ' + course);
        
        // Create exclamation variable
        var exclamation = '!';
        
        // Create inception function
        function inception() {
            // Alert concatenated globalVariable, course, and exclamation
            alert(globalVariable + ' ' + course + exclamation);
        }
        
        // Call inception function
        inception();
    }
    
    // Call inner function
    inner();
}

// Call outer function
outer();
