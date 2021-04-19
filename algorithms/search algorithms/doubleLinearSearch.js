let idArray = [4, 778, 94, 462, 832];
let nameArray = ["matt",  "steve", "dave", "matthew", "jane"];
let searchParameter = "matt";
let matchedIds = [];

nameArray.forEach((nameArray, index) => {
    if (nameArray.includes(searchParameter) == true) {matchedIds.push(idArray[index])}
});

console.log(matchedIds.toString());