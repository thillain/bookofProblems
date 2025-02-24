/**
 * 
 * This problem published on newsletter by Feb 17 Problem.
 * Given an array of attack damages and a shield capacity for a spaceship, return the index when cumulative damage exceeds the shield. Return -1 if shield survives.
 */ 
 
 //findShieldBreak([10, 20, 30, 40], 50)
 //2
 
 //findShieldBreak([1, 2, 3, 4], 20)
 //-1

//findShieldBreak([50], 30)
//0

function findShieldBreak(damages, capacity) {
    let total = 0;
    for (let i = 0; i < damages.length; i++) {
        total += damages[i];
        if (sum > capacity) {
            return i;
        }
    }
    return -1;
}


console.log(findShieldBreak([10, 20, 30, 40], 50));
console.log(findShieldBreak([1, 2, 3, 4], 20));
console.log(findShieldBreak([50], 30));

