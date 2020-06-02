function convertHTML(str) {
  var result = str.split("");

  for (var i = 0; i < result.length; i++) {
    switch (result[i]) {
      case "&":
        result[i] = "&amp;";
        break;
      case "<":
        result[i] = "&lt;";
        break;
      case ">":
        result[i] = "&gt;";
        break;
      case '"':
        result[i] = "&quot;";
        break;
      case "'":
        result[i] = "&apos;";
        break;
    }
  }

  result = result.join("");
  return result;
}

convertHTML("Dolce & Gabbana");
