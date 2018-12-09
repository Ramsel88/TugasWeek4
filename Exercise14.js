function changeVocals(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      result += "b";
    } else if (str[i] === "i") {
      result += "j";
    } else if (str[i] === "u") {
      result += "v";
    } else if (str[i] === "e") {
      result += "f";
    } else if (str[i] === "o") {
      result += "p";
    } else if (str[i] === "A") {
      result += "B";
    } else if (str[i] === "I") {
      result += "J";
    } else if (str[i] === "U") {
      result += "V";
    } else if (str[i] === "E") {
      result += "F";
    } else if (str[i] === "O") {
      result += "P";
    } else {
      result += str[i];
    }
  }
  return result;
}

function reverseWord(str) {
  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function setLowerUpperCase(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var upper = str[i].toUpperCase();
    var lower = str[i].toLowerCase();

    if (str[i] === upper) {
      result += lower;
    } else if (str[i] === lower) {
      result += upper;
    }
  }
  return result;
}

function removeSpaces(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
}

function passwordGenerator(name) {
  var huruf = changeVocals(name);
  var balikKata = reverseWord(huruf);
  var gantiUkuran = setLowerUpperCase(balikKata);
  var hapusSpasi = removeSpaces(gantiUkuran);

  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  } else {
    return hapusSpasi;
  }
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
