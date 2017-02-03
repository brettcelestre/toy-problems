// camelCase to snake_case

const snakeCaseConverter = (str) => {
  if ( typeof str === 'string' ) {
    let x = str.split(''), result = '';
    x.forEach(val => {
      if ( val === val.toUpperCase() ) {
        result += '_' + val.toLowerCase();
      } else {
        result += val;
      } 
    });
    return result;
  }
  return 'Input must be a string';
};

module.exports = { snakeCaseConverter };