let nameArray = ["matt",  "steve", "dave", "matthew", "jane"];
let searchParameter = "matt";
let matchedIds = [];

nameArray.forEach((nameArray) => {
    if (nameArray.includes(searchParameter) == true) {matchedIds.push(nameArray)}
});

console.log(matchedIds.toString());