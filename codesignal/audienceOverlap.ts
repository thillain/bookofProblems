// Your task is to determine if there's any overlap in visitors between these markets. 
// Each visitor ID is represented as a unique integer in the logs. 
// Write a function that returns true if there's any overlap in visitors between the two markets and false otherwise.

function audienceOverlap(market1: number[], market2: number[]): boolean {
    // TODO: check if a member in market1 exists in market2
    // TODO: return true if an overlap is found, otherwise return false

    const set1 = new Set(market1);
    return market2.some(element => set1.has(element));
}

let market1 = [1, 2, 3, 4, 5];
let market2 = [6, 7, 8, 9, 10];

if (audienceOverlap(market1, market2)) 
    console.log("Yes, there is an audience overlap between both markets.");
else 
    console.log("No, there is no audience overlap between both markets.");