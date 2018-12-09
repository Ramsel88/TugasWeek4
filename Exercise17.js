function kaliTerusRekursif(angka) {
    if (angka < 10) {
        return angka;
    } else {
        var hasilAngka = angka.toString();
        var result = 1;
        for (var i = 0; i < hasilAngka.length; i++) {
            result *= Number(hasilAngka[i]);
        }
        return kaliTerusRekursif(result);
    }

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6