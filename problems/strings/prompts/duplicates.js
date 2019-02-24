// Complete the isValid function below.
function isValid(s) {
  console.log('st', s);
  // Count letters
  let letters = s.split('').reduce((acc, val) => {
      !acc[val] ? acc[val] = 1 : acc[val]++;
      return acc;
  }, {});

  console.log('letters = ', letters);

  let diffs = {}; 
  for (let key in letters) {
      if (!diffs[letters[key]]) {
          diffs[letters[key]] = 1;
      } else {
          diffs[letters[key]]++;
      }
  }
  // Too Many Different Letter Counts
  if (Object.keys(diffs).length > 2) {
    console.log('too long');
    return 'NO'
  }
  // Too Many Single letters
  if (diffs['1'] > 1) {
    console.log('toooo long');
    return 'NO';
  }

  let arr = [];
  let repeats = []
  Object.keys(diffs).forEach((val, i) => {
    arr.push(Number(val));
    repeats.push(diffs[val]);
  });

  console.log('arr = ', arr);
  console.log('diffs', diffs);
  console.log('repeats', repeats);
  
  if ( Math.abs(arr[0] - arr[1]) > 1 || !repeats.includes(1)) {
    console.log('Too big a difference', Math.abs(arr[0] - arr[1]));
    return 'NO';
  }

  console.log('We good');
  return 'YES';
  
}

// isValid('abbccddeef');
isValid('abcdefghhgfedecba');
// isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd');