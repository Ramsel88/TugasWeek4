function makanTerusRekursif(waktu) {
  var hasil = 0
    if(waktu > 0){
        hasil+=Math.ceil(waktu/15)
  }
  return hasil
}

function jumlahPesan (waktu) {
    if(waktu <= 0){
        return 0
    } 
        else {
    return hasil
} 
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0