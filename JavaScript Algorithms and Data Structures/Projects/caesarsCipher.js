function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str
    .split("")
    .map((char) => {
      const pos = alphabet.indexOf(char);
      if (pos >= 0) {
        return alphabet[(pos + 13) % 26];
      } else {
        return char;
      }
    })
    .join("");
}

rot13("SERR PBQR PNZC");
