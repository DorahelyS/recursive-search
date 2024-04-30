//input: [2,3,7,9], 3
//output: true 

//starting with three parameters the array, the target to search for, and current index which is starting at 0
function recursiveSearch(arr, target, index = 0) {
  //base case: if current element equals target, return true
  //arr[index] is the value stored at that index!
  if (arr[index] === target) {
    return true;
  }
  //If the index equals the last element in my array , return false
  //this line will search entire array and it target not found then returns false
  //when to use arr.length or arr.length - 1?
  //arr.length is good for knowing how many elements in array: for ex if I have 3 then length would be 3
  //arr.length - 1 is good for knowing the last index of last element in my array so if I have 3  then idex would be 2
  //when I need to specifically reference the last element of my array use arr.length - 1 
  //^or want to make sure my loop terminates at the end of the array & want it to stop at last element
  if (index === arr.length - 1) {
    return false;
  }
  
  //recursive case:
  //calling the function itself(aka recursion)
  //then takes 3 arguments
  //first is the array that is being search which ensures that the recursive call continues to only search within the same array
  //second is the target aka value that is looking for this is done again to make sure it for teh recurive call that all call are searching for the same target/value
  //index + 1 is the increment value - makes sure that after each recurive call it moves on to the next element or value in the array 
  //which allow it to then search the next value without this step the function would just get stuck on that value or index

  return recursiveSearch(arr, target, index + 1);
}

/*
//non recursive way - with loops
//using for...of
function usingForOf(arr, target){
  for(const value of arr){
    if(value === target){
      return true
    }
  }
return false
}

//using for...in
function usingForIn(arr, target){
  for (const value in arr){
    if (arr[value] === target){
      return true
    }
  }
  return false
}

//using traditional for loop
function traditionalForLoop(arr, target){
  for (let i=0; i<arr.length; i++){
    if(arr[i]===target){
      return true
    }
  }
  return false
}
*/

//traditional loop ex again:
/*
function recursiveSearch(arr, target) {
  // Iterate through the array using a for loop
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    // If current element equals target, return true
    if (value === target) {
      return true;
    }
  }
  // If the loop completes without finding the target, return false
  return false;
}
*/

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3, 4, 7], 8));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1, 8], 1));
}

module.exports = recursiveSearch;

//writing down basic code explanations
//difference between for...in  , for...of , and traditional for loop ( i = 0; i < arr.length; i++)

// for...in
//iterating over object properties 
//in very basic wording: 
//let's say I have a box of numbers, letter, and shapes and I also have a corresponding tag that goes with them
//with this loop it is like looking at each tag but the issue arries when there are more tags than things in the box
//or I just want to look at letters but may accidentally look at numbers
//more time to waste because I have to read all the tags first can't just focus on one thing
//for example for this method I have to look at the numbers tags and shapes tags one by one even though I only want the letters

//for...of
//lets say I just want shapes again
//this one is like taking out each shape from the box this is great for arrays
//because it allows for just that shapes to be the focus not numbers or letters
//don't need to look at each element one by one

//traditional for loop
//this like counting each element in the box as I take them out one by one
//good if I want to do anything additional with the items in teh box or if I want to sure I looked at each one.





