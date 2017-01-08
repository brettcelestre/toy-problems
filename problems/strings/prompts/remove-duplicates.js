//remove the duplicates out of string ex: google | output: le

var removeDuplicates = function(str) {
    var result = '', storage = {};
    for( var i = 0; i < str.length; i++) {
        storage[str[i]] === true ? storage[str[i]] = false : storage[str[i]] = true;
    }
    for ( var key in storage ) {
        if ( storage[key] == true ) {
        result += key;
        }
    }
    console.log('result: ', result);
    return result;
};

removeDuplicates('google');