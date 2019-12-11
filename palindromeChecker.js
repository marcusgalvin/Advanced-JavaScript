function palindrome(str) {
  //lower case all and remove spaces from str
  str = str.toLowerCase('').replace(/\s/g, '');
  console.log(str)

  var reverse = str.split('').reverse('').join('');
  console.log('reversed:', reverse)

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < reverse.length; j++) {

      // if (str[i])
    }
  }
