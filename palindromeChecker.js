function palindrome(str) {
  //lower case all and remove spaces from str
  str = str.toLowerCase('').replace(/[^A-Z0-9]/gi, "");
  console.log('original:', str)

  var reverse = str.split('').reverse('').join('');
  console.log('reversed:', reverse)

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < reverse.length; j++) {
      // console.log(reverse[j])

      if (str[i] == reverse[j]) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

// palindrome("eye");
// palindrome("not a palindrome");
// palindrome("My age is 0, 0 si ega ym.")
palindrome("almostomla");