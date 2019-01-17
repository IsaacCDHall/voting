function canVote(age) {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}

$(document).ready(function (event) {

  var age = parseInt(prompt("What is your age"));
  console.log('test');
  if (canVote(age) === true) {
    //show voting info
    $('.minor').hide();
    $('.adult').show();
  } else {
    //shwo minor links to more voting info
    $('.adult').hide();
    $('.minor').show();
  }
  event.preventDefault();

});
