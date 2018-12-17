function changeVocals(str) {
  var result = ""
  var vocal = 'aiueoAIUEO'
  var newVocal = 'bjvfpBJVFP'
  
  var flag = false
  for(var i = 0; i < str.length; i++){
      for(var j = 0; j < vocal.length; j++){
          if(str[i] === vocal[j]){
              result += newVocal[j]
              flag = true
          }
      }
      if(flag === false){
          result += str[i]
      }
      flag = false
  }
return result
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
