function factorialize(num) {
  for (var result = 1; num > 0; num--) {
    result *= num;
  }
  return result;
}

factorialize(5);
