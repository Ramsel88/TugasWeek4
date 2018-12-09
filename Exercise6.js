function digitPerkalianMinimum(angka) {
  var temp = "";
  for (var i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      var hasilBagi = angka / i;
      // bikin var temp gabungan string antara pembagi i dan hasil bagi angka dengan i trus di join,tambah spasi biar ntar enak displit
      temp += String(i) + String(hasilBagi) + " ";
    }
  }
  //bikin array dari hasil gabungan string sebelumnya trus dsplit pake spasi
  angkaArr = temp.split(" ");
  //console.log(angkaArr);

  //di pop agar string ujung yg bentuk spasi kehapus
  angkaArr.pop();
  //proses membandingkan
  var pembandingDigit = angkaArr[0].length;
  for (var j = 0; j < angkaArr.length; j++) {
    if (angkaArr[j].length < pembandingDigit) {
      pembandingDigit = angkaArr[j].length;
    }
  }
  return pembandingDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
