// Set Up Sets and Maps: You're working with a list of product IDs that might contain duplicates. 
// Use a Set to remove all duplicates and return the unique product IDs.

const removeDupes=(dupes)=>{
    let noDupes = new Set (dupes)
    return noDupes
}
console.log(removeDupes([1,2,2,4]))