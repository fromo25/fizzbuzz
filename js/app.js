$(document).ready(function() {

	for(var numCounter = 1; numCounter <= 100; numCounter+=1){

  if( numCounter % 3 === 0 && numCounter % 5 === 0){
		console.log("FizzBuzz");
    $('p').append("FizzBuzz" + '<br>');
  }else if(numCounter % 3 === 0){
		console.log("Fizz");
    $('p').append("Fizz" + '<br>');
  }else if(numCounter % 5 === 0){
		console.log("Buzz");
    $('p').append("Buzz" + '<br>');
  }else{
		console.log(numCounter);
		$('p').append(numCounter + '<br>');
  }
}

});