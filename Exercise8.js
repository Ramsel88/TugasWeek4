function tukarBesarKecil(kalimat) {
  var hasil = "";
  for (var i = 0; i < kalimat.length; i++) {
    var upper = kalimat[i].toUpperCase();
    var lower = kalimat[i].toLowerCase();

    if (kalimat[i] === upper) {
      hasil += lower;
    } else if (kalimat[i] === lower) {
      hasil += upper;
    }
  }
  return hasil;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
