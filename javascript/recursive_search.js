function recursiveSearch(arr, target) {
  // type your code here
}

//non recursive way - with loops

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
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





