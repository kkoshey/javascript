const countVowels = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  word.toLowerCase();
  symbols = word.split('');
  const onlyVowels = symbols.filter(function (symbol) {
    return vowels.includes(symbol);
  })
  return onlyVowels.length;
}