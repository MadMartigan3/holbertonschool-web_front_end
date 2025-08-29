function countPrimeNumbers() {
    var count = 0;
    
    for (var i = 2; i <= 100; i++) {
        var isPrime = true;
        
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            count++;
        }
    }
    
    return count;
}

var startTime = performance.now();
countPrimeNumbers();
var endTime = performance.now();
var executionTime = endTime - startTime;

console.log('Execution time of printing countPrimeNumbers was ' + executionTime + ' milliseconds.');
