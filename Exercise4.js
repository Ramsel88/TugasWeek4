function cariModus(arr) {
  var hasil = 0;
  var pembanding = 0;
  for (var i = 0; i < arr.length; i++) {
    var temp = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] && i !== j) {
        temp += 1;
        if (temp > pembanding) {
          pembanding = temp;
          hasil = i;
        } 
      }
      
    }
  }

  if (pembanding === 0 || pembanding === arr.length - 1) {
    return -1;
  }
  return arr[hasil];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4, 2, 3,])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7, 7])); // -1
