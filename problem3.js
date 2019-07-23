
function isPrime(iterator) {
    if((iterator <= 2 || iterator % 2 == 0)) {
        return false;
    }
    for (let index = 3; index < Math.sqrt(iterator); index+=2) {
        if (iterator % index == 0) {
            return false;
        }
        
    }
    return true;
}

let limitOfCycle = 600851475143;
let primeFactor = 600851475143;
let iterator = 1
let greatestFactor = 0

while (iterator <= limitOfCycle) {
    if(isPrime(iterator)) { 
        if(primeFactor % iterator == 0) {
            greatestFactor = iterator;
        }
        limitOfCycle = primeFactor / iterator;
    }
    iterator++;
}
console.log(greatestFactor);